   "use strict";
   
   
   //Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
    // та ініціалізуй її значенням 0.
    //Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    //Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const buttonDecr = document.querySelector('[data-action="decrement"]');

const buttonIncr = document.querySelector('[data-action="increment"]');

const Counter = document.getElementById('value');

const onClickButtonDecr = (event) => {
  counterValue= counterValue - 1;
  Counter.textContent = counterValue;
};

const onClickButtonIncr = (event) => {
  counterValue += 1;
  Counter.textContent = counterValue;
};

buttonDecr.addEventListener('click', onClickButtonDecr);
buttonIncr.addEventListener('click', onClickButtonIncr);


