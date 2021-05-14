let toggleNavStatus = false;

let toggleNav = function() {
     let getSidebar = document.querySelector(".nav-sidebar");
     let getSidebarUl = document.querySelector(".nav-sidebar ul");
     let getSidebarTitle = document.querySelector(".nav-sidebar span");
     let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

     if (toggleNavStatus === false) {
         getSidebarUl.style.visibility = "visible";
         getSidebar.style.width = "272px";
         getSidebarTitle.style.opacity = "0.4";

         let arrayLength = getSidebarLinks.length;
         for (let i = 0; i < arrayLength; i++) {
             getSidebarLinks[i].style.opacity = "1";
         }

         toggleNavStatus = true;
     }

     else if (toggleNavStatus === true) {
        getSidebar.style.width = "44px";
        getSidebarTitle.style.opacity = "1";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}
  
  
  
  function initMap() {

    const Japan = { lat: 35.6762, lng: 139.6503 };

    const map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 2,
      center: Japan,
    });

    addMarker({coords:{lat: 35.6655, lng: 139.7707},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Toyosu Fish Market</b></h1>' +
      '<h2><img src="Assets/images/toyosu.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Toyosu Market</b>, located in central Tokyo, is the largest wholesale fish and seafood market in the world."+
      "The market opens most mornings (except Sundays, holidays and some Wednesdays) at 3:00 a.m.</p></div></div>"
    });

    addMarker({coords:{lat: 19.3674, lng: -99.0970},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>La Nueva Viga Market</b></h1>' +
      '<h2><img src="Assets/images/mexico.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>La Nueva Viga Market</b>,is the largest seafood market in Mexico and the third largest in the world after the Fulton fish market in New York."+
      " It is located in Mexico City far inland from the coast.</p></div></div>"
    });

    addMarker({coords:{lat: -33.8730, lng: 151.1927},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Sydney Fish Market</b></h1>' +
      '<h2><img src="Assets/images/sydney.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Sydney Fish Market</b> incorporates a working fishing port, wholesale fish market,"+
      " fresh seafood retail market, a delicatessen, a sushi bar, a bakery, a gift shop, a"+
      "fruit and vegetable market, a florist, a new meat deli, a beverage outlet,"+
      " a seafood cooking school, indoor seating and an outdoor promenade for visitors. There"+
      "are daily wholesale auctions for Sydney's seafood retailers."+
      "Sydney Fish Market’s retailers are open every day of the year (except Christmas) from 7am until 4pm."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 51.5062, lng: 0.0126},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Billingsgate Fish Market</b></h1>' +
      '<h2><img src="Assets/images/billingsgate.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Billingsgate Fish Market</b>, is located in Canary Wharf in London. It is the United Kingdom's largest inland fish market."+
      " It takes its name from Billingsgate, a ward in the south-east corner of the City of London,"+
      ", where the riverside market was originally established. In its original location in the 19th century,"+
      " Billingsgate was the largest fish market in the world."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 53.5457, lng: 9.9520},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>The Fischmarkt Hamburg-Altona</b></h1>' +
      '<h2><img src="Assets/images/hamburg.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>The Fischmarkt Hamburg-Altona</b>,GmbH (FMH) develops and administrates the area of the fishing port in the Altona district of Hamburg, Germany."+
      "Approximately 36,000 tons of fresh fish are transferred yearly on the grounds of the fish market."+
      "The market includes 57 fishing and gastronomical businesses with 750 employees and annual sales of 280 million Euros altogether."+
      "About 14 percent of Germany’s fresh fish supply is being processed in Hamburg."+
      "Opening hours,<br>"+
      "Summer (April — October) Sundays 5:00 a.m. — 9:30 a.m.<br>"+
      "Winter (November — March): Sundays 7:00 a.m. — 9:30 a.m."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 35.0884, lng: 129.0252},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Busan Cooperative Fish Market</b></h1>' +
      '<h2><img src="Assets/images/busan.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Busan Cooperative Fish Market</b>, or BCFM, is the largest fish market in South Korea."+
      " It adjoins the South Harbor in Busan. More than 30% of the country's fish production passes through the market."+
      "Hours of operation are 0600-1500"+
      "</p></div></div>"
  });

    addMarker({coords:{lat: 57.7019, lng: 11.9573},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Feskekôrka Fish Market</b></h1>' +
      '<h2><img src="Assets/images/fesk.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Feskekôrka Fish Market</b>is an indoor fish market in Gothenburg, Sweden, which got its name from the"+
      "building's resemblance to a Neo-gothic church. It opened on 1 November 1874, and was drawn by the city architect Victor von Gegerfelt."+
      "The Feskekôrka is currently undergoing a thorough refurbishment."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 40.8027, lng: -73.8752},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Fulton Fish Market</b></h1>' +
      '<h2><img src="Assets/images/fulton.jpg" alt="Girl in a jacket" width="310" height="250"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>The Fulton Fish Market</b> is a fish market in Hunts Point, a section of the New York City borough of the Bronx."+
      "it handles millions of pounds of seafood daily, with annual sales exceeding $1 billion, and is second in size only to Tokyo's Toyosu fish market.<br>"+
      "Hours of operation are 2am	–	7am on weekdays and closed on the weekends"+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 22.3193, lng: 114.1694},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Aberdeen Floating Village</b></h1>' +
      '<h2><img src="Assets/images/aberdeen.jpg" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>The Aberdeen floating village</b> since the 19th century, Aberdeen emerged as one of the most important fishing ports in Hong Kong."+
      "Prior to the 1950s, salt fish was the major catch sold at Aberdeen."+
      "Today, Aberdeen is the only fishing port in the Southern District in Hong Kong. It continues to play"+
      "an important role in the fishing industry and the port accounts for over one-third of the total catch of fish in Hong Kong."+
      "</p></div></div>"
    });

    addMarker({coords:{lat: 25.0667, lng: 121.5367},content:
      '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
      '<h1 id="firstHeading" class="firstHeading"><b>Taipei Fish Market</b></h1>' +
      '<h2><img src="Assets/images/taipei.jfif" alt="Girl in a jacket" width="270" height="260"></h2>'+
      '<div id="bodyContent">' +
      "<p><b>Taipei Fish Market</b>, was originally a traditional fish market. But in recent years,"+
      " some parts of it have been developed into a more modern fish market by Mitsui Food and Beverage Enterprise Group."+
      "The fish market is located in Zhongshan District, Taipei, Taiwan."+
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


// function initMap() {

//   const Japan = { lat: 35.6762, lng: 139.6503 };

//   const map = new google.maps.Map(document.getElementById("map"),
//   {
//     zoom: 2,
//     center: Japan,
//   });

//   addMarker({coords:{lat: 35.6655, lng: 139.7707}});
//   addMarker({coords:{lat: 19.3674, lng: -99.0970}});
//   addMarker({coords:{lat: -33.8730, lng: 151.1927}});
//   addMarker({coords:{lat: 51.5062, lng: 0.0126}});
//   addMarker({coords:{lat: 53.5457, lng: 9.9520}});
//   addMarker({coords:{lat: 35.0884, lng: 129.0252}});
//   addMarker({coords:{lat: 57.7019, lng: 11.9573}});
//   addMarker({coords:{lat: 40.8027, lng: -73.8752}});
//   addMarker({coords:{lat: 22.3193, lng: 114.1694}});
//   addMarker({coords:{lat: 25.0667, lng: 121.5367}});
//   //   addMarker({coords:{lat: 22.3193, lng: 114.1694},
//   // content:'<h1>Hong Kong</h1>'});

//   function addMarker(props){
//   const marker = new google.maps.Marker({
//     position:props.coords,
//     map: map,
//   });

//       let contentString = 
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