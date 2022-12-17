const valueEl = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementEl.addEventListener("click", onCalcBtnsClick("sub"));
incrementEl.addEventListener("click", onCalcBtnsClick("add"));

function onCalcBtnsClick(method) {
  if (method === "sub") {
    return () => {
      counterValue -= 1;
      valueEl.textContent = counterValue;
    };
  } else if (method === "add") {
    return () => {
      counterValue += 1;
      valueEl.textContent = counterValue;
    };
  }
}
