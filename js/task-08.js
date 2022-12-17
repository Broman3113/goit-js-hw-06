const refs = {
    form:document.querySelector(".login-form"),

}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements; 
    if (elements.email.value === "" || elements.password.value === "") {
        alert("Please, fill all fields");
    } else {
        let obj = {
            [elements.email.name]: elements.email.value,
            [elements.password.name]: elements.password.value
        };
        console.log(obj);
        refs.form.reset();
    }
    
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(value, name);
    //     obj = {...obj, [name]: value}
    // })

}