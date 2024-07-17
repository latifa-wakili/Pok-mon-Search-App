document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (query) {
    fetchPokemon(query);
  }
});

const fetchPokemon = (query) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      return response.json();
    })
    .then((data) => {
      displayPokemon(data);
    })
    .catch((error) => {
      alert(error.message);
      clearPokemonInfo();
    });
};

const displayPokemon = (pokemon) => {
  document.getElementById('pokemon-name').textContent = pokemon.name.toUpperCase();
  document.getElementById('pokemon-id').textContent = `#${pokemon.id}`;
  document.getElementById('weight').textContent = `Weight: ${pokemon.weight}`;
  document.getElementById('height').textContent = `Height: ${pokemon.height}`;

  document.getElementById('hp').textContent = pokemon.stats[0].base_stat;
  document.getElementById('attack').textContent = pokemon.stats[1].base_stat;
  document.getElementById('defense').textContent = pokemon.stats[2].base_stat;
  document.getElementById('special-attack').textContent = pokemon.stats[3].base_stat;
  document.getElementById('special-defense').textContent = pokemon.stats[4].base_stat;
  document.getElementById('speed').textContent = pokemon.stats[5].base_stat;

  const image = document.createElement('img');
  image.id = 'sprite';
  image.src = pokemon.sprites.front_default;
  image.alt = pokemon.name;
  document.getElementById('pokemon-image').innerHTML = '';
  document.getElementById('pokemon-image').appendChild(image);

  const typesContainer = document.getElementById('types');
  typesContainer.innerHTML = ''; // Clear previous types
  pokemon.types.forEach((typeInfo) => {
    const typeElement = document.createElement('div');
    typeElement.textContent = typeInfo.type.name.toUpperCase();
    typesContainer.appendChild(typeElement);
  });

  document.getElementById('pokemon-info').style.display = 'block';
};

const clearPokemonInfo = () => {
  document.getElementById('pokemon-info').style.display = 'none';
  document.getElementById('pokemon-name').textContent = '';
  document.getElementById('pokemon-id').textContent = '';
  document.getElementById('pokemon-image').innerHTML = '';
  document.getElementById('weight').textContent = '';
  document.getElementById('height').textContent = '';
  document.getElementById('types').innerHTML = '';
  document.getElementById('hp').textContent = '';
  document.getElementById('attack').textContent = '';
  document.getElementById('defense').textContent = '';
  document.getElementById('special-attack').textContent = '';
  document.getElementById('special-defense').textContent = '';
  document.getElementById('speed').textContent = '';
};
