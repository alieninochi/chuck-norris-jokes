const jokeContainer = document.querySelector(".joke-container");
let jokeSpace;

function createJokeSpace(res) {
  jokeSpace = document.createElement("div");
  jokeSpace.classList.add("joke");
  jokeContainer.prepend(jokeSpace);

  createFavIcon();
  createIcon();
  getJokeId(res.url, res.id);
  getJokeText(res.value);
  getLastUpdate(res["updated_at"]);

  if (res.categories.length !== 0) {
    getJokeCategory(res.categories);
  } else if (document.querySelector(".joke-category") !== null) {
    document.querySelector(".joke-category").remove();
  }
}

function createFavIcon() {
  const favButton = document.createElement("button");
  favButton.classList.add("fav-btn");
  jokeSpace.append(favButton);

  const heart = document.createElement("img");
  heart.src = "./img/heart.svg";
  heart.alt = "add to favourite";
  favButton.append(heart);

  favButton.addEventListener("click", () => heart.classList.toggle("heart"));
}

function createIcon() {
  const icon = document.createElement("img");
  icon.src = "./img/static-icon.svg";
  icon.alt = "icon";
  icon.classList.add("static-icon");

  jokeSpace.append(icon);
}

function getJokeId(url, id) {
  const jokeId = document.createElement("p");
  jokeId.innerHTML = "ID: ";
  jokeId.classList.add("joke-id");

  jokeSpace.appendChild(jokeId);

  const idUrl = document.createElement("a");
  idUrl.href = url;
  idUrl.innerHTML = id;
  idUrl.classList.add("id-url");

  jokeId.append(idUrl);

  const link = document.createElement("img");
  link.src = "./img/link.svg";
  link.alt = "link";
  link.classList.add("link-icon");
  idUrl.append(link);
}

function getJokeText(text) {
  const jokeText = document.createElement("p");
  jokeText.innerHTML = text;
  jokeText.classList.add("joke-text");

  jokeSpace.append(jokeText);
}

function getLastUpdate(time) {
  // Determine how many hours ago the joke was changed
  let hours = new Date();
  hours.setTime(Date.parse(time));
  hours = Math.round((+new Date() - hours) / 3.6e6);

  const jokeUpdate = document.createElement("p");
  jokeUpdate.innerHTML = `Last update: ${hours} hours ago`;
  jokeUpdate.classList.add("joke-last-update");

  jokeSpace.append(jokeUpdate);
}

function getJokeCategory(category) {
  const jokeCategory = document.createElement("div");
  jokeCategory.innerHTML = category[0];
  jokeCategory.classList.add("joke-category");

  jokeSpace.append(jokeCategory);
}

export { createJokeSpace, jokeContainer };
