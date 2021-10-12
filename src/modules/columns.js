function columnMaker(className, id) {
    let column = document.createElement("div");
    column.className = className;
    column.id = id;
    return column;
}

let leftColumn = columnMaker("column", "left-column");
let columnImg = document.createElement("img");
columnImg.src = "../dist/img/pexels-tom-balabaud-1579739.jpg";
columnImg.alt = "background-image"; 
columnImg.id = "background-image";
leftColumn.appendChild(columnImg);

let mapContainer = document.createElement("div");
mapContainer.id = "map";
leftColumn.appendChild(mapContainer);

let centerColumn = columnMaker("page-content", "center-column");

export { leftColumn, centerColumn };