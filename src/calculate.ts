import { readFileSync, readdirSync, writeFileSync, statSync } from "fs";
import { join } from "path";

interface BenchResult {
    name: string;
    time: number;
}

interface ResultFile {
    os?: string;
    arch?: string;
    node?: string;
    bun?: string;
    adapter?: string;
    results: BenchResult[];
}

function median(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function normalize(results: BenchResult[]): BenchResult[] {
    const map = new Map<string, number[]>();
    for (const r of results) {
        const arr = map.get(r.name);
        if (arr) arr.push(r.time);
        else map.set(r.name, [r.time]);
    }
    const out: BenchResult[] = [];
    for (const [name, times] of map) {
        out.push({ name, time: median(times) });
    }
    return out;
}

interface ParsedEntry {
    adapter: string;
    ver: string;
    os: string;
}

function parseEntry(dir: string): ParsedEntry {
    const p = dir.split("__");
    return { adapter: p[0], ver: p[1], os: p[2] };
}

function fmt(ms: number): string {
    if (ms >= 1000) return (ms / 1000).toFixed(2) + "s";
    if (ms >= 1) return ms.toFixed(1) + "ms";
    return "1.0ms";
}

function shortOp(name: string): string {
    return name.replace(/-(?:small|large)$/, "");
}

const OP_ORDER_SMALL = [
    "add-small", "findOne-small", "find-search-small", "find-paginated-small",
    "updateOne-small", "update-search-small", "removeOne-small", "remove-search-small",
    "find-small", "update-small", "remove-small",
];

const OP_ORDER_LARGE = [
    "add-large", "findOne-large", "find-search-large", "find-paginated-large",
    "updateOne-large", "update-search-large", "removeOne-large", "remove-search-large",
];

const dirs = readdirSync(".").filter(d => {
    try { return statSync(d).isDirectory() && statSync(join(d, "result.json")).isFile(); }
    catch { return false; }
});

const entries: Array<{ dir: string; info: ReturnType<typeof parseEntry>; data: ResultFile }> = [];
for (const d of dirs.sort()) {
    const raw = readFileSync(join(d, "result.json"), "utf-8");
    const data: ResultFile = JSON.parse(raw);
    data.results = normalize(data.results);
    entries.push({ dir: d, info: parseEntry(d), data });
}

let md = `# Benchmark Report

Generated: ${new Date().toISOString()}
Total results: ${entries.length}

## Notes

- All timings are computed as the median of 10 benchmark runs per operation.
- Benchmarks are executed on GitHub Actions runners using default hosted virtual machines (no dedicated or self-hosted hardware).

`;

const adapters = [...new Set(entries.map(e => e.info.adapter))];

function formatRuntime(ver: string): string {
    return ver === "bun" ? "bun" : `node ${ver}`;
}

for (const adapter of adapters) {
    const group = entries.filter(e => e.info.adapter === adapter);
    const verOrder = ["bun", "24", "22", "20"];
    group.sort((a, b) => {
        const ai = verOrder.indexOf(a.info.ver);
        const bi = verOrder.indexOf(b.info.ver);
        if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        return a.info.os.localeCompare(b.info.os);
    });

    md += "## " + adapter + " Adapter\n\n";
    md += "| Runtime / OS | Arch | Ops |\n";
    md += "|---|---|---|\n";
    for (const e of group) {
        md += "| " + formatRuntime(e.info.ver) + " / " + e.info.os + " | " + (e.data.arch || "?") + " | " + e.data.results.length + " |\n";
    }
    md += "\n";

    const sections: [string, string[]][] = [
        ["Small Collection (users, 10k)", OP_ORDER_SMALL],
        ["Large Collection (posts, 200k)", OP_ORDER_LARGE],
    ];

    for (const [label, ops] of sections) {
        const present = ops.filter(op => group.some(e => e.data.results.some(r => r.name === op)));
        if (!present.length) continue;

        const headers = present.map(o => "`" + shortOp(o) + "`");
        md += "### " + label + "\n\n";
        md += "| Runtime / OS | " + headers.join(" | ") + " |\n";
        md += "|---|" + present.map(() => "---").join("|") + "|\n";

        for (const e of group) {
            const cells = [" " + formatRuntime(e.info.ver) + " / " + e.info.os + " "];
            for (const op of present) {
                const r = e.data.results.find(r => r.name === op);
                cells.push(r ? " " + fmt(r.time) + " " : " - ");
            }
            md += "| " + cells.join("| ") + " |\n";
        }
        md += "\n";
    }
}
function threshold(ms: number): number {
    return ms < 10 ? 0.05 : 0.01;
}

function groupByThreshold(sorted: Array<{ dir: string; time: number }>): Array<Array<{ dir: string; time: number }>> {
    const groups: Array<Array<{ dir: string; time: number }>> = [];
    let cur = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        const prev = cur[cur.length - 1];
        const t = threshold(prev.time);
        if ((sorted[i].time - prev.time) / prev.time <= t) {
            cur.push(sorted[i]);
        } else {
            groups.push(cur);
            cur = [sorted[i]];
        }
    }
    groups.push(cur);
    return groups;
}

function placeCell(g: Array<{ dir: string; time: number }>): string {
    const avg = g.reduce((s, x) => s + x.time, 0) / g.length;
    const names = g.map(x => parseEntry(x.dir).adapter + "/" + parseEntry(x.dir).ver).join(", ");
    return names + " (" + fmt(avg) + ")";
}

const notRanked = [
    "memory"
];

const rankingEntries = entries.filter(e => !notRanked.includes(e.info.adapter));
const allOps = [...new Set(rankingEntries.flatMap(e => e.data.results.map(r => r.name)))].sort();
md += "## Fastest per Operation\n\n";
for (const op of allOps) {
    const withTime = rankingEntries
        .map(e => ({ dir: e.dir, time: e.data.results.find(r => r.name === op)?.time }))
        .filter((x): x is { dir: string; time: number } => x.time !== undefined);

    if (!withTime.length) continue;

    const osSet = [...new Set(withTime.map(x => parseEntry(x.dir).os))].sort();

    md += "### **`" + op + "`**:\n\n";
    md += "| System | 🥇 | 🥈 | 🥉 |\n";
    md += "|---|---|---|---|\n";

    for (const os of osSet) {
        const sorted = withTime.filter(x => parseEntry(x.dir).os === os).sort((a, b) => a.time - b.time);
        const groups = groupByThreshold(sorted);
        const medals = ["🥇", "🥈", "🥉"];
        const cells = [" " + os + " "];
        for (let i = 0; i < 3; i++) {
            cells.push(i < groups.length ? " " + medals[i] + " " + placeCell(groups[i]) + " " : " - ");
        }
        md += "| " + cells.join("|") + " |\n";
    }
    md += "\n";
}

writeFileSync("REPORT.md", md);
console.log("OK REPORT.md generated");
