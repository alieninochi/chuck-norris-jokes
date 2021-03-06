import { getRandomJoke } from "./random-jokes.js";
import { getJokeFromSearch } from "./text-search.js";
import { showCategories, getJokeFromCategory } from "./categories.js";
import { checkFavs, getSavedJokes } from "./fav-section.js";

const gettingJoke = document.querySelector("#get-joke");
const randomButton = document.querySelector("#random");
const categoryButton = document.querySelector("#category");
const searchButton = document.querySelector("#search");

randomButton.addEventListener("click", showCategories);
categoryButton.addEventListener("click", showCategories);
searchButton.addEventListener("click", showCategories);
gettingJoke.addEventListener("click", getJokes);
// gettingJoke.addEventListener("click", () => setTimeout(checkFavs, 1000));

getSavedJokes();

function getJokes() {
  switch (true) {
    case randomButton.checked:
      getRandomJoke();
      break;
    case categoryButton.checked:
      getJokeFromCategory();
      break;
    case searchButton.checked:
      getJokeFromSearch();
      break;
  }
}
