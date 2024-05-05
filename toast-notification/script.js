const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = [
    'success',
    'info',
    'error',
    'warning'
]

button.addEventListener('click', () => {
    showNotification();
});

function showNotification(message, type) {
    const noti = document.createElement('div');
    noti.classList.add('toast');
    noti.classList.add(type ? type : randomTypes());

    noti.innerText = message ? message : randomMessage();

    toasts.appendChild(noti);

    setTimeout( () => {
        noti.remove();
    }, 3000);
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function randomTypes() {
    return types[Math.floor(Math.random() * types.length)];
}