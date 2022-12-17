const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output") 
}

refs.input.addEventListener("input", onInput)

function onInput(e) {
    refs.output.textContent = e.currentTarget.value || "Anonymous";
}