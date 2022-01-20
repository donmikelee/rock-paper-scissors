import "./style.scss";
import animations from "./gsap";

const buttonRules = document.querySelector(".button-rules");
const x_Button = document.querySelector(".times-icon");

const rules = document.querySelector(".rules");
const overlay = document.querySelector(".container__overlay");

export const weapons = document.querySelectorAll(".weapon");
const weapon_title = document.querySelector(".selection__name");

export let weaponCPU = "Kotek";

x_Button.onclick = () => {
  rules.classList.remove("active");
  overlay.classList.remove("active");
};

buttonRules.onclick = () => {
  rules.classList.toggle("active");
  overlay.classList.toggle("active");
};

weapons.forEach((weapon) => {
  weapon.addEventListener("mouseenter", () => {
    weapon_title.innerText = `${weapon.id}`;
  });
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const getWeaponCPU = () => {
//   const getNumber = getRandomIntInclusive(0, 2);
//   weaponCPU = weapons[getNumber];

//   console.log(weaponCPU);
// };

// window.onload = () => {
//   getWeaponCPU();
// };
