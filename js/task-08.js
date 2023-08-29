const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  form.reset();
}
