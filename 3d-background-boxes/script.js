const boxes = document.getElementById("boxes");
const magic3D = document.getElementById("btn");

magic3D.addEventListener("click", () => {
  boxes.classList.toggle("big");
});

function createImageBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const boxElement = document.createElement("div");
      boxElement.classList.add("box");

      boxElement.style.backgroundPosition = `${-125 * j}px  ${-125 * i}px`;
      boxes.appendChild(boxElement);
    }
  }
}

createImageBoxes();
