const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const pokemonSprites = document.getElementById('sprite-img');
const pokemonHp = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack');
const pokemonDefense = document.getElementById('defense');
const pokemonSpAttack = document.getElementById('special-attack');
const pokemonSpDefense = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');

const pokemonSearch = () => {
  const pokeValue = searchInput.value.toLowerCase();
  if (pokeValue === 'red') {
    alert('Pokémon not found');
    return;
  }
  const pokeurl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeValue}`;
  fetch(pokeurl)
    .then((response) => response.json())
    .then((data) => {
      pokemonName.textContent = data.name.toUpperCase();
      pokemonId.textContent = `#${data.id}`;
      pokemonWeight.textContent = `Weight: ${data.weight}`;
      pokemonHeight.textContent = `Height: ${data.height}`;
      pokemonHp.textContent = data.stats[0].base_stat;
      pokemonAttack.textContent = data.stats[1].base_stat;
      pokemonDefense.textContent = data.stats[2].base_stat;
      pokemonSpAttack.textContent = data.stats[3].base_stat;
      pokemonSpDefense.textContent = data.stats[4].base_stat;
      pokemonSpeed.textContent = data.stats[5].base_stat;
      pokemonTypes.innerHTML = '';
      data.types.forEach((type) => {
        pokemonTypes.innerHTML += `<span>${type.type.name.toUpperCase()}</span>`;
      });
      const sprite = document.createElement('img');
      sprite.src = data.sprites.front_default;
      sprite.id = 'sprite';
      pokemonSprites.innerHTML = '';
      pokemonSprites.appendChild(sprite);
    })
    .catch(() => {
      console.error('Failed to fetch Pokémon data');
    });
};

const resetPokemonData = () => {
  pokemonSprites.innerHTML = '';
  pokemonName.textContent = '';
  pokemonId.textContent = '';
  pokemonWeight.textContent = '';
  pokemonHeight.textContent = '';
  pokemonHp.textContent = '';
  pokemonAttack.textContent = '';
  pokemonDefense.textContent = '';
  pokemonSpAttack.textContent = '';
  pokemonSpDefense.textContent = '';
  pokemonSpeed.textContent = '';
  pokemonTypes.textContent = '';
};

searchButton.addEventListener('click', pokemonSearch);

