const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bodyChangedColor.textContent = document.body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
