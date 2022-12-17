function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  let size = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box)
  }

  return boxesArray;
}

const refs = {
  boxesContainer: document.querySelector("#boxes"),
  controls: document.querySelector("#controls")
}

const inputEl = refs.controls.querySelector('input[type="number"]');
const createBtnEl = refs.controls.querySelector('button[data-create]');
const destroyBtnEl = refs.controls.querySelector('button[data-destroy]');

createBtnEl.addEventListener("click", onCreateBoxes)
destroyBtnEl.addEventListener("click", onDestroyBoxes)

function onCreateBoxes() {
  const amount = inputEl.value;
  const boxes = createBoxes(amount);
  console.log(amount, boxes);
  onDestroyBoxes();
  refs.boxesContainer.append(...boxes);
}

function onDestroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}