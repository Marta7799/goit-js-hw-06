const inputChanges = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");

inputChanges.addEventListener("input", (fontSize) => {
  textSpan.style.fontSize = `${fontSize.target.value}px`;
});
