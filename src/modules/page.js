import { leftColumn, centerColumn } from "./columns.js";

let page = document.createElement("div");
page.className = "page";

page.appendChild(leftColumn);
page.appendChild(centerColumn);

export { page };