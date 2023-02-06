const input = document.querySelector('#validation-input');
const inputTextLength = input.dataset.length;

const inputText = () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.setAttribute('class', 'valid');
  } else {
    input.setAttribute('class', 'invalid');
  }
};

input.addEventListener('input', inputText);

// const textInput = document.querySelector('#validation-input');

// textInput.addEventListener('blur', event => {
//   if (textInput.value.length === Number(textInput.dataset.length)) {
//     input.setAttribute('class', 'valid');
//   } else {
//     input.setAttribute('class', 'invalid');
//   }
// });
