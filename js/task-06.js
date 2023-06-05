const formInputEl = document.querySelector('#validation-input');

formInputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
    
    if (formInputEl.value.trim().length == formInputEl.dataset.length) {

        formInputEl.classList.add('valid');
        formInputEl.classList.remove('invalid');

    } else {

        formInputEl.classList.remove('valid');
        formInputEl.classList.add('invalid');
        
    }
}
