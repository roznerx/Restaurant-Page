function buttonMaker(id) {
    let button = document.createElement("button");
    button.className = "headerButton";
    button.id = id;
    return button;
}

let button1 = buttonMaker("Home");
button1.innerHTML = "Inicio";

let button2 = buttonMaker("Menu");
button2.innerHTML = "Menú";

let button3 = buttonMaker("Contact");
button3.innerHTML = "Contacto";

export { button1, button2, button3 };