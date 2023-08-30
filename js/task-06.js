// const textInput = document.querySelector("#validation-input");

// console.log(textInput.getAttribute("data-length"));

// textInput.addEventListener("blur", (event) => {
//   if (event.target.value.length == textInput.getAttribute("data-length")) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });

const textInput = document.getElementById("validation-input");

const length = textInput.getAttribute("data-length");

const validation = () => {
  if (textInput.value.length < length) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else if (textInput.value.length > length) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
};

textInput.addEventListener("blur", validation);
