const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

/**
 * hier wird ein Klick-Event für jede Tasse-Elemente erwartet und wird geklicktes Element an highlightCups-Funktion übergeben
 */
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx);
    });
})

/**
 * Eine Funktion, die die Tassen markiert, wenn eine davon angeklickt wird.
 * @param {number} idx - Der Index der angeklickten Tasse.
 */
function highlightCups(idx) {
    /** Wenn die angeklickte Tasse bereits gefüllt ist und 
     * die nächste Tasse leer ist, wird der Index dekrementiert,
     * um die Füllung zu entfernen. */
    if(idx === 7 && smallCups[idx].classList.contains('full')) {
        idx--;
    }
    else if(smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }

    smallCups.forEach((cup, idx2)=> {
        if(idx2 <= idx) { /** Nur die Tassen bis zum angeklickten Index füllen. */
            cup.classList.add('full');
        }else { /** Alle anderen Tassen leeren. */
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

/**
 * Eine Funktion, die die große Tasse aktualisiert.
 */
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const total = smallCups.length;

    /**Wenn keine Tassen gefüllt sind, wird große Tasse Prozent-Element versteck und höhe auf 0 zurückgesetzt */
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else { /**Wenn Tassen schon gefüllt sind, wird Prozent-Element für die große Tasse dem entsprechend berenet und angezeigt */
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / total)*330}px`;
        percentage.innerHTML = `${(fullCups / total)*100}%`;
    }

    /**Wenn alle kleine Tassen gefüllt sind, wird remain-Element nicht mehr angezeigt */
    if(fullCups === total) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else { /**Wenn nicht alle kleine Tassen gefüllt sind, wird remain-Element für die große Tasse dem entsprechend berenet und angezeigt */
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}