const form = document.querySelector('.feedback-form');

form.addEventListener('input', function saveForm() {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  window.localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', function restoreFormState() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    form.email.value.trim() = savedFormData.email;
    form.message.value.trim() = savedFormData.message;
  }
});
// Очищення локального сховища та полів форми після відправки форми,
function clearFormState() {
  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
}
// Відстеження події submit на формі
form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Please fill in all fields of the form before submitting');
  }
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  clearFormState();

  console.log(formData);
});
