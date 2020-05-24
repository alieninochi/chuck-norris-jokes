let favJokes = [];
const favSection = document.querySelector(".favourite");

function addJokeToFavourite(evt) {
  const parent = evt.target.parentNode.parentNode;

  if (evt.target.className !== "heart") {
    if (favJokes.includes(parent.innerText)) {
      return 0;
    } else {
      favJokes.unshift(parent);
      showFavJoke(parent);
    }
  } else {
    deleteJoke(parent);
  }
}

function showFavJoke(joke) {
  const favJoke = joke.cloneNode(true);
  favJoke.classList.add("joke-modified");
  favSection.prepend(favJoke);

  const dislike = favJoke.querySelector("img");
  dislike.classList.add("heart");

  dislike.addEventListener("click", () => {
    favJokes.forEach((element, index) => {
      if (element.innerText === favJoke.innerText) {
        favJokes.splice(index, 1);
      }
      favJoke.remove();
    });
    console.log(favJokes);
  });

  localStorage.setItem("joke", JSON.stringify(favJoke.outerHTML));
}

function deleteJoke(joke) {
  favJokes.forEach((element, index) => {
    if (element === joke) {
      favJokes.splice(index, 1);
      favSection.removeChild(favSection.childNodes[index]);
    }
  });
}

function getSavedJokes() {
  let savedFavJokes = localStorage.getItem("favJoke");
  if (savedFavJokes !== null) {
    savedFavJokes = JSON.parse(savedFavJokes);
    favSection.innerHTML += savedFavJokes;
  }
}

export { addJokeToFavourite, getSavedJokes };
