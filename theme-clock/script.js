const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e)=> {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    }else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})

function setTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    /**hour minute second - converting to circle degree for clock */
    let hourInDeg = (hour / 12) * 360;
    let minuteInDeg = (minute / 60) * 360;
    let secondInDeg = ( second / 60 )*360;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourInDeg}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteInDeg}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondInDeg}deg)`;
    

    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

    timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}`: minute} ${ampm}`;
}

setInterval(setTime, 1000);