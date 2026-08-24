export async function init(action: any) {
	const schemas = [
		`
CREATE TABLE IF NOT EXISTS users (
    _id TEXT PRIMARY KEY,
    name TEXT,
    age INTEGER,
    email TEXT,
    isActive INTEGER,
    createdAt INTEGER
)`,
		`
CREATE TABLE IF NOT EXISTS posts (
    _id TEXT PRIMARY KEY,
    title TEXT,
    author TEXT,
    views INTEGER,
    createdAt INTEGER
)`,
	];

	for (const sql of schemas) {
		const stmt = await action._prepare(sql);
		await stmt.run();
	}

	await action
		._prepare(
			"CREATE INDEX IF NOT EXISTS idx_users_isActive ON users(isActive)",
		)
		.then(s => s.run());
	await action
		._prepare("CREATE INDEX IF NOT EXISTS idx_users_age ON users(age)")
		.then(s => s.run());
}

export async function onAfterAdd(action: any) {
	await action
		._prepare("CREATE INDEX IF NOT EXISTS idx_posts_views ON posts(views)")
		.then(s => s.run());
}
