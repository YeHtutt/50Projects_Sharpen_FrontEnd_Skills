/**
 * Represents the DOM element with the class 'left'.
 * @type {HTMLElement}
 */
const left = document.querySelector('.left');

/**
 * Represents the DOM element with the class 'right'.
 * @type {HTMLElement}
 */
const right = document.querySelector('.right');

/**
 * Represents the DOM element with the class 'container'.
 * @type {HTMLElement}
 */
const container = document.querySelector('.container');

/**
 * Event listener for mouseenter on the 'left' element.
 * Adds the class 'hover-left' to the 'container' element.
 */
left.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-left');
})

/**
 * Event listener for mouseleave on the 'left' element.
 * Removes the class 'hover-left' from the 'container' element.
 */
left.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-left');
})

/**
 * Event listener for mouseenter on the 'right' element.
 * Adds the class 'hover-right' to the 'container' element.
 */
right.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-right');
})

/**
 * Event listener for mouseleave on the 'right' element.
 * Removes the class 'hover-right' from the 'container' element.
 */
right.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-right');
})