import { writeFileSync } from "fs";
import { db } from "./db";
import { benchmarkLarge } from "./large";
import { type BenchResult } from "./run";
import { benchmarkSmall } from "./small";

const allResults: BenchResult[] = [];

console.log("small collection (users, 10k)");
const smallResults = await benchmarkSmall(db.c("users"));
allResults.push(...smallResults);

console.log("large collection (posts, 200k)");
const largeResults = await benchmarkLarge(db.c("posts"));
allResults.push(...largeResults);

const results = {
    time: new Date().toISOString(),
    os: process.platform,
    arch: process.arch,
    node: process?.version,
    bun: globalThis.Bun?.version || "N/A",
    adapter: process.env.VALTHERA_MASTER,
    results: allResults,
};

writeFileSync("result.json", JSON.stringify(results, null, 2));
