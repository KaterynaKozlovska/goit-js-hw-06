const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listOfIngredients = document.querySelector('#ingredients');

const newListOfLi = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient.valueOf(ingredients);
  newLi.className = 'item';

  return newLi;
});

listOfIngredients.append(...newListOfLi);
