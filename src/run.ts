import { performance } from "perf_hooks";

export interface BenchResult {
    name: string;
    time: number;
}

export async function bench(name: string, fn: () => Promise<any>, ops: number = 1): Promise<BenchResult> {
    console.log(`  ${name}...`);
    const start = performance.now();
    await fn();
    const end = performance.now();
    const time = (end - start) / ops;
    console.log(`    ${time < 1 ? (time * 1000).toFixed(2) + 'μs' : time < 1000 ? time.toFixed(2) + 'ms' : (time / 1000).toFixed(2) + 's'}`);
    return { name, time };
}
