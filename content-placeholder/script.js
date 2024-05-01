const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = `<img src="img/placeholder-img.jpg" alt="">`;
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';
    profile_img.innerHTML = '<img  src="img/person.jpg" alt="">';
    nameEl.innerHTML = 'John Doe';
    date.innerHTML = 'May 01, 2024';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
