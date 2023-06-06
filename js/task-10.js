function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener("click", () => {
  const amount = inputEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtnEl.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
    
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {

    let box = document.createElement("div");
    
    box.style.width = 30 + i*10 + "px";
    box.style.height = box.style.width;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);}

    boxesEl.append(...boxes);
  }


function destroyBoxes() {
  boxesEl.innerHTML = "";
}
