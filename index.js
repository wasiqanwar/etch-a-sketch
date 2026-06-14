const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#new-size");

const createNewGrid = (size) => {
	grid.replaceChildren();

	for (let a = 0; a < size; a++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let b = 0; b < size; b++) {
			const column = document.createElement("div");
			column.classList.add("column");
			row.appendChild(column);
		}
		grid.appendChild(row);
	}
};

grid.addEventListener(
	"mouseenter",
	(e) => {
		if (e.target.closest(".column")) {
			const r = Math.random() * 256;
			const g = Math.random() * 256;
			const b = Math.random() * 256;
			e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
		}
	},
	{ capture: true },
);

sizeBtn.addEventListener("click", (e) => {
	const size = Number(prompt("Enter the size for new sketch board in pixels"));
	if (size > 100 || size < 1) {
		alert("The size should be from 1 to 100px");
		return;
	}

	createNewGrid(size);
});

createNewGrid(16);
