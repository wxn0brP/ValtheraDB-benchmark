import { performance } from "perf_hooks";

export interface BenchResult {
    name: string;
    time: number;
}

export async function bench(name: string, fn: () => Promise<void>): Promise<BenchResult> {
    console.log(`  ${name}...`);
    const start = performance.now();
    await fn();
    const end = performance.now();
    const time = end - start;
    console.log(`    ${(time / 1000).toFixed(2)}s`);
    return { name, time };
}
