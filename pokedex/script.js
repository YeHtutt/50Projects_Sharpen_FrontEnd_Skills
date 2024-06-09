const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

/**
 * Object.keys(colours) creates an array of the keys of the colours object.
 * main_types = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal']. */
const main_types = Object.keys(colors);

async function fetchPokemons() {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  createPokemonCard(data);
}

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  //first Letter to uppercase
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // it pads the id number with zeros until it has 3 digits
  const id = pokemon.id.toString().padStart(3, "0");

  /** ... .map(type => type.type.name)
   * It iterates over each element in the pokemon.types array.
    For each element, it extracts the value of type.type.name.
    It creates a new array containing only the names of the types.
    new array poke_types would look like this. 
    poke_types = [‘Fire’, ‘Flying’];
   */
  const poke_types = pokemon.types.map((type) => type.type.name);
  /**
   * main_types.find(type => poke_types.indexOf(type) > -1) searches for the first element in main_types that is also contained in poke_types.
    poke_types.indexOf(type) > -1 checks whether the type type is contained in poke_types (as indexOf returns -1 if the element is not found).
    The result is the first type from main_types that is present in the poke_types array.
   */
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type]; // e.g. '#FDDFDF'

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
}

fetchPokemons();
