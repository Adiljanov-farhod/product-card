const firstCardButton = document.querySelector(".button--first-card");
const firstCard = document.querySelector(".card");

firstCardButton.addEventListener("click", function () {
  firstCard.classList.toggle("card--active");
});

const allCardsButton = document.querySelector(".button--all-cards");
const cards = document.querySelectorAll(".card");

allCardsButton.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.classList.toggle("card--active");
  });
});

const googleButton = document.querySelector(".button--google");

googleButton.addEventListener("click", function () {
  window.open("https://google.com");
});

const consoleButton = document.querySelector(".button--console");
const title = document.querySelector(".products__title");

consoleButton.addEventListener("click", function () {
  console.log(title.textContent);
});

title.addEventListener("mouseover", function () {
  console.log(title.textContent);
});

const toggleButton = document.querySelector(".button--toggle");

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("button--active");
});