import { existsSync, readFileSync, writeFileSync } from "fs";
import { db } from "./db";
import { benchmarkLarge } from "./large";
import { type BenchResult } from "./run";
import { benchmarkSmall } from "./small";

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
