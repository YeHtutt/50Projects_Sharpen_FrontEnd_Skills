const labels = document.querySelectorAll('.form-control label');

/**
 * Diese Funktion formatiert den HTML-Inhalt von Label-Elementen, indem sie jeden Buchstaben in ein span-Element einbettet.
 * @param {NodeList} labels - Eine NodeList von Label-Elementen.
 */
labels.forEach(label => {
    // Zeige den ursprünglichen Inhalt der Label-Elemente in der Konsole an
    // console.log('label Elements normal: ', label.innerText);

    // Trenne jeden Buchstaben und füge ihn in ein span-Element ein
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');

    // Zeige den modifizierten Inhalt der Label-Elemente in der Konsole an
    // console.log('seperated one by one and joined: ', label.innerHTML);
})

// Alternativ: Verwende eine for-Schleife für dieselbe Funktionalität
// for (let i = 0; i < labels.length; i++) {
//     // Zeige den ursprünglichen Inhalt der Label-Elemente in der Konsole an
//     console.log('label Elements normal: ', labels[i].innerHTML);
//     // Trenne jeden Buchstaben und füge ihn in ein span-Element ein
//     const label = labels[i];
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span>${letter}</span>`)
//         .join('');
//     // Zeige den modifizierten Inhalt der Label-Elemente in der Konsole an
//     console.log('seperated one by one and joined: ', label.innerHTML);
// }