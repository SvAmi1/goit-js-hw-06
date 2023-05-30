const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsItems = (ingredients) => { 
  return ingredients.map (ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
  return itemEl;
}); 
};

const elements = makeIngredientsItems(ingredients);

const listEl = document.querySelector("#ingredients");

listEl.append(...elements);
