const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0; // load Variable startet bei 0

let int = setInterval(blurring, 30); //blurring Funktion wird jede 30ms wiederholt ausgeführt

function blurring() {
    load++; //load Variable wird erhöht

    if (load > 99) { //Zählt bis 100 mal
        clearInterval(int); //wiederholt ausgeführte Funktion blurring() wird abgebrochen
    }

    loadText.innerText = `${load}%`; //der Zähler Text wird angezeigt
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //Zähler Text wird am Anfang sichtbar und bei 100% unsichtbar
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;  //das Bild ist am Anfang verschwommen und bei 100% sichtbar
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}