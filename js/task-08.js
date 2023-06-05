const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (e) {
    e.preventDefault();
    const { 
        elements: {email, password}, } = e.currentTarget;

    if (email.value == "" || password.value == "") {
        alert("All form fields must be filled in");
        return;
    } 
    else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        formEl.reset();
    }
  };
