import '../scss/main.scss';

const buttonRules = document.querySelector('.button-rules');
const x_Button = document.querySelector('.times-icon');

const rules = document.querySelector('.rules');
const overlay = document.querySelector('.container__overlay');

const weapons = document.querySelectorAll('.weapon');

x_Button.onclick = () => {
  rules.classList.remove('active');
  overlay.classList.remove('active');
};

buttonRules.onclick = () => {
  rules.classList.toggle('active');
  overlay.classList.toggle('active');
};

console.log('Pokaż mi to w konsoli');
