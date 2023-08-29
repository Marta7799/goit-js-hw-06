const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;

  if (userEmail === "" || userPassword === "") {
    return alert("Please fill in all the fields!");
  }

  const user = {
    email,
    password,
  };
  console.log(user);
  form.reset();
}
