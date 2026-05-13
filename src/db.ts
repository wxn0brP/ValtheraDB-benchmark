import { ValtheraClass } from "@wxn0brp/db-core"
import { createAdapter } from "@wxn0brp/db-resolver";

const dbAction = await createAdapter({ name: "master" });
export const db = new ValtheraClass({ dbAction });
