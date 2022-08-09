// const buscarPokemon = (id) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//     });

// };

const buscarPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();
  console.log(json);
};

buscarPokemon(25);
