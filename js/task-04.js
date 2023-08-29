let count = 0;

const counter = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMinus.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

buttonPlus.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
