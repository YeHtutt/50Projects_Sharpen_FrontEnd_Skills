let imageContainer = document.getElementById("imgs");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

let img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(() => {
  run();
}, 2000);

function run() {
  idx++;
  changeImg();
}

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imageContainer.style.transform = `translateX(-${idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval); //man muss die intervalle zurücksetzen, um mehrere Intervalüberlappungen und Programmabsturz zu verhindern
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImg();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImg();
  resetInterval();
});
