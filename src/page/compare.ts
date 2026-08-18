import { adapterName, fmt } from "./utils";
import { Entry } from "./types";
import { state } from "./var";

function getPlatformsForAdapter(adapter: string): string[] {
	return [
		...new Set(
			state.entries
				.filter(e => e.info.adapter === adapter)
				.map(e => `${e.info.ver}__${e.info.os}`),
		),
	].sort((a, b) => {
		const [verA, osA] = a.split("__");
		const [verB, osB] = b.split("__");
		if (verA === "bun" && verB !== "bun") return -1;
		if (verB === "bun" && verA !== "bun") return 1;
		if (verA !== verB) return verB.localeCompare(verA);
		return osA.localeCompare(osB);
	});
}

function formatPlatform(platform: string): string {
	const [ver, os] = platform.split("__");
	return ver === "bun" ? `bun / ${os}` : `node ${ver} / ${os}`;
}

function getSelectedPlatforms(select: HTMLSelectElement): string[] {
	return Array.from(select.selectedOptions).map(o => o.value);
}

export function renderCompare() {
	const adapters = [
		...new Set(state.entries.map(e => e.info.adapter)),
	].sort();
	const baseSel = document.querySelector<HTMLSelectElement>("#compare-base");
	const targetSel =
		document.querySelector<HTMLSelectElement>("#compare-target");
	const basePlatformsSel = document.querySelector<HTMLSelectElement>(
		"#compare-base-platforms",
	);
	const targetPlatformsSel = document.querySelector<HTMLSelectElement>(
		"#compare-target-platforms",
	);

	const opts = adapters
		.map(a => `<option value="${a}">${adapterName(a)}</option>`)
		.join("");
	baseSel.innerHTML = opts;
	targetSel.innerHTML = opts;

	if (adapters.length > 1) targetSel.selectedIndex = 1;

	function updatePlatformSelects() {
		const basePlatforms = getPlatformsForAdapter(baseSel.value);
		const targetPlatforms = getPlatformsForAdapter(targetSel.value);

		basePlatformsSel.innerHTML = basePlatforms
			.map(p => `<option value="${p}">${formatPlatform(p)}</option>`)
			.join("");
		targetPlatformsSel.innerHTML = targetPlatforms
			.map(p => `<option value="${p}">${formatPlatform(p)}</option>`)
			.join("");
	}

	const updateCmp = () => {
		updatePlatformSelects();
		doCompare(
			baseSel.value,
			targetSel.value,
			getSelectedPlatforms(basePlatformsSel),
			getSelectedPlatforms(targetPlatformsSel),
		);
	};

	baseSel.addEventListener("change", updateCmp);
	targetSel.addEventListener("change", updateCmp);
	basePlatformsSel.addEventListener("change", () => {
		doCompare(
			baseSel.value,
			targetSel.value,
			getSelectedPlatforms(basePlatformsSel),
			getSelectedPlatforms(targetPlatformsSel),
		);
	});
	targetPlatformsSel.addEventListener("change", () => {
		doCompare(
			baseSel.value,
			targetSel.value,
			getSelectedPlatforms(basePlatformsSel),
			getSelectedPlatforms(targetPlatformsSel),
		);
	});

	updateCmp();
}

function filterEntriesByPlatforms(
	entries: Entry[],
	adapter: string,
	platforms: string[],
): Entry[] {
	if (!platforms.length) {
		return entries.filter(e => e.info.adapter === adapter);
	}
	return entries.filter(e => {
		if (e.info.adapter !== adapter) return false;
		const key = `${e.info.ver}__${e.info.os}`;
		return platforms.includes(key);
	});
}

export function doCompare(
	baseA: string,
	targetA: string,
	basePlatforms: string[] = [],
	targetPlatforms: string[] = [],
) {
	const container = document.querySelector("#compare-results");
	container.innerHTML = "";
	const { entries } = state;

	const allOps = [
		...new Set(entries.flatMap(e => e.data.results.map(r => r.name))),
	].sort();

	const baseEntries = filterEntriesByPlatforms(entries, baseA, basePlatforms);
	const targetEntries = filterEntriesByPlatforms(
		entries,
		targetA,
		targetPlatforms,
	);

	if (!baseEntries.length || !targetEntries.length) {
		container.innerHTML = "<p>No data available for comparison.</p>";
		return;
	}

	for (const op of allOps) {
		const baseTimes = baseEntries
			.map(e => e.data.results.find(r => r.name === op)?.time)
			.filter((t): t is number => t !== undefined);
		const targetTimes = targetEntries
			.map(e => e.data.results.find(r => r.name === op)?.time)
			.filter((t): t is number => t !== undefined);

		if (!baseTimes.length || !targetTimes.length) continue;

		const bAvg = baseTimes.reduce((a, b) => a + b, 0) / baseTimes.length;
		const tAvg = targetTimes.reduce((a, b) => a + b, 0) / targetTimes.length;

		const ratio = bAvg / tAvg;
		let statClass = "stat-equal";
		let text = "Equal";

		const isTiny = Math.min(bAvg, tAvg) < 1;
		const fastRatio = isTiny ? 1.15 : 1.05;
		const slowRatio = isTiny ? 0.85 : 0.95;

		if (ratio > fastRatio) {
			statClass = "stat-faster";
			text = `${ratio.toFixed(2)}x Faster`;
		} else if (ratio < slowRatio) {
			statClass = "stat-slower";
			text = `${(1 / ratio).toFixed(2)}x Slower`;
		}

		let titleText = "Adapters are equal performance-wise";
		if (statClass !== "stat-equal") {
			const betterAdapter = bAvg < tAvg ? baseA : targetA;
			titleText = `${adapterName(betterAdapter)} is faster`;
		}

		const baseLabel = basePlatforms.length
			? basePlatforms.map(formatPlatform).join(", ")
			: "all";
		const targetLabel = targetPlatforms.length
			? targetPlatforms.map(formatPlatform).join(", ")
			: "all";

		container.innerHTML += `
			<article style="padding: 1rem; margin-bottom: 0;" title="${titleText}">
				<div style="font-family: monospace; font-size: 0.9rem; margin-bottom: 0.5rem;">${op}</div>
				<div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom: 0.5rem;">
					<span class="time">${fmt(bAvg)}</span>
					<span class="time">${fmt(tAvg)}</span>
				</div>
				<div class="${statClass}" style="font-size: 1.25rem;">${text}</div>
				<div style="font-size: 0.7rem; color: var(--pico-muted-color); margin-top: 0.25rem;">base: ${baseLabel} | target: ${targetLabel}</div>
			</article>
		`;
	}
}
