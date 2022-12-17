const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
    } else {
        refs.input.classList.add('invalid');
        refs.input.classList.remove('valid');
    }
}