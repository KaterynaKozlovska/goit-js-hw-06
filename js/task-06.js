const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
  input.classList.remove('valid');
  return input.classList.add('invalid');
});

// const inputText = () => {
//   if (input.value.length === Number(input.dataset.length)) {
//     input.setAttribute('class', 'valid');
//   } else {
//     input.setAttribute('class', 'invalid');
//   }
// };

// input.addEventListener('input', inputText);
