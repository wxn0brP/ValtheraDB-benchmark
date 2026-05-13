import { generatePosts } from "./generate";
import { bench, type BenchResult } from "./run";

const COUNT = 200_000;

export async function benchmarkLarge(col: any): Promise<BenchResult[]> {
    const results: BenchResult[] = [];
    const postData = generatePosts(COUNT);
    const ids: string[] = [];

    results.push(await bench("add-large", async () => {
        for (const p of postData) {
            const doc = await col.add(p);
            ids.push(doc._id!);
        }
    }));

    const firstId = ids[0];
    const midId = ids[Math.floor(ids.length / 2)];
    const lastId = ids[ids.length - 1];

    results.push(await bench("findOne-large", () => col.findOne({ _id: firstId })));
    results.push(await bench("find-search-large", () => col.find({ $gt: { views: 9990 } })));
    results.push(await bench("find-paginated-large", () => col.find({}, { limit: 100 })));
    results.push(await bench("updateOne-large", () => col.updateOne({ _id: midId }, { views: 999999 })));
    results.push(await bench("update-search-large", () => col.update({ $lt: { views: 10 } }, { views: 999999 })));
    results.push(await bench("removeOne-large", () => col.removeOne({ _id: lastId })));
    results.push(await bench("remove-search-large", () => col.remove({ $gt: { views: 9995 } })));

    return results;
}
