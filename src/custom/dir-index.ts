export async function init(action: any) {
	await action.createIndex("users");
	await action.createIndex("posts");
}
