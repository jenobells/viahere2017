$(document).ready(function() {
    var myLocation = new google.maps.LatLng(14.5649,120.9939);
    var mapOptions = {
        center: myLocation,
        zoom: 16
    };
    var marker = new google.maps.Marker({
        position: myLocation,
        title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"),
        mapOptions);
    marker.setMap(map);

})(jQuery); 
