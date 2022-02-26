//Magnific Popup
$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type: 'image',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade', //The actual animation
    overflowY: 'hidden',
    fixedContentPos: true,
    fixedBgPos: true,
    callbacks: {
    close: function() {
      $.each(this.items, function( index, value ) {
        if (value.el) {
          $(value.el[0]).addClass('tse-remove-border');
        } else {
          $(value).removeClass('tse-remove-border');
        }
      });
    },
    },
  });
});
$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 500,
    preloader: false,
    overflowY: 'hidden',
    fixedContentPos: true,
    fixedBgPos: true,
    callbacks: {
    close: function() {
      $(this.ev).addClass('tse-remove-border');
    },
  },
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0' // URL that will be set as a source for iframe.
        }
      },
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });
});


$(document).ready(function(){
  $('.oom-slider').slick({
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  dots: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
$(document).ready(function(){
$('.im-slider').slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  dots: true,
  slidesToScroll: 3
  
});
});

// sticky button

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.menu').fadeIn();
  } else {
    $('.menu').fadeOut();
  }
});
$(document).ready(function(){
  $(".menu-toggler").click(function() {  
    $('.menu ul').toggleClass("active");
  });
});