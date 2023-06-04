const formInputEl = document.querySelector('#name-input');
const greetingEl = document.querySelector('#name-output');

formInputEl.addEventListener('input', (event) => {
    
    if (event.target.value.trim() == "") {
        greetingEl.textContent == 'Anonymous';
        return;
    };
    greetingEl.textContent = event.target.value;
});

