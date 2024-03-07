// DOM-Elemente
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0; // Der Index des aktiven Slides

// Hintergrund des Body-Elements auf das Hintergrundbild des ersten Slides setzen
setBgToBody();

// Event Listener für den Klick auf die rechte Schaltfläche
rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
})

// Event Listener für den Klick auf die linke Schaltfläche
leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0 ) {
        activeSlide = slides.length - 1 ;
    }
    setBgToBody();
    setActiveSlide();
})

/**
 * Setzt den Hintergrund des Body-Elements auf das Hintergrundbild des aktiven Slides.
 */
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

/**
 * Setzt den aktiven Slide und aktualisiert das Hintergrundbild des Body-Elements.
 */
function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[activeSlide].classList.add('active');
}