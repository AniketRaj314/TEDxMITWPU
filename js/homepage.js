new WOW().init();
function myMap()
{
  myCenter=new google.maps.LatLng(18.5184, 73.8147);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

function submitForm(){
  $("#formSub").reset();
  return false;
}


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// CAROUSEL JS
//_______________________________________________________________
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}



// Keyboard Events
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

var flg = 1;

$(window).scroll(function(){
  $('.about_pic').each(function(){
    if(isScrolledIntoView($(this))){
      $('#myNavbar a').removeClass("active");
      $('#a_about').addClass("active");  
    }
  });
  $('.location').each(function(){
    if(isScrolledIntoView($(this))){
      $('#myNavbar a').removeClass("active");
      $('#a_contact').addClass("active");
    }
  });
  $('#theme').each(function(){
    if(isScrolledIntoView($(this))){
      $('#myNavbar a').removeClass("active");
      $('#a_home').addClass("active");
    }
  });
  $('.speaker').each(function(){
    if(isScrolledIntoView($(this))){
      $('#myNavbar a').removeClass("active");
      $('#a_speakers').addClass("active").delay(1000);
            if(flg == 1){
        for(var i = 1; i < 4; i++){
          moveToSelected('prev');
        }
        flg = 0;
      }
    }
  });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('#carousel div').click(function() {
  moveToSelected($(this));
});



//____________________________________________________________________