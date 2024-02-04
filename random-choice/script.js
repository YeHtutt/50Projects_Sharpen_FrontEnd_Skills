const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    /**mit Enter Zufälliger Auswahl der Tag Elementen zeigen und am Ende ein Element auswählen */
    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = ''
        }, 10)

        randomSelect();
    }
})

function createTags(input) {
    /**tags Array mit den Werten vom Textfeld erzeugen */
    const tags = input.split(',').filter(tag => tag.trim() !== '')
        .map(tag => tag.trim())
    // console.log(tags);

    //tagsElement Container leeren, um <span></span> Tags drinnen zu erzeugen
    tagsEl.innerHTML = '';

    /**tags Array durchschleifen und jedes mal mit einem Array-Wert 
     * ein HTML Tag (hier:<span></span>) erzeugen
     * jeden Tag eine Klasse .tag vergeben und innerText ein Array Wert vergeben
    */
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}


function randomSelect() {
    const times = 30;

    /**Ein Interval erstellen, dass jeden 100ms ein RandomTag eines zufälligen <span></span> Elementes highlightet oder nicht highlightet */
    const interval = setInterval(() => {
        /**random Tag vom <span></span> Element zurückgeben */
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            /**random Tag vom <span></span> Element highlighten */
            highlightRandomTag(randomTag);

            setTimeout(() => {
                /**random Tag vom <span></span> Element nicht highlighten */
                unhighlightRandomTag(randomTag);
            }, 100)
        }
    }, 100);

    /**nach 3000ms das Interval der random Auswahl löschen, und nach 100ms später ein Tag nur gehighlighted, um ein zufälligen Ausgabe der Wahl anzuzeigen */
    setTimeout(() => {
        clearInterval(interval);

        const randomTag = pickRandomTag();
        setTimeout(() => {
            highlightRandomTag(randomTag);
        }, 100)

    }, times * 100)
}

/**wählt ein zufälliges Tag-Element aus der Liste aller Elemente mit der Klasse 'tag' aus und gibt es zurück */
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    /**gibt ein zufälligen Index im Bereich von 0 bis tags.length - 1 zurück*/
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightRandomTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightRandomTag(tag) {
    tag.classList.remove('highlight');
}