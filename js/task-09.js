function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color")
}

refs.changeColorBtn.addEventListener("click", onBgColorSet)

function onBgColorSet(){
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.colorValue.textContent = randomColor;
}