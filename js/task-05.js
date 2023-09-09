

//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен
// відображатися рядок "Anonymous".

const Input = document.querySelector('#name-input');
const Name = document.querySelector("#name-output");
 
const onInput = (event) => {
    if (Input.value !== '') { Name.textContent = Input.value }
    else {
        Name.textContent = 'Anonymous'
    }  
};
 

Input.addEventListener("input", onInput);

