export async function init(action: any) {
    const stmt = await action._prepare(`
CREATE TABLE IF NOT EXISTS users (
    _id TEXT PRIMARY KEY,
    name TEXT,
    age INTEGER,
    email TEXT,
    isActive INTEGER,
    createdAt INTEGER
);
CREATE TABLE IF NOT EXISTS posts (
    _id TEXT PRIMARY KEY,
    title TEXT,
    author TEXT,
    views INTEGER,
    createdAt INTEGER
);
`);
    await stmt.run();
}
