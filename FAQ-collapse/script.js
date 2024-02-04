
const toggleBtns = document.querySelectorAll('.faq-toggle');

/**
 * Funktion zum Hinzufügen eines Event-Listeners für Klicks auf FAQ-Toggle-Buttons.
 *
 * @param {NodeListOf<Element>} toggleButtons - Eine NodeList von FAQ-Toggle-Buttons.
 */
toggleBtns.forEach(button => {
    /**
        * Event-Listener für Klicks auf FAQ-Toggle-Buttons.
        *
        * @param {Event} event - Das Klick-Ereignis.
        */
    button.addEventListener('click', () => {
        // Aktiviert/deaktiviert die 'active'-Klasse des Elternknotens.
        button.parentNode.classList.toggle('active');
    })
})