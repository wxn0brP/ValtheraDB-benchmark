import { ValtheraClass } from "@wxn0brp/db-core"
import { createAdapter } from "@wxn0brp/db-resolver";

process.env.VALTHERA_MASTER_OPTS =
    (process.env.VALTHERA_MASTER_OPTS || "[]")
        .replace("$$", Date.now().toString());

const dbAction = await createAdapter({ name: "master" });
export const db = new ValtheraClass({ dbAction });
