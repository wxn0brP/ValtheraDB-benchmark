import { CacheData } from "./types";
import { state } from "./var";

const CACHE_KEY = "benchmark-cache";
const CACHE_TTL = 10 * 60 * 1000;

export function loadFromCache() {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const data: CacheData = JSON.parse(raw);
        if (Date.now() - data.timestamp > CACHE_TTL) {
            localStorage.removeItem(CACHE_KEY);
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

export function saveToCache() {
    const payload: CacheData = {
        timestamp: Date.now(),
        ...state,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
}

export function clearCache() {
    localStorage.removeItem(CACHE_KEY);
    location.reload();
}
