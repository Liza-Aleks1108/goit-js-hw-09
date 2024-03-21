const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const textarea = formEl.querySelector('textarea');
const email = formEl.querySelector('input[type="email"]');
const btnEl = formEl.querySelector('button');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onSubmit);

populateForm();

let formData = {};
function onFormInput(event) {
  formData = {
    email: email.value,
    message: textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const parseSavedData = JSON.parse(savedData);
      email.value = parseSavedData.email;
      textarea.value = parseSavedData.message;
    } catch (error) {
      console.error('Error parsing saved data:', error);
    }
  }
}

function onSubmit(event) {
  event.preventDefault();

  if (email.value.trim() !== '' && textarea.value.trim() !== '') {
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.clear();
    email.value = '';
    textarea.value = '';
  } else {
    console.log('Обидва елементи форми мають бути заповнені');
  }
}
