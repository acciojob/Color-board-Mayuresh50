//your JS code here. If required.
const container = document.querySelector(".container");
const BOXES = 800;

for (let i = 0; i < BOXES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(square) {
    const color = randomColor();
    square.style.background = color;
}

function removeColor(square) {
    square.style.background = "#1d1d1d";
}

function randomColor() {
    const colors = ["#e74c3c", "#3498db", "#9b59b6", "#1abc9c", "#f39c12", "#2ecc71"];
    return colors[Math.floor(Math.random() * colors.length)];
}
