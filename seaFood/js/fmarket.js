// function initMap() {
//     // The location
//     const Japan = { lat: 35.6762, lng: 139.6503 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: Japan,
//     });

//     const contentString = 
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Tsukiji</h1>' +
//     '<div id="bodyContent">' +
//     "</div>" +
//     "</div>";

//     const infoWindow = new google.maps.InfoWindow({
//         content: contentString,
//     });

//     const marker = new google.maps.Marker({
//       position: { lat: 35.6655, lng: 139.7707},
//       map: map,
//       title: "SKYLINE",
//     });

//     marker.addListener("click", function(){
//         infoWindow.open(map, marker);
//     });
//   }


  function initMap() {

    const Japan = { lat: 35.6762, lng: 139.6503 };

    const map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 2,
      center: Japan,
    });

    addMarker({coords:{lat: 35.6655, lng: 139.7707}});
    addMarker({coords:{lat: 19.3674, lng: -99.0970}});
    addMarker({coords:{lat: -33.8730, lng: 151.1927}});
    addMarker({coords:{lat: 51.5062, lng: 0.0126}});
    addMarker({coords:{lat: 53.5457, lng: 9.9520}});
    addMarker({coords:{lat: 35.0884, lng: 129.0252}});
    addMarker({coords:{lat: 57.7019, lng: 11.9573}});
    addMarker({coords:{lat: 40.8027, lng: -73.8752}});
    addMarker({coords:{lat: 22.3193, lng: 114.1694}});
    addMarker({coords:{lat: 25.0667, lng: 121.5367}});
    //   addMarker({coords:{lat: 22.3193, lng: 114.1694},
    // content:'<h1>Hong Kong</h1>'});

    function addMarker(props){
    const marker = new google.maps.Marker({
      position:props.coords,
      map: map,
    });

        let contentString = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tsukiji</h1>' +
    '<div id="bodyContent">' +
    "</div>" +
    "</div>";

    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });

        marker.addListener("click", function(){
        infoWindow.open(map, marker);
    });
  }
}


// 2 markers on map so far
// function initMap() {

//   const Japan = { lat: 35.6762, lng: 139.6503 };

//   const map = new google.maps.Map(document.getElementById("map"),
//   {
//     zoom: 4,
//     center: Japan,
//   });

//   addMarker({lat: 35.6655, lng: 139.7707});
//   addMarker({lat: 22.3193, lng: 114.1694});
//   //   addMarker({coords:{lat: 22.3193, lng: 114.1694},
//   // content:'<h1>Hong Kong</h1>'});

//   function addMarker(coords){
//   const marker = new google.maps.Marker({
//     position:coords,
//     map: map,
//   });

//       const contentString = 
//   '<div id="content">' +
//   '<div id="siteNotice">' +
//   "</div>" +
//   '<h1 id="firstHeading" class="firstHeading">Tsukiji</h1>' +
//   '<div id="bodyContent">' +
//   "</div>" +
//   "</div>";

//   const infoWindow = new google.maps.InfoWindow({
//       content: contentString,
//   });

//       marker.addListener("click", function(){
//       infoWindow.open(map, marker);
//   });
// }
// }


// WTF
// function initMap() {
//   // The location
//   const Japan = { lat: 35.6762, lng: 139.6503 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: Japan,
//   });

//   const contentString = 
//   '<div id="content">' +
//   '<div id="siteNotice">' +
//   "</div>" +
//   '<h1 id="firstHeading" class="firstHeading">Tsukiji</h1>' +
//   '<div id="bodyContent">' +
//   "</div>" +
//   "</div>";

//   const infoWindow = new google.maps.InfoWindow({
//       content: contentString,
//   });

//   const marker = new google.maps.Marker({
//     position: { lat: 35.6655, lng: 139.7707},
//     map: map,
//     title: "SKYLINE",
//   });

//   marker.addListener("click", function(){
//       infoWindow.open(map, marker);
//   });
// }