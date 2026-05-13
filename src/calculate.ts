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

function parseEntry(dir: string): { adapter: string; ver: string; os: string } {
    const p = dir.split("-");
    return { adapter: p[0], ver: p[1], os: p.slice(2).join("-") };
}

function fmt(ms: number): string {
    if (ms >= 1000) return (ms / 1000).toFixed(2) + "s";
    if (ms >= 1) return ms.toFixed(1) + "ms";
    return (ms * 1000).toFixed(0) + "\u00b5s";
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
    entries.push({ dir: d, info: parseEntry(d), data: JSON.parse(raw) });
}

let md = "# Benchmark Report\n\n";
md += "Generated: " + new Date().toISOString() + "  \n";
md += "Total configs: " + entries.length + "\n\n";

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

function formatEnv(dir: string): string {
    const p = parseEntry(dir);
    const runtime = p.ver === "bun" ? "bun latest" : `node ${p.ver}`;
    return `Storage ${p.adapter}, ${runtime}, ${p.os.replace("-", " ")}`;
}

const allOps = [...new Set(entries.flatMap(e => e.data.results.map(r => r.name)))].sort();
md += "## Fastest per Operation\n\n";
for (const op of allOps) {
    const sorted = entries
        .map(e => ({ dir: e.dir, time: e.data.results.find(r => r.name === op)?.time }))
        .filter((x): x is { dir: string; time: number } => x.time !== undefined)
        .sort((a, b) => a.time - b.time);

    if (!sorted.length) continue;
    const top = sorted.slice(0, 3);
    const medals = ["🥇", "🥈", "🥉"];
    const line = top.map((s, i) => "   + " + medals[i] + " `" + formatEnv(s.dir) + "` (" + fmt(s.time) + ")").join("\n");
    md += "- **`" + op + "`**:\n" + line + "\n\n";
}

writeFileSync("REPORT.md", md);
console.log("OK REPORT.md generated");
