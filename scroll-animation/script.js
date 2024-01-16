const boxes = document.querySelectorAll('.box'); //NodeList Boxes

window.addEventListener('scroll', checkBoxes); //checkBoxes Funktion wird aufgerufen, wenn der user scrollt

checkBoxes(); //Am Anfang wird ein Mal aufgerufen

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; //Schwelle entspricht 4/5 der Fensterhöhe
    //Wenn der oberste Rand einer "box" diese Schwelle beim Scrollen unterschreitet, wird die Klasse "show" hinzugefügt.
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        /* der oben berechnete Abstand (boxTop) kleiner ist als die zuvor festgelegte Schwelle (triggerBottom),
        dann wird die Klasse "show" zur "box" hinzugefügt. Dann kann man die Box sehen.
        */
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else { //sonst wird "show" Klasse entfernt
            box.classList.remove('show');
        }
    })
}

