const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const user = {
    email,
    password,
  };
  console.log(user);
  form.reset();
}

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   if (form.elements.email.value === "" || form.elements.password.value === "") {
//     return alert("Complete the missing fields");
//   } else {
//     let user = {};
//     user.email = form.elements.email.value;
//     user.password = form.elements.password.value;
//     console.log(user);
//     event.currentTarget.reset();
//   }
// }
