const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//Fetchen von API mit asynchron await
async function generateJoke() {
    const config = { //get Methode header Konfiguration
        headers: { 
            Accept: 'application/json', //JSON-response
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}


// Alternativ Fetchen von API mit .then ohne asynchrone Funktion
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }


//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         })

// }