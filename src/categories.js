import { createJokeSpace, jokeContainer } from "./joke-space";

const CATEGORY_SEARCH = "https://api.chucknorris.io/jokes/random?category=";
const CATEGORIES = "https://api.chucknorris.io/jokes/categories";

function getJokeFromCategory() {
  let categories = Array.from(document.querySelectorAll(".category-input"));
  const checkedCategory = categories.find((category) => category.checked);

  fetch(CATEGORY_SEARCH + checkedCategory.id)
    .then((response) => response.json())
    .then((processedResponse) => {
      createJokeSpace(processedResponse);

      while (jokeContainer.childElementCount > 1) {
        jokeContainer.lastChild.remove();
      }
    });
}

let categoryContainer;

function showCategories(evt) {
  if (evt.target.id === "category" && evt.target.checked) {
    getAvailableCategories();

    // Paste div with categories after button "From category"
    categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categories");
    document.querySelector(".search-form").append(categoryContainer);
    document.querySelector("label[for='category']").after(categoryContainer);
  } else {
    categoryContainer.remove();
  }
}

function getAvailableCategories() {
  fetch(CATEGORIES)
    .then((response) => response.json())
    .then((processedResponse) => {
      processedResponse.forEach((element) => {
        createCategoryButton(element);
      });
    });
}

function createCategoryButton(name) {
  const button = document.createElement("label");
  button.setAttribute("for", name);
  button.innerHTML = name;
  button.classList.add("category-btn");

  categoryContainer.append(button);

  const input = document.createElement("input");
  input.setAttribute("name", "category");
  input.type = "radio";
  input.id = name;
  input.classList.add("category-input");
  categoryContainer.append(input);

  // Add ability to change checked category button style
  document.querySelectorAll(".category-input").forEach(function (element) {
    element.addEventListener("click", function () {
      document.querySelectorAll(".category-btn").forEach(function (label) {
        label.style.backgroundColor = "#fff";
        label.style.color = "#ababab";
      });

      document.querySelector(
        "label[for='" + this.id + "']"
      ).style.backgroundColor = "#f8f8f8";
      document.querySelector("label[for='" + this.id + "']").style.color =
        "#333333";
    });
  });
}

export { showCategories, getJokeFromCategory };
