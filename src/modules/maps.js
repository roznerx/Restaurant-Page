let mapData = document.createElement("script");
mapData.type= "text/javascript";
mapData.innerHTML = 
    `function initMap() {
        const josefaAlonso = { lat: -34.62544219457501, lng: -58.41589238689285 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: josefaAlonso,
        });
        const marker = new google.maps.Marker({
            position: josefaAlonso,
            map: map,
        });
    }`;

let mapScript = document.createElement("script");
mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCT1Ji688zHhEBxLZCG7VJL2y4Orxg-FnU&callback=initMap";
mapScript.async = true;

export { mapData, mapScript };