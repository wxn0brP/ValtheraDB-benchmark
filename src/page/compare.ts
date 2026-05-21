import { adapterName, fmt } from "./utils";
import { Entry } from "./types";
import { state } from "./var";

export function renderCompare() {
    const adapters = [...new Set(state.entries.map(e => e.info.adapter))].sort();
    const baseSel = document.querySelector<HTMLSelectElement>("#compare-base");
    const targetSel = document.querySelector<HTMLSelectElement>("#compare-target");

    const opts = adapters.map(a => `<option value="${a}">${adapterName(a)}</option>`).join("");
    baseSel.innerHTML = opts;
    targetSel.innerHTML = opts;

    if (adapters.length > 1)
        targetSel.selectedIndex = 1;

    const updateCmp = () => doCompare(baseSel.value, targetSel.value);
    baseSel.addEventListener("change", updateCmp);
    targetSel.addEventListener("change", updateCmp);

    updateCmp();
}

export function doCompare(baseA: string, targetA: string) {
    const container = document.querySelector("#compare-results");
    container.innerHTML = "";
    const { entries } = state;

    const byPlatform = new Map<string, { base?: Entry; target?: Entry }>();
    for (const e of entries) {
        const key = `${e.info.ver}__${e.info.os}`;
        let g = byPlatform.get(key);
        if (!g) byPlatform.set(key, g = {});
        if (e.info.adapter === baseA) g.base = e;
        if (e.info.adapter === targetA) g.target = e;
    }

    const matched = [...byPlatform.values()].filter(g => g.base && g.target);
    if (!matched.length) {
        container.innerHTML = "<p>No shared platforms for comparison.</p>";
        return;
    }

    const allOps = [...new Set(entries.flatMap(e => e.data.results.map(r => r.name)))].sort();

    for (const op of allOps) {
        const baseTimes: number[] = [];
        const targetTimes: number[] = [];

        for (const { base, target } of matched) {
            const bt = base!.data.results.find(r => r.name === op)?.time;
            const tt = target!.data.results.find(r => r.name === op)?.time;
            if (bt !== undefined && tt !== undefined) {
                baseTimes.push(bt);
                targetTimes.push(tt);
            }
        }

        if (!baseTimes.length) continue;

        const bBest = Math.min(...baseTimes);
        const tBest = Math.min(...targetTimes);

        const ratio = bBest / tBest;
        let statClass = "stat-equal";
        let text = "Equal";

        const isTiny = Math.min(bBest, tBest) < 1;
        const fastRatio = isTiny ? 1.15 : 1.05;
        const slowRatio = isTiny ? 0.85 : 0.95;

        if (ratio > fastRatio) {
            statClass = "stat-faster";
            text = `${ratio.toFixed(2)}x Faster`;
        } else if (ratio < slowRatio) {
            statClass = "stat-slower";
            text = `${(1 / ratio).toFixed(2)}x Slower`;
        }

        const betterAdapter = bBest < tBest ? baseA : targetA;

        container.innerHTML += `
            <article style="padding: 1rem; margin-bottom: 0;" title="${adapterName(betterAdapter)} is faster">
                <div style="font-family: monospace; font-size: 0.9rem; margin-bottom: 0.5rem;">${op}</div>
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom: 0.5rem;">
                    <span class="time">${fmt(bBest)}</span>
                    <span class="time">${fmt(tBest)}</span>
                </div>
                <div class="${statClass}" style="font-size: 1.25rem;">${text}</div>
            </article>
        `;
    }
}
