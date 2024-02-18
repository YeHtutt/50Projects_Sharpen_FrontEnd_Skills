/**
 * Alle Zähler-Elemente auf der Seite.
 * @type {NodeList<HTMLElement>}
 */
const counters = document.querySelectorAll('.counter');

/**
 * Setzt den Anfangswert jedes Zählers auf 0 und startet die Aktualisierung.
 */
counters.forEach(counter => {
    counter.innerText = '0';

    /**
     * Aktualisiert einen Zähler mit einer Animation, um das Ziel zu erreichen.
     * @param {HTMLElement} counter - Das Zähler-Element, das aktualisiert werden soll.
     */
    const updateCounter = () => {
        /**
        * Das Ziel, das der Zähler erreichen soll.
        * @type {number}
        */
        const target = +counter.getAttribute('data-target');

        /**
        * Der aktuelle Wert des Zählers.
        * @type {number}
        */
        const c = +counter.innerText;

        /**
        * Die Schrittweite, um den Zählerwert bei jeder Aktualisierung zu erhöhen.
        * @type {number}
        */
        const increment = target / 200;

        if (c < target) {
            /**
            * Der neue Wert des Zählers nach der Aktualisierung.
            * @type {number}
            */
            counter.innerText = `${Math.round(c + increment)}`;
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }

    updateCounter(counter);
})

