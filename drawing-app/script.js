const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorEl = document.getElementById('color');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const clearEl = document.getElementById('clear');

let size = 10;
let color = 'black';
let x;
let y;
let isPressed = false;

/**implementing canvas position and mouse event for drawing*/
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

/**change the color of drawing to the input color value*/
colorEl.addEventListener('change', (e)=> {
    color = e.target.value;
})

/**increase size of 5 for the bigger line of drawing*/
increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
})

/**decrease size of 5 for the smaller line of drawing*/
decreaseBtn.addEventListener('click', ()=> {
    size -=5;

    if(size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
})

/**update the size on the page */
function updateSizeOnScreen() {
    sizeEl.innerHTML = size;
}

/**clear all lines, clear the entire canvas */
clearEl.addEventListener('click', ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})