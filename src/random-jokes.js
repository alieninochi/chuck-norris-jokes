import { createJokeSpace, jokeContainer } from "./joke-space.js";

const RANDOM = "https://api.chucknorris.io/jokes/random";

function getRandomJoke() {
  fetch(RANDOM)
    .then((response) => response.json())
    .then((processedResponse) => {
      createJokeSpace(processedResponse);

      // Remove previous jokes
      while (jokeContainer.childElementCount > 1) {
        jokeContainer.lastChild.remove();
      }
    });
}

export { getRandomJoke };
