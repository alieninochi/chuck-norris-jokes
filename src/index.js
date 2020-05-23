import { getRandomJoke } from "./random-jokes.js";
import { getJokeFromSearch } from "./text-search.js";

const gettingJoke = document.querySelector("#get-joke");
const randomButton = document.querySelector("#random");
const categoryButton = document.querySelector("#category");
const searchButton = document.querySelector("#search");
const jokeSpace = document.querySelector(".joke");
// searchButton.addEventListener('click', getJokes);

gettingJoke.addEventListener("click", getJokes);

function getJokes() {
  if (randomButton.checked) {
    getRandomJoke();
  } else if (searchButton.checked) {
    getJokeFromSearch();
  }
}

export { searchButton };
