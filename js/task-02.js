"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const  listIngredients = ingredients.map((ingredient) => {
const liEl = document.createElement('li');
 liEl.textContent = ingredient;
   liEl.classList.add('item');
  return liEl
  })
  
const ulItem = document.querySelector('#ingredients');

ulItem.append(...listIngredients);




