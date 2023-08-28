const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.className = "item";
//   item.textContent = ingredient;
//   list.append(item);
// });

const newIngredients = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  return item;
});
list.append(...newIngredients);
