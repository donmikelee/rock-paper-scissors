import "../scss/main.scss";

const buttonRules = document.querySelector(".button-rules");
const x_Button = document.querySelector(".times-icon");

const rules = document.querySelector(".rules");
const overlay = document.querySelector(".container__overlay");

const weapons = document.querySelectorAll(".weapon");
const weapon_title = document.querySelector(".selection__name");

// const observer = new ResizeObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// });

x_Button.onclick = () => {
  rules.classList.remove("active");
  overlay.classList.remove("active");
};

buttonRules.onclick = () => {
  rules.classList.toggle("active");
  overlay.classList.toggle("active");
};

weapons.forEach((weapon) => {
  // observer.observe(weapon);

  weapon.onclick = () => {
    weapon.classList.add("clicked");
    console.log(`Dodano klasę`);
  };

  weapon.addEventListener("mouseenter", () => {
    weapon_title.innerText = `${weapon.id}`;
  });
});

window.addEventListener("load", (e) => {
  console.log(e, "Kotek");
});
