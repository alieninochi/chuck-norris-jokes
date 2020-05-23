const jokeContainer = document.querySelector(".joke-container");
let jokeSpace;

function createJokeSpace(res) {
  jokeSpace = document.createElement("div");
  jokeSpace.classList.add("joke");
  jokeContainer.prepend(jokeSpace);

  getJokeId(res.url, res.id);
  getJokeText(res.value);
  getLastUpdate(res["updated_at"]);

  if (res.categories.length !== 0) {
    getJokeCategory(res.categories);
  } else if (document.querySelector(".joke-category") !== null) {
    document.querySelector(".joke-category").remove();
  }
}

function getJokeId(url, id) {
  let jokeId = document.createElement("p");
  jokeId.innerHTML = "ID: ";
  jokeId.classList.add("joke-id");

  jokeSpace.appendChild(jokeId);

  let idUrl = document.createElement("a");
  idUrl.href = url;
  idUrl.innerHTML = id;
  idUrl.classList.add("id-url");

  jokeId.appendChild(idUrl);
}

function getJokeText(text) {
  let jokeText = document.createElement("p");
  jokeText.innerHTML = text;
  jokeText.classList.add("joke-text");

  jokeSpace.appendChild(jokeText);
}

function getLastUpdate(time) {
  let newTime = new Date();
  newTime.setTime(Date.parse(time));
  newTime = Math.round((+new Date() - newTime) / 3.6e6);

  let jokeUpdate = document.createElement("p");
  jokeUpdate.innerHTML = `Last update: ${newTime} hours ago`;
  jokeUpdate.classList.add("joke-last-update");

  jokeSpace.appendChild(jokeUpdate);
}

function getJokeCategory(category) {
  let jokeCategory = document.createElement("div");
  jokeCategory.innerHTML = category[0];
  jokeCategory.classList.add("joke-category");

  jokeSpace.appendChild(jokeCategory);
}

export { createJokeSpace, jokeContainer };
