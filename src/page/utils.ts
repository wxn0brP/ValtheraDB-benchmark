import { BenchResult } from "../run";
import { ParsedEntry } from "./types";
import { state } from "./var";

export function shortOp(name: string): string {
    return name.replace(/-(?:small|large)$/, "");
}

export function threshold(ms: number): number {
    return ms < 10 ? 0.05 : 0.01;
}

export function adapterName(id: string): string {
    return state.adapterConfig[id] || id;
}

export function mean(values: number[]): number {
    return values.reduce((a, b) => a + b, 0) / values.length;
}

export function normalize(results: BenchResult[]): BenchResult[] {
    const map = new Map<string, number[]>();
    for (const r of results) {
        const arr = map.get(r.name);
        if (arr) arr.push(r.time);
        else map.set(r.name, [r.time]);
    }
    const out: BenchResult[] = [];
    for (const [name, times] of map) {
        out.push({ name, time: mean(times) });
    }
    return out;
}

export function parseEntry(dir: string): ParsedEntry {
    const p = dir.split("__");
    return { adapter: p[0], ver: p[1], os: p[2] };
}

export function fmt(ms: number): string {
    if (ms >= 1000) return (ms / 1000).toFixed(2) + "s";
    if (ms >= 1) return ms.toFixed(1) + "ms";
    return (ms * 1000).toFixed(2) + "μs";
}

export function formatRuntime(ver: string): string {
    return ver === "bun" ? "bun" : `node ${ver}`;
}
