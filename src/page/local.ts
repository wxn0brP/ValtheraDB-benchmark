import { renderCompare } from "./compare";
import { renderSummary } from "./summary";
import { renderTables } from "./tables";
import { Entry, ResultFile } from "./types";
import { normalize, parseEntry } from "./utils";
import { state } from "./var";

const LOCAL_KEY = "benchmark-local";

interface LocalStorageData {
	entries: Entry[];
	adapterNames: Record<string, string>;
}

function getLocalData(): LocalStorageData {
	try {
		const raw = localStorage.getItem(LOCAL_KEY);
		if (!raw)
			return {
				entries: [],
				adapterNames: {},
			};
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed)) {
			return {
				entries: parsed,
				adapterNames: {},
			};
		}
		return {
			entries: parsed.entries || [],
			adapterNames: parsed.adapterNames || {},
		};
	} catch {
		return {
			entries: [],
			adapterNames: {},
		};
	}
}

function saveLocalData(data: LocalStorageData) {
	localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

export function getLocalResults(): Entry[] {
	return getLocalData().entries;
}

export function saveLocalResults(entries: Entry[]) {
	const data = getLocalData();
	data.entries = entries;
	saveLocalData(data);
}

function saveLocalAdapterName(adapterId: string, name: string) {
	const data = getLocalData();
	data.adapterNames[adapterId] = name;
	saveLocalData(data);
}

function buildDirFromResult(data: ResultFile): string {
	const adapter = data.adapter || "local";
	const runtime = data.bun ? "bun" : data.node ? data.node : "local";
	const os = data.os || "local";
	return `${adapter}-local__${runtime}__${os}`;
}

export async function addLocalResult(file: File): Promise<boolean> {
	try {
		const text = await file.text();
		const data: ResultFile = JSON.parse(text);

		if (!data.results || !Array.isArray(data.results)) {
			alert("Invalid result file format: missing results array");
			return false;
		}

		data.results = normalize(data.results);
		const dir = buildDirFromResult(data);
		const info = parseEntry(dir);

		const baseAdapter = data.adapter || "local";
		const localAdapterName = `${state.adapterConfig[baseAdapter] || baseAdapter} (Local)`;
		state.adapterConfig[info.adapter] = localAdapterName;
		saveLocalAdapterName(info.adapter, localAdapterName);

		const entry: Entry = {
			dir,
			info,
			data,
		};

		const locals = getLocalResults();
		const existing = locals.findIndex(e => e.dir === dir);
		if (existing >= 0) {
			locals[existing] = entry;
		} else {
			locals.push(entry);
		}

		saveLocalResults(locals);
		state.entries.push(entry);

		renderSummary();
		renderCompare();
		renderTables();

		return true;
	} catch (e) {
		console.error("Failed to load local result", e);
		alert(`Failed to load file: ${e.message}`);
		return false;
	}
}

export function removeLocalResult(dir: string) {
	const locals = getLocalResults();
	const filtered = locals.filter(e => e.dir !== dir);
	saveLocalResults(filtered);

	state.entries = state.entries.filter(e => e.dir !== dir);

	renderSummary();
	renderCompare();
	renderTables();
}

export function renderLocalResultsList() {
	const container = document.querySelector<HTMLDivElement>(
		"#local-results-list",
	);
	if (!container) return;

	const locals = getLocalResults();
	if (!locals.length) {
		container.innerHTML =
			"<p style='color: var(--pico-muted-color); font-size: 0.9rem;'>No local results loaded</p>";
		return;
	}

	let html = "";
	for (const entry of locals) {
		const adapterName =
			state.adapterConfig[entry.info.adapter] || entry.info.adapter;
		const runtime = entry.info.ver === "bun" ? "bun" : `node ${entry.info.ver}`;
		html += `
			<div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; margin-bottom: 0.5rem; background: var(--pico-muted-border-color); border-radius: 4px;">
				<div>
					<strong>${adapterName}</strong>
					<span style="color: var(--pico-muted-color); margin-left: 0.5rem;">${runtime} / ${entry.info.os}</span>
				</div>
				<button class="outline contrast" style="padding: 0.15rem 0.5rem; font-size: 0.75rem;" data-dir="${entry.dir}">
					Remove
				</button>
			</div>
		`;
	}

	container.innerHTML = html;

	container.querySelectorAll("button[data-dir]").forEach(btn => {
		btn.addEventListener("click", () => {
			const dir = btn.getAttribute("data-dir");
			if (dir) {
				removeLocalResult(dir);
				renderLocalResultsList();
			}
		});
	});
}

export function loadLocalResultsIntoState() {
	const localData = getLocalData();

	for (const [adapterId, name] of Object.entries(localData.adapterNames)) {
		state.adapterConfig[adapterId] = name;
	}

	for (const local of localData.entries) {
		const existing = state.entries.findIndex(e => e.dir === local.dir);
		if (existing >= 0) {
			state.entries[existing] = local;
		} else {
			state.entries.push(local);
		}
	}
}
