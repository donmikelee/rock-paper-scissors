import { gsap } from "gsap/all";
import { weaponCPU } from "./main";

const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("9paper");
const triangle = document.querySelector(".triangle");
const ul = document.querySelector(".weapons");

export default scissors.onclick = () => {
  gsap.to("#scissors", {
    duration: 0.5,
    x: "-125%",
    ease: "linear",
  });

  gsap.to(".header", {
    duration: 0.5,
    opacity: 0,
    ease: "power1.out",
  });

  gsap.to("#rock", {
    duration: 0.5,
    opacity: 0,
  });
  gsap.to("#paper", {
    duration: 0.5,
    opacity: 0,
  });
  gsap.to(".triangle", {
    duration: 0.5,
    opacity: 0,
  });

  gsap.to(".vs", {
    duration: 0.5,
    delay: 2,
    opacity: 1,
  });

  gsap.to(".selection__name", {
    duration: 0.5,
    opacity: 0,
  });

  setTimeout(() => {
    ul.appendChild(weaponCPU);

    console.log("Dodano dziecko");
  }, 5000);
};
