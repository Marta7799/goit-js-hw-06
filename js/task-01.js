const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((category) => {
  const title = category.querySelector("h2");
  const categoryName = title.textContent;
  const elementsNumber = category.querySelectorAll("li").length;

  //console.log(`Category: ${categoryName} Elements: ${elementsNumber}`);
  console.log(`Category:`, categoryName);
  console.log(`Elements:`, elementsNumber);
});

// const category = document.querySelectorAll(".item");

// console.log(`Number of categories: ${category.length}`);

// category.forEach((foo) => {
//   let name = foo.firstElementChild.innerHTML;
//   let number = foo.querySelectorAll("li").length;

//   console.log(`Category: ${name} Elements: ${number}`);
// });
