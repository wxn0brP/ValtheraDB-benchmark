export async function init(action: any) {
	await action.createIndex("users");
}

export async function onAfterAdd(action: any) {
	await action.createIndex("posts");
}
