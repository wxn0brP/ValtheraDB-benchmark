import { mkdirSync, writeFileSync } from "fs";
import { chromium } from "playwright";

mkdirSync("result", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(`http://wxn0brp.github.io/ValtheraDB-benchmark/`, { waitUntil: "networkidle" });

await page.waitForSelector("#loader", { state: "hidden", timeout: 120000 });

await page.waitForTimeout(2400);

await page.selectOption("#tables-adapter-select", "ALL");
await page.waitForTimeout(500);

const fullHtml = await page.content();
writeFileSync("result/static.html", fullHtml);

console.log("Finished");

await browser.close();
