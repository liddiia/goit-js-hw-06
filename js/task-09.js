function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const Body = document.body;


 const changeColor = () => {
 textColor.textContent = getRandomHexColor();
  Body.style.backgroundColor = textColor.textContent;
 };

changeColorBtn.addEventListener('click', changeColor);