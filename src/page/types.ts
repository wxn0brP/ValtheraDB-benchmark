export interface BenchResult {
    name: string;
    time: number;
}

export interface ResultFile {
    os?: string;
    arch?: string;
    node?: string;
    bun?: string;
    adapter?: string;
    results: BenchResult[];
}

export interface ParsedEntry {
    adapter: string;
    ver: string;
    os: string;
}

export interface Entry {
    dir: string;
    info: ParsedEntry;
    data: ResultFile;
}

export interface CacheData {
    timestamp: number;
    adapterConfig: Record<string, string>;
    entries: Entry[];
}
