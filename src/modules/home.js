let contentTitle = document.createElement("h4");
contentTitle.className = "content-title";
contentTitle.innerHTML = "Bienvenidos a nuestro lugar...";

let contentText = document.createElement("h2");
contentText.id = "content-text";
contentText.innerHTML = `¡Cocinamos con amor!<br /><br />¡Nos divertimos!<br /><br />¡Reímos!<br /><br />Y sobre todo...<br /><br />
¡Compartimos momentos únicos!<br /><br />Como en casa y con pasión...<br /><br />¡Sabores de familia!`;

let contentSignature = document.createElement("h3");
contentSignature.id = "signature";
contentSignature.innerHTML = "Sandra";

export { contentTitle, contentText, contentSignature };