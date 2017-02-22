$(document).ready(function(){
  
  var $slider = $(".Modern-Slider").slick({ 
    infinite: true,
    autoplay:true,
    autoplaySpeed:5000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="arrow PrevArrow"></button>',
    nextArrow:'<button class="arrow NextArrow"></button>', 
  });


var backs = ['blue', 'yellow', 'red'];
var logos = ['orig', 'invert'];
var menus = ['orig', 'invert'];

$slider.on('afterChange', function(event, slick, slide) {
  $('body').css('background-image', 'url(' + 'img/back-' + backs[slide] + '.png' + ')');
  $('.logo__link').css('background-image', 'url(' + 'img/logo-' + logos[slide] + '.png' + ')');
  $('.menu__link').css('background-image', 'url(' + 'img/menu-' + menus[slide] +'.png' + ')');
});

});

var sliderWrap = document.querySelector (".Modern-Slider")