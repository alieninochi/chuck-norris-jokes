import { createJokeSpace, jokeContainer } from "./joke-space.js";

const TEXT_SEARCH = "https://api.chucknorris.io/jokes/search?query=";
const textInput = document.querySelector("#search-form");

function getJokeFromSearch() {
  fetch(TEXT_SEARCH + textInput.value)
    .then((response) => response.json())
    .then((processedResponse) => {
      const result = processedResponse.result;
      const total = processedResponse.total;

      result.forEach((element) => createJokeSpace(element));

      while (jokeContainer.childElementCount > total) {
        jokeContainer.lastChild.remove();
      }
    });
}

export { getJokeFromSearch };
