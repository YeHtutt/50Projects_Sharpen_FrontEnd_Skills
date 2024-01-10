const progress = document.getElementById('progress');
const pre = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); /**Node List oder Array von allen .circle Elementen */

/**Start Wert für currenActive ist 1 - die Varible wird verwendet Node List von Klasse "circle" Elementen active oder kein active zu setzen */
let currentActive = 1;


next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    //console.log('currentActive',currentActive);
    update();
})


pre.addEventListener('click', ()=> {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    //console.log('currentActive',currentActive);
    update();
})


function update() {
    /** mit forEach() über jedes Element in der NodeList circles zu iterieren */
    circles.forEach((circle, idx) => {
        /**die Elemente mit einem Index kleiner als currentActive die Klasse 'active' haben, alle anderen werden die Klasse 'active' nicht haben  */
        if(idx < currentActive) {
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    }) 

    const active = document.querySelectorAll('.active');

    /**jeder Schritt 1/3te von 100% - 33.33%, 66.66% , 100%, weil nur drei Schritte bis Ende(100%) zu fortschreiten sind
     * um progress bar darzustellen 
    */
   // console.log((((active.length - 1 ) / (circles.length - 1))*100));
    progress.style.width = (((active.length - 1 ) / (circles.length - 1))*100) + '%';


    if(currentActive === circles.length) { 
        /** wenn am Ende erreicht hier currentActive=4 wird, dann next button wird deaktiviert und previous button wird aktiviert */
        next.disabled = true;
        pre.disabled = false;
    }else if(currentActive === 1) {
        /**ganz am Anfang ist previous button deaktiviert */
        pre.disabled = true;
    }else {
        /**in der Mitte sind weder previous button noch next button deaktiviert */
        pre.disabled = false;
        next.disabled = false;
    }
}