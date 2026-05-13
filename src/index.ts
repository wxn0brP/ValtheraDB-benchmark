import { writeFileSync } from "fs";
import { db } from "./db";
import { performance } from "perf_hooks";

interface Result<T extends (...args: any[]) => any> {
    time: number;
    result: Awaited<ReturnType<T>>;
}

async function run<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): Promise<Result<T>> {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    return {
        time: end - start,
        result,
    };
}

const users = db.c("users");

const add = await run(users.add.bind(users), {
    name: "Jan",
    age: 30,
    email: "[EMAIL_ADDRESS]",
});
const find = await run(users.find.bind(users), {});
const update = await run(users.updateOne.bind(users), { _id: find.result[0]._id }, { age: 31 });
const remove = await run(users.removeOne.bind(users), { _id: find.result[0]._id });

const results = {
    os: process.platform,
    arch: process.arch,
    node: process?.version,
    bun: Bun?.version,
    adapter: process.env.VALTHERA_MASTER,
    results: [
        {
            name: "add-small",
            time: add.time,
        },
        {
            name: "find-small",
            time: find.time,
        },
        {
            name: "update-small",
            time: update.time,
        },
        {
            name: "remove-small",
            time: remove.time,
        },
    ],
}

writeFileSync("result.json", JSON.stringify(results, null, 2));
