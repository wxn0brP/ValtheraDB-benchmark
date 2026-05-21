import { adapterName, fmt, parseEntry, threshold } from "./utils";
import { medals, state } from "./var";

interface BenchmarkEntry {
    dir: string;
    time: number;
}

function groupByThreshold(sorted: BenchmarkEntry[]) {
    if (!sorted.length) return [];

    const groups: BenchmarkEntry[][] = [];
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

function placeCellHTML(g: BenchmarkEntry[]) {
    const avg = g.reduce((s, x) => s + x.time, 0) / g.length;
    const names = g.map(x => {
        const info = parseEntry(x.dir);
        return `${adapterName(info.adapter)}/${info.ver}`;
    }).join(", ");
    return `<span class="adapter">${names}</span> <span class="time">${fmt(avg)}</span>`;
}

export function renderSummary() {
    const notRanked = ["memory"];
    const rankingEntries = state.entries.filter(e => !notRanked.includes(e.info.adapter));
    const allOps = [...new Set(rankingEntries.flatMap(e => e.data.results.map(r => r.name)))].sort();

    const container = document.querySelector<HTMLDivElement>("#summary-cards");
    container.innerHTML = "";

    for (const op of allOps) {
        const withTime = rankingEntries
            .map(e => ({ dir: e.dir, time: e.data.results.find(r => r.name === op)?.time }))
            .filter((x): x is { dir: string; time: number } => x.time !== undefined);

        if (!withTime.length) continue;

        let cardHTML = `<article><header><strong>${op}</strong></header>`;

        const sorted = withTime.sort((a, b) => a.time - b.time);
        const groups = groupByThreshold(sorted);

        for (let i = 0; i < Math.min(3, groups.length); i++) {
            cardHTML += `
                <div style="margin-bottom: 0.5rem;">
                    <span style="display:flex; align-items:center; gap:0.5rem;">
                        <span>${medals[i]}</span>
                        ${placeCellHTML(groups[i])}
                    </span>
                </div>`;
        }

        cardHTML += `</article>`;
        container.innerHTML += cardHTML;
    }
}
