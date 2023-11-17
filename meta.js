
window.onload = (event) => {
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    breakpoints: {
      // when window width is >= 320px
      320: {
        centeredSlides: false,
         freeMode: {
          enabled: true,
           sticky: false,
          momentumVelocityRatio: 1.6,
          momentumRatio: 1.1,
          momentumBounce: true,
          },
      },
      // when window width is >= 480px
      480: {
        freeMode: false,
      }
     },
    cssMode: false,
    centeredSlides: true,
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    hashNavigation: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: false,
    mousewheel: true,
    on: {
      slideChange: function () {
        $('.swiper-cover').fadeTo(0.0) 
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    resistance: false,
    simulateTouch: false,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 700,
    zoom: false,
  });


$('#fullscreen').click( function() { 

	console.log("click!");
	toggleFullScreen(document.body);

});
  
};

// Set up Fullscreen


// $('#fullscreen').click( function() { 

// 	console.log("click!");
// 	toggleFullScreen(document.body);

// });

function cancelFullScreen() {
    var el = document;
    var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen||el.webkitExitFullscreen;
    if (requestMethod) { // cancel full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    return false
}

function toggleFullScreen(el) {
    if (!el) {
        el = document.body; // Make the body go full screen.
    }
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
        cancelFullScreen();
    } else {
        requestFullScreen(el);
    }
    return false;
}

// Set up Sections

let currentSection;

function alignNav() {

		if($('body').hasClass('journal')) {
    
      currentSection = "journal";
      console.log("currentSection = "+currentSection);
			$('.nav-menu-inner').css("transform","translate3d(0px, 33.33333%, 0px)"); 
      $('.nav-menu-link.journal').addClass("current");

    } else if($('body').hasClass('library')) {
  	
			currentSection = "library";
      console.log("currentSection = "+currentSection);
  		$('.nav-menu-inner').css("transform","translate3d(0px, -33.33333%, 0px)"); 
      $('.nav-menu-link.library').addClass("current");

     } else if($('body').hasClass('studio')) {
  	
			currentSection = "studio";
      console.log("currentSection = "+currentSection);
  		$('.nav-menu-inner').css("transform","translate3d(0px, 0px, 0px)"); 
      $('.nav-menu-link.studio').addClass("current");
 
 
 } else { console.log("Nah"); }
  
}

// On DOM Load

window.addEventListener('DOMContentLoaded', (event) => {


  console.log('DOM fully loaded and parsed');
  
  alignNav();
  
  $(".project-tile-logo").click(function() {
    $(this).siblings(".tile-link").children(".grid-card-link")[0].click();
    console.log("Click!");
    });
    
    // Bind clicks on Menu Close
  $( "#nav-bg" ).click(function() {
    $( "#nav-menu" ).click();
  });


});