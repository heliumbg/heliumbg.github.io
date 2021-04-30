function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.571561589087466, lng: 27.802420255603707};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}