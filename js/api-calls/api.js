// Using API's for data
// Grab div in HTML
const pokeDiv = document.getElementById("pokeData");

// Function to grab Pokemon API data
async function grabPokemonApiData() {
  // Make API call to grab pokemon data
  // These are asynchronous, thus we must use await
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon-color/yellow"
  );

  return pokemonData;
}

let pokemonList = [];

grabPokemonApiData()
  .then((response) => response.json())
  .then((data) => {
    // Due to success, clear current empty pokemon text from front div
    pokeDiv.innerHTML = "";

    // Save species data into pokemon list
    pokemonList = data.pokemon_species;
    console.log("pokemonList: ", pokemonList);

    // Loop through pokemon list
    for (let index = 0; index < pokemonList.length; index++) {
      // Access item of list using index
      const element = pokemonList[index];

      //   Build card
      // Card element
      const newDiv = document.createElement("div");
      newDiv.style.height = "250px";
      newDiv.style.width = "150px";
      newDiv.style.backgroundColor = "grey";
      newDiv.style.margin = "5px 10px";

      // Build detail elements
      //   Add header
      const newHeader = document.createElement("h3");
      newHeader.innerText = element.name;
      //   Add link for more info
      const newPara = document.createElement("a");
      newPara.href = element.url;
      newPara.innerText = "More info";

      //   Insert details into card
      newDiv.appendChild(newHeader);
      newDiv.appendChild(newPara);

      //   Send to HTML
      pokeDiv.appendChild(newDiv);
    }
  });

//   Using Axios, you are able to to simply use it like below
// const response = axios.get("https://pokeapi.co/api/v2/pokemon-color/yellow");
