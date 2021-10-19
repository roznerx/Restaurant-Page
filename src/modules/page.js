import { leftColumn, centerColumn } from "./columns.js";
import { contentTitle, contentText, contentSignature} from "./home";
import { button1, button2, button3 } from "./headerButtons.js";
import { entradasTitle, entradasContent, platosPrincipalesTitle, 
    platosPrincipalesContent, postresTitle, postresContent } from "./menu.js";

let page = document.createElement("div");
page.className = "page";

page.appendChild(leftColumn);
page.appendChild(centerColumn);

let buttonSetter = "";
centerColumn.appendChild(contentTitle);
centerColumn.appendChild(contentText);
centerColumn.appendChild(contentSignature);

button1.addEventListener("click", () => {
    if (buttonSetter = "2") {
        entradasTitle.remove();
        entradasContent.remove();
        platosPrincipalesTitle.remove();
        platosPrincipalesContent.remove();
        postresTitle.remove();
        postresContent.remove();
    };
    if (buttonSetter = "3") {
        console.log("toDo");
    };
    buttonSetter = "1";
    centerColumn.appendChild(contentTitle);
    centerColumn.appendChild(contentText);
    centerColumn.appendChild(contentSignature);
});

button2.addEventListener("click", () => {
    if (buttonSetter = "1" || buttonSetter == "") {
        contentTitle.remove();
        contentText.remove();
        contentSignature.remove();
    };
    if (buttonSetter = "3") {
        console.log("toDo");
    };
    buttonSetter = "2";
    centerColumn.appendChild(entradasTitle);
    centerColumn.appendChild(entradasContent);
    centerColumn.appendChild(platosPrincipalesTitle);
    centerColumn.appendChild(platosPrincipalesContent);
    centerColumn.appendChild(postresTitle);
    centerColumn.appendChild(postresContent);
});

button3.addEventListener("click", () => {
    buttonSetter = "3";
});

export { page };