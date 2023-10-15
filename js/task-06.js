const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
  const inputLength = inputElement.value.length;
  const requiredLength = parseInt(inputElement.getAttribute('data-length'));

  if (inputLength === requiredLength) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});
