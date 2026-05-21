import { adapterName, shortOp, formatRuntime, fmt } from "./utils";
import { state, OP_ORDER_SMALL, OP_ORDER_LARGE } from "./var";

export function renderTables(selectedAdapter: string = null) {
    const container = document.querySelector("#tables-container");
    const select = document.querySelector<HTMLSelectElement>("#tables-adapter-select");

    const adapters = [...new Set(state.entries.map(e => e.info.adapter))].sort();

    if (select.options.length === 0) {
        select.innerHTML = adapters.map(a => `<option value="${a}">${adapterName(a)}</option>`).join("");
        select.innerHTML += `<option value="ALL">Show All</option>`;

        select.addEventListener("change", () => {
            renderTables(select.value);
        });

        if (!selectedAdapter && adapters.length > 0) {
            selectedAdapter = adapters.find(a => a === "dir") || adapters[0];
            select.value = selectedAdapter;
        }
    }

    let html = "";

    const adaptersToRender = selectedAdapter === "ALL" ? adapters : (selectedAdapter ? [selectedAdapter] : adapters);

    for (const adapter of adaptersToRender) {
        const group = state.entries.filter(e => e.info.adapter === adapter);
        const verOrder = ["bun", "24", "22", "20"];
        group.sort((a, b) => {
            const ai = verOrder.indexOf(a.info.ver);
            const bi = verOrder.indexOf(b.info.ver);
            if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
            return a.info.os.localeCompare(b.info.os);
        });

        html += `<h3>${adapterName(adapter)} Adapter</h3>`;

        const sections: [string, string[]][] = [
            ["Small Collection (users, 10k)", OP_ORDER_SMALL],
            ["Large Collection (posts, 200k)", OP_ORDER_LARGE],
        ];

        for (const [label, ops] of sections) {
            const present = ops.filter(op => group.some(e => e.data.results.some(r => r.name === op)));
            if (!present.length) continue;

            html += `<h4>${label}</h4>`;
            html += `<figure><table class="striped">`;
            html += `<thead><tr><th scope="col">Runtime / OS</th>`;

            for (const op of present)
                html += `<th scope="col">${shortOp(op)}</th>`;
            html += `</tr></thead><tbody>`;

            for (const e of group) {
                html += `<tr><td>${formatRuntime(e.info.ver)} / ${e.info.os}</td>`;
                for (const op of present) {
                    const r = e.data.results.find(x => x.name === op);
                    html += `<td>${r ? fmt(r.time) : "-"}</td>`;
                }
                html += `</tr>`;
            }

            html += `</tbody></table></figure>`;
        }
    }

    container.innerHTML = html;
}
