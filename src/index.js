import { container } from "../src/modules/container.js";
import { header } from "../src/modules/header.js";
import { page } from "../src/modules/page.js"
import { mapData, mapScript } from "./modules/maps.js";
import { content } from "./modules/pageLoad.js"

document.head.appendChild(mapData);

content.appendChild(container);
container.appendChild(header);
container.appendChild(page);

document.body.appendChild(mapScript);





