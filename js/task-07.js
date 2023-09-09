//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
//і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, 
//перетягуючи повзунок, буде змінюватися розмір тексту.

const Slider = document.getElementById('font-size-control');
const text = document.getElementById('text');

const textSize = ({ currentTarget }) =>
 (text.style.fontSize = `${currentTarget.value}px`);

Slider.addEventListener('input', textSize);


