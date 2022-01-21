import { gsap } from "gsap/all";
import { weaponCPU } from "./main";

const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const triangle = document.querySelector(".triangle");
const ul = document.querySelector(".weapons");

let newWeapon = "";

const createCPUweapon = setTimeout(() => {
  newWeapon = weaponCPU.cloneNode(true);

  console.log(newWeapon);

  gsap.to(newWeapon, {
    duration: 0.1,
    opacity: 0,
  });

  return newWeapon;
}, 100);

export default scissors.onclick = () => {
  gsap.to("#scissors", {
    duration: 1,
    x: "-105%",
    ease: "linear",
    pointerEvents: "none",
  });

  gsap.to(".header", {
    duration: 1,
    opacity: 0,
    ease: "power1.out",
  });

  gsap.to("#rock", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });
  gsap.to("#paper", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });
  gsap.to(".triangle", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(".vs", {
    duration: 1,
    delay: 2,
    opacity: 1,
  });

  gsap.to(".selection__name", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(newWeapon, {
    duration: 1,
    x: "125%",
    y: "-95%",
    pointerEvents: "none",
  });

  setTimeout(() => {
    ul.appendChild(newWeapon);
  }, 2000);

  gsap.to(newWeapon, {
    duration: 1,
    opacity: 1,
    delay: 2.5,
  });
};

rock.onclick = () => {
  gsap.to("#rock", {
    duration: 1,
    x: "-245%",
    ease: "linear",
    pointerEvents: "none",
  });

  gsap.to("#scissors", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });

  gsap.to(".header", {
    duration: 1,
    opacity: 0,
    ease: "power1.out",
  });

  gsap.to("#paper", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });
  gsap.to(".triangle", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(".vs", {
    duration: 1,
    delay: 2,
    opacity: 1,
  });

  gsap.to(".selection__name", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(newWeapon, {
    duration: 1,
    x: "125%",
    y: "-95%",
    pointerEvents: "none",
  });

  setTimeout(() => {
    ul.appendChild(newWeapon);
  }, 2000);

  gsap.to(newWeapon, {
    duration: 1,
    opacity: 1,
    delay: 2.5,
  });
};

paper.onclick = () => {
  gsap.to("#paper", {
    duration: 1,
    x: "-130%",
    y: "-95%",
    ease: "ease",
    pointerEvents: "none",
  });

  gsap.to("#rock", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });

  gsap.to("#scissors", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
  });

  gsap.to(".header", {
    duration: 1,
    opacity: 0,
    ease: "power1.out",
  });

  gsap.to(".triangle", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(".vs", {
    duration: 1,
    delay: 2,
    opacity: 1,
  });

  gsap.to(".selection__name", {
    duration: 1,
    opacity: 0,
  });

  gsap.to(newWeapon, {
    duration: 1,
    x: "125%",
    y: "-95%",
    pointerEvents: "none",
  });

  setTimeout(() => {
    ul.appendChild(newWeapon);
  }, 2000);

  gsap.to(newWeapon, {
    duration: 1,
    opacity: 1,
    delay: 2.5,
  });
};
