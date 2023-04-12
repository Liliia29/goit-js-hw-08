const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedState) {
  emailInput.value = savedState.email;
  messageInput.value = savedState.message;
}

const saveFormState = throttle(() => {
  formData = {
    email: emailInput.value.trim(),
    message: messageInput.value  
  }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
});


