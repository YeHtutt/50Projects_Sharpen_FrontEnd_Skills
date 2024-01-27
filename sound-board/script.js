// Array mit den Namen der Sounddateien
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//Sound-board Javascript mit ForEach Schleife
sounds.forEach(sound => { // Schleife durch alle Sounddateien
    // Erstellen eines Buttons für jeden Sound
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    // Hinzufügen des Buttons zum HTML-Element mit der ID 'buttons'
    document.getElementById('buttons').appendChild(btn);

    // Hinzufügen eines Event Listeners für den Klick auf den Button
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })
})

// Funktion zum Stoppen aller Songs
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        // Pausieren des Songs und Zurücksetzen der Wiedergabezeit auf 0
        song.pause();
        song.currentTime = 0;
    })
}





/* //Alternative Sound-board Javascript mit For-Schleife 
// Schleife durch alle Sounddateien
for (let i = 0; i < sounds.length; i++) {
    const sound = sounds[i];

    // Erstellen eines Buttons für jeden Sound
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    // Hinzufügen eines Event Listeners für den Klick auf den Button
    btn.addEventListener('click', () => {
        // Stoppen aller laufenden Songs und Abspielen des ausgewählten Sounds
        stopSongs();
        document.getElementById(sound).play();
    })

    // Hinzufügen des Buttons zum HTML-Element mit der ID 'buttons'
    document.getElementById('buttons').appendChild(btn);
}

// Funktion zum Stoppen aller Songs
function stopSongs() {
    for (let i = 0; i < sounds.length; i++) {
        const sound = sounds[i];
        const song = document.getElementById(sound);
        // Überspringen, wenn der Song bereits pausiert ist
        if (song.paused) {
            continue;
        }
        // Pausieren des Songs und Zurücksetzen der Wiedergabezeit auf 0
        song.pause();
        song.currentTime = 0;
    }
} */