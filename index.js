const grid = document.querySelector("#grid");

for (let a = 0; a < 16; a++) {
	const row = document.createElement("div");
	row.classList.add("row");
	for (let b = 0; b < 16; b++) {
		const column = document.createElement("div");
		column.classList.add("column");
		row.appendChild(column);
	}
	grid.appendChild(row);
}

grid.addEventListener(
	"mouseenter",
	(e) => {
		if (e.target.closest(".column")) {
			e.target.style.backgroundColor = "red";
		}
	},
	{ capture: true },
);
