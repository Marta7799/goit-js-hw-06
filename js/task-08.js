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

  user.email = email.value;
  user.password = password.value;

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log(user);
  form.reset();
}
