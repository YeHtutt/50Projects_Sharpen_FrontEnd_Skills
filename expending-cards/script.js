const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        /*die Klasse "active" aus der Panel-Klasse entfernen, damit das Bild klein bleibt und die Überschrift versteckt ist*/
        removeActiveClasses();
        /*Beim Klickt wird die Klasse "active" zur Panel-Klasse -> um das Bild größer auf der Webseite anzuzeigen und die Überschrift aufzudecken*/
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    /*aus allen Panels die Klasse "active" entfernen */
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}