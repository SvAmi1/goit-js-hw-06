const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.createElement('li');

const markup = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

const listEl = document.querySelector("#ingredients");
listEl.append(markup);



// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const listOfIngredients = document.querySelector('#ingredients');

// const makeIngredientsItems = elements => {
//   return elements.map(element => {
//     const itemElements = document.createElement('li');
//     itemElements.textContent = element;
//     itemElements.classList.add('item');
//     return itemElements;
//   });
// };

// const itemIngrediens = makeIngredientsItems(ingredients);
// listOfIngredients.append(...itemIngrediens);