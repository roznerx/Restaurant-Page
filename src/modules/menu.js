let entradasTitle = document.createElement("h4");
entradasTitle.className = "menu-titles";
entradasTitle.id = "entradas-title";
entradasTitle.innerHTML = "Entradas";

let entradasContent = document.createElement("h2");
entradasContent.id = "entradas-content";
entradasContent.innerHTML = `Sopa de Verduras<br />Vitel Toné<br />Ensalada Waldorf<br />Ensalada "Sandra" (papa, pepinillos y panceta)<br />
Bueñuelos de Penca<br />Picada Agridulce (melón con jamón, queso y cerezas)<br />Gambas al Ajillo`;

let platosPrincipalesTitle = document.createElement("h4");
platosPrincipalesTitle.className = "menu-titles";
platosPrincipalesTitle.id = "platos-principales";
platosPrincipalesTitle.innerHTML = "Platos Principales";

let platosPrincipalesContent = document.createElement("h2");
platosPrincipalesContent.id = "platos-principales-content";
platosPrincipalesContent.innerHTML = `Saltimbocca (con papas rústicas)<br />Milanesas (con papas fritas)<br />Ñoquis de Remolacha 
(con salsa de crema)<br />Puchero "La Abuela Josefa" (incluye papa, batata, zanahoria y calabaza)<br />Chorizo a la Pomarola<br />Pastel 
de Papa<br />Polenta (con tuco, queso fresco y carne picada)<br />Carne al Horno (con papas, batatas y boniato)`;

let postresTitle = document.createElement("h4");
postresTitle.className = "menu-titles";
postresTitle.id = "postres-title";
postresTitle.innerHTML = "Postres";

let postresContent = document.createElement("h2");
postresContent.id = "postres-content";
postresContent.innerHTML = `
Tiramisú<br />Queso y Dulce<br />Flan Casero (con crema y dulce de leche)`;

export { entradasTitle, entradasContent, platosPrincipalesTitle, platosPrincipalesContent, postresTitle, postresContent };