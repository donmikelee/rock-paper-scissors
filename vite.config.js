import { defineConfig } from "vite";
import imgUrl from "./images/icon-paper.svg";

document.getElementById("img").src = imgUrl;

console.log(imgUrl);

export default defineConfig({
  base: "/rock-paper-scissors/",
});
