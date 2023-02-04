const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', event => {
  console.dir(`${event.currentTarget.value}px`);
  console.log(text.style.fontSize);
});
