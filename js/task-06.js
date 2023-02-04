const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  if (input.value.length === Number(input.dataset.length)) {
    return input.classList.add('valid');
  }
  return input.classList.add('invalid');
});
