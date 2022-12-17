const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientListItemMarkup = ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
}

const ingredientsList = ingredients.map(makeIngredientListItemMarkup);

ingredientsEl.append(...ingredientsList);