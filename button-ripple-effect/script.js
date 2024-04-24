const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        /**the whole page x, y position */
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        /** x, y position of the button*/
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        /**create a span Element by cliking the button for the ripple effect from the clicked position*/
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        button.appendChild(circle);

        /**remove the span element or ripple effect*/
        setTimeout(() => circle.remove(), 300);
    })
})