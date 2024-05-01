let nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNavbar);

function fixNavbar() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    }else {
        nav.classList.remove('active');
    }
}
