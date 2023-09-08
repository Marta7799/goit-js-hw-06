function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelectorAll("button")[0];
const destroy = document.querySelectorAll("button")[1];
const box = document.getElementById("boxes");

const createBoxes = () => {
  let amount = input.value;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    box.append(div);
    div.style.margin = "10px";
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
  }
  create.removeEventListener("click", createBoxes);
  destroy.addEventListener("click", destroyBoxes);
};

const destroyBoxes = () => {
  box.innerHTML = "";
  destroy.removeEventListener("click", destroyBoxes);
  create.addEventListener("click", createBoxes);
};

create.addEventListener("click", createBoxes);
