const inputChanges = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");

inputChanges.addEventListener("input", (fontSize) => {
  textSpan.style.fontSize = `${fontSize.target.value}px`;
});


// const scroll = document.getElementById("font-size-control");
// const text = document.getElementById("text");

// scroll.addEventListener(
//   "input",
//   () => (text.style.fontSize = `${scroll.value}px`)
// );