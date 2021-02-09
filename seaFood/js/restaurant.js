function initMap() {

    const Japan = { lat: 35.6762, lng: 139.6503 };

    const map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 2,
      center: Japan,
    });

    addMarker({coords:{lat: 50.6972, lng: -2.7222},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Hive Beach Café</b></h1>' +
      '<h2><img src="Assets/images/hive beach cafe.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Hive Beach Café</b>, located in In the Southwest region of England, This restaurant is extremely popular with "+
      " tourists and locals alike due to the freshness of the seafood that they offer."+
      "Their delightful ‘crab sandwich’ as most of the restaurant’s patrons rave about it. It is, supposedly, to die for."+
      "<br>The restaurant opens most mornings (except holidays and some Wednesdays) at 10:00 a.m.</p></div></div>"
    });

    addMarker({coords:{lat: 55.6680, lng: 12.5592},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Kødbyens Fiskebar</b></h1>' +
      '<h2><img src="Assets/images/copenhagen.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Kødbyens Fiskebar</b>,is fresh seafood, easy-drinking wines, delicious cocktails and a staff passionate about it."+
      "All in a raw and rustic setting in the Meatpacking District in Copenhagen."+
      "<br>The restaurant is open Tuesday 17.00 – 22.00<br> Wednesday, Thursday,Friday and Saturday 11.30 – 22.00"+
      "<br> It is located in Copenhagen Denmark.</p></div></div>"
    });

    addMarker({coords:{lat: -37.8340, lng: 144.9819},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Bacash</b></h1>' +
      '<h2><img src="Assets/images/bacash.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Bacash restaurant</b> where fish is the order of the day and simplicity is key."+
      "Here you’ll find Melbourne’s finest seafood produce, executed to perfection."+
      "The restaurant is particular about the quality of produce they use"+
      " and this reflects in each of the scintillating dishes that they create."+
      "The dish that they are famous for is the ‘Lebanese Style Snapper Fillet’"+
      "The restaurant is open Monday to Friday, Lunch from 12:00 pm"+
      "<br>Monday to Saturday Dinner from 6:00 pm"+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 59.9146, lng: 10.7497},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Fiskeriet Restaurant</b></h1>' +
      '<h2><img src="Assets/images/fisk.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Fiskeriet</b>, is located in Oslo Norway. Fiskeriet is a seafood restaurant that doubles as a seafood shop."+
      " The local fish market was converted into a restaurant in 2010 however they continued to use a part of it to sell raw produce."+
      "This gives this place a special charm. The reason it makes it to our list though is for its ‘fish and chips’."+
      "The restaurant is open Monday to Friday 12.00-18.00 Saturday 12.00-18.00"+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 45.4372, lng: 12.3402},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Alle Testiere Ristorante</b></h1>' +
      '<h2><img src="Assets/images/ristorante.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Alle Testiere</b>,is located in Venice Italy, the city of romance also happens to be the city of restaurants."+
      "AlleTestiere is one of the impressive Venetian restaurants that take their seafood seriously."+
      "Whether it’s the ‘fish, crustacean and mollusk soup’ or ‘scallops with orange and cervere leeks’"+
      " the attention to detail is visible in each dish."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 40.7617, lng: -73.9819},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Le Bernardin</b></h1>' +
      '<h2><img src="Assets/images/ny.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Le Bernardin restaurant</b>This Michelin-starred restaurant is well known for its award-winning seafood dishes."+
      " Ranked 24 on The World’s Best Restaurants list, Le Bernardin enjoys an iconic status in New York."+
      "From sophisticated to simple, the restaurant offers a wide range of seafood delicacies."+
      "</p></div></div>"
  });

    addMarker({coords:{lat: -12.1112, lng: -77.0452},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>La Mar</b></h1>' +
      '<h2><img src="Assets/images/lamar.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>La Mar Restaurant</b>, the star dish of Peruvian cuisine is ceviche which is made of citrus-marinated raw fish. "+
      " A restaurant that is known for doing this dish well is La Mar in Lima. It offers different varieties of ceviche "+
      "made of fish and other seafood, each one tastes different and packs a flavour punch."+
      "Besides ceviche, La Mar serves a lot of impeccably cooked seafood treats each stunning in its own right."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 35.6745, lng: 139.7634},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Sukiyabashi Jiro</b></h1>' +
      '<h2><img src="Assets/images/jiro.jpg" alt="Girl in a jacket" width="310" height="250"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Sukiyabashi Jiro</b> A Tokyo restaurant serving some of the world’s most acclaimed sushi."+
      "If you are ever in the mood for treating yourself to a grand sushi experience then this is the place to visit.<br>"+
      "Hours of operation are 2am	–	7am on weekdays and closed on the weekends"+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 42.6414, lng: 18.1084},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Proto Restaurant</b></h1>' +
      '<h2><img src="Assets/images/proto.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Proto restaurant</b> Located in Dubrovnik, Croatia. The restaurant that always catches the fancy of seafood aficionados in this seaport town is Proto."+
      " The popular choice at this restaurant is the heavenly tasting ‘fisherman’s soup en tasse’"+
      "and the exquisite‘stuffed gratinated lobster “PONTA OŠTRA” (risotto with wild rice, truffles and mushrooms.)’"+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 50.8484, lng: 4.3541},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Chez Leon Restaurant</b></h1>' +
      '<h2><img src="Assets/images/leon.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Chez Leon</b> Located in Brussels, Belgium. When in Brussels, you got to eat mussels."+
      "And, the place with the best mussels is Chez Leon. Traditionally Belgians have mussels with French fries and beer."+
      " This dish is known as ‘moules frites’. Chez Leon is everyone’s favourite joint for this classic Belgian dish."+
      "</p></div></div>"
    });

    //   addMarker({coords:{lat: 22.3193, lng: 114.1694},
    // content:'<h1>Hong Kong</h1>'});

    function addMarker(props){
    const marker = new google.maps.Marker({
      position:props.coords,
      map: map,
    });

    //     let contentString = 
    // '<div id="content">' +
    // '<div id="siteNotice">' +
    // "</div>" +
    // '<h1 id="firstHeading" class="firstHeading">Tsukiji</h1>' +
    // '<div id="bodyContent">' +
    // "</div>" +
    // "</div>";

    const infoWindow = new google.maps.InfoWindow({
        content: props.content,
    });

        marker.addListener("click", function(){
        infoWindow.open(map, marker);
    });
  }
}