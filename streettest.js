function initialize() {
  function generateRandomLong(){
    var num = (Math.random()*180.toFixed(5);
    var posneghiv = Math.floor(Math.random());
    if (posneghiv == 0){
      num = num * -1;
    }

  }
  function generateRandomLat(){
    var num = (Math.random()*90.toFixed(5);
    var posneghiv = Math.floor(Math.random());
    if (posneghiv == 0){
      num = num * -1;
    }

  }

  var xcoord = generateRandomLat();
  var ycoord = generateRandomLong();

  var initialLocation = new google.maps.LatLng(xcoord, ycoord);
  var panoramaOptions = {
      position: initialLocation,
      pov: {
        heading: 165,
        pitch: 0
      },
      zoom: 1
  };

  var suchPano = new google.maps.StreetViewPanorama(
        document.getElementById('map-canvas'),
        panoramaOptions);
      suchPano.setVisible(true);
}


google.maps.event.addDomListener(window, 'load', initialize);

}
