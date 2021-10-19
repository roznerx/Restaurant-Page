let contactTitle = document.createElement("h4");
contactTitle.className = "contact-h4s";
contactTitle.id = "contact-title";
contactTitle.innerHTML = "¡Contactanos!";

let contactContent = document.createElement("h2");
contactContent.id = "contact-content";
contactContent.innerHTML = `Teléfono: 4345-9466<br /><br />Móvil/WhatsApp: +54 11 33 51 87 81<br /><br />E-mail: 
flaviajosefaresto@gmail.com<br /><br />`;

let contactExtra = document.createElement("h3");
contactExtra.id = "contact-extra";
contactExtra.innerHTML = "Reservas solo por WhatsApp de lunes a domingos entre las 10 y las 17 hs";

let contactSignature = document.createElement("h4");
contactSignature.className = "contact-h4s";
contactSignature.id = "contact-signature";
contactSignature.innerHTML = "¡Los esperamos!";

export { contactTitle, contactContent, contactExtra, contactSignature };