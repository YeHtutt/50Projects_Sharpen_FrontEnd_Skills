const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84dabd3f0f684fbe0742da2207f75c41&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=84dabd3f0f684fbe0742da2207f75c41&query="';

/**Das Haupt-Element, in dem die Filme angezeigt werden sollen. */
const main = document.getElementById('main');
/**Das Formular-Element für die Suche. */
const form = document.getElementById('form');
/**Das Eingabefeld für die Suche. */
const search = document.getElementById('search');


getMovies(API_URL);

/**
 * Holt Filme von der angegebenen URL und zeigt sie an.
 * @param {string} url - Die URL, von der die Filme abgerufen werden sollen.
 * @returns {Promise<void>}
 */
async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
}

/**
 * Zeigt eine Liste von Filmen an.
 * @param {Array<Object>} movies - Die Liste der Filme.
 * @returns {void}
 */
function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const title = movie.title;
        const poster_path = movie.poster_path;
        const vote_average = movie.vote_average;
        const overview = movie.overview;
    

        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        
        main.appendChild(movieEl);
    })
}

/**
 * Gibt die entsprechende CSS-Klasse für die Bewertung eines Films zurück.
 * @param {number} vote - Die Bewertung des Films.
 * @returns {string} - Die entsprechende CSS-Klasse.
 */
function getClassByRate(vote) {
    if(vote >= 7) {
        return 'green';
    }else if(vote >= 4) {
        return 'orange';
    }else {
        return 'red';
    }
}

// Event-Listener für das Formular, um die Suche nach Filmen zu ermöglichen
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }else {
        window.location.reload();
    }
})