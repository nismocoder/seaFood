function initMap() {
    // The location of Uluru
    const uluru = { lat: 35.6762, lng: 139.6503 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: { lat: 35.6655, lng: 139.7707},
      map: map,
    });

    const infoWindow = new google.maps.infoWindow({
        content:"TESTING!"
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
  }

