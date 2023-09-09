
const InputName = document.querySelector('#validation-input');

InputName.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
   const inputDataLength = Number(InputName.dataset.length);
  const inputValueLength = Number(InputName.value.trim().length);

  if (inputValueLength === inputDataLength) {
    InputName.classList.add('valid');
   InputName.classList.remove('invalid');
   }
 if (inputValueLength === 0) {
    InputName.classList.remove('valid');
    InputName.classList.remove('invalid');
  }
   if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
    InputName.classList.add('invalid');
   }
}