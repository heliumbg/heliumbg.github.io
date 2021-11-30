function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.2124851, lng: 27.874877};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 12,
        center: myLatLng
    });

    /*var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Varna' // Title Location
    });*/
}