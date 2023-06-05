const formInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


formInputEl.addEventListener('input', () => {
    textEl.style.fontSize = formInputEl.value + "px";
  });
