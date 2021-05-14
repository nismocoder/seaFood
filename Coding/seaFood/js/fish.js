var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.display === "block") {
      content2.style.display = "none";
    } else {
      content2.style.display = "block";
    }
  });
}

// function darkMode() {
//   var element = document.getElementsByClassName("content");
//   element.classList.toggle("dark-mode");
// }

function darkMode() {
  var element = document.getElementsByClassName('content');
  // var element = document.querySelector("content");
  // element.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-mode");
}



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