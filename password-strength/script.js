const password = document.getElementById('password');
const background = document.getElementById('background');
const form = document.querySelector('.register-form'); 

const inputFields = document.querySelectorAll('input');

password.addEventListener('input', (e) => {
    const password = e.target.value;
    const length = password.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
})

form.addEventListener('submit', (e) => {
    clearInputs();
})

function clearInputs() {
    inputFields.forEach((element) => {
        element.textContent = '';
    })
}