const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrBtn.addEventListener('click', decrementPressCounter);
incrBtn.addEventListener('click', incrementPressCounter);

function decrementPressCounter() {
    counterValue -=1; 
valueEl.textContent = counterValue;};

function incrementPressCounter() {
    counterValue +=1; 
valueEl.textContent = counterValue;};
