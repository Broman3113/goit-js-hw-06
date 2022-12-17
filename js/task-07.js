const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInput);

function onInput(event) {
    const fontSize = event.currentTarget.value;
    refs.text.style.fontSize = `${fontSize}px`;
}