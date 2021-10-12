import { button1, button2, button3 } from "./headerButtons.js";

let header = document.createElement("div");
header.className = "header";

let headerImg = document.createElement("img");
headerImg.src = "../dist/img/JOSEFAALONSOHEADER.jpg";
headerImg.alt = "josefa-alonso-banner";
headerImg.className = "banner-img";
header.appendChild(headerImg);

let headerBar = document.createElement("div");
headerBar.id = "bar";
header.appendChild(headerBar);

let headerButtons = document.createElement("div");
headerButtons.id = "headerButtons";
headerButtons.appendChild(button1);
headerButtons.appendChild(button2);
headerButtons.appendChild(button3);
header.appendChild(headerButtons);

let headerBar2 = document.createElement("div");
headerBar2.id = "bar2";
header.appendChild(headerBar2);

let madeBy = document.createElement("div");
madeBy.id = "made-by";
madeBy.innerHTML = 'Made by <a href="https://github.com/roznerx" target="_blank">roznerx</a>';
header.appendChild(madeBy);

export { header };