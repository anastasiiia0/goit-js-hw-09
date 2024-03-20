const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

try {
  const parsedInputObject = JSON.parse(localStorage.getItem(localStorageKey));
  form.elements.email.value = parsedInputObject.email;
  form.elements.message.value = parsedInputObject.message;
} catch (error) {
  form.elements.email.value = '';
  form.elements.message.value = '';
}

form.addEventListener('input', event => {
  const inputObject = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(inputObject));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  try {
    const currentObject = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(
      `Email: ${currentObject.email}, message: ${currentObject.message}`
    );
  } catch (error) {
    console.log("It's empty here");
  }

  localStorage.removeItem(localStorageKey);
  form.reset();
});
