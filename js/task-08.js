
const Form = document.querySelector('.login-form');

Form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
    if (!email.value.trim() || !password.value.trim()) {
    return alert('Fill in all the fields, please!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}