$(document).ready(function(){
    $('.customer').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="src/leftarrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="src/rightarrow.svg"></button>',
      });

  });

  document.getElementById("topnav__right__btn").addEventListener("click", function() {
    var topnavcolumn = document.getElementById("topnav-column");

    // Toggle the display style
    if (topnavcolumn.style.display === "none" || topnavcolumn.style.display === "") {
        topnavcolumn.style.display = "flex";        
    } else {
        topnavcolumn.style.display = "none";
    }
    });
