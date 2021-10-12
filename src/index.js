/*import { initMap } from "./maps.js";

initMap();
*/

import { container } from "../src/modules/container.js";
import { header } from "../src/modules/header.js";
import { page } from "../src/modules/page.js"

let content = document.getElementById("content"); 
content.appendChild(container);
container.appendChild(header);
container.appendChild(page);





