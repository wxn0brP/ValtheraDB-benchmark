import { Collection } from "@wxn0brp/db-core/helpers/collection";
import { generateUsers } from "./generate";
import { bench, type BenchResult } from "./run";

const COUNT = 10_000;

export async function benchmarkSmall(col: Collection): Promise<BenchResult[]> {
    const results: BenchResult[] = [];
    const userData = generateUsers(COUNT);
    const ids: string[] = [];

    results.push(await bench("add-small", async () => {
        for (const u of userData) {
            const doc = await col.add(u);
            ids.push(doc._id);
        }
    }, COUNT));

    const firstId = ids[0];
    const midId = ids[Math.floor(ids.length / 2)];
    const lastId = ids[ids.length - 1];

    results.push(await bench("findOne-small", () => col.findOne({ _id: firstId })));
    results.push(await bench("find-search-small", () => col.find({ isActive: true })));
    results.push(await bench("find-paginated-small", () => col.find({}, { limit: 100 })));
    results.push(await bench("updateOne-small", () => col.updateOne({ _id: midId }, { age: 99 })));
    results.push(await bench("update-search-small", () => col.update({ isActive: false }, { isActive: true })));
    results.push(await bench("removeOne-small", () => col.removeOne({ _id: lastId })));
    results.push(await bench("remove-search-small", () => col.remove({ $lt: { age: 25 } })));

    return results;
}
