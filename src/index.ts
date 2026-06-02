import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { db } from "./db";
import { benchmarkLarge } from "./large";
import { type BenchResult } from "./run";
import { benchmarkSmall } from "./small";

process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled rejection:", reason);
    process.exit(1);
});

const adapterName = process.env.VALTHERA_MASTER || "";

const [pkg] = adapterName.split(":");
const setupPath = resolve(import.meta.dirname, "custom", `${pkg}.js`);
if (existsSync(setupPath)) {
    console.log(`-> Using custom setup for ${pkg}`);
    const mod = await import("./custom/" + pkg + ".js");
    if (typeof mod.init === "function")
        await mod.init(db.dbAction);
    else
        console.log(`-> No init function found for ${pkg}`);
} else
    console.log(`-> No custom setup found for ${pkg}`);

const allResults: BenchResult[] = [];
const resultFile = "result.json";

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

if (existsSync(resultFile)) {
    const oldResults = JSON.parse(readFileSync(resultFile, "utf-8"));
    results.results = [...oldResults.results, ...results.results];
}

writeFileSync(resultFile, JSON.stringify(results, null, 2));
setTimeout(() => process.exit(0), 3000).unref(); // exit force after 3 seconds
