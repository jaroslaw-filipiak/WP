//import 'bootstrap'
import './sass/main.scss'
import './../node_modules/slick-carousel/slick/slick.scss'
import './../node_modules/aos/src/sass/aos.scss'

const $ = require('jquery')
const slick = require('slick-carousel')
const slicknav = require('slicknav/jquery.slicknav')
//const waypoints = require('././../node_modules/waypoints/lib/jquery.waypoints');
//const Parallax = require('parallax-js');
//const AOS = require('aos');

const logoMobile = require('./assets/logo.png');
const searchIcon = require('./assets/search.svg')

//AOS.init();

$('#menu').slicknav({
   duplicate: true,
   label: '',
   brand: `<img class="logo-mobile" src="${logoMobile}">`,
   init: function () {
      // $('a.slicknav_btn').append(`<img src="img/search.svg" alt="search">`)
   },
})

if (document.querySelector('.hero-slider')) {
   $('.hero-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      speed: 200,
      prevArrow: $('.hero-slider-nav-prev'),
      nextArrow: $('.hero-slider-nav-next'),
   })
}

const searchBox = `
<div class="searchBox"> 
   <img src="${searchIcon}" />
</div>`


$('.slicknav_menu').after(searchBox);

if (document.querySelector('.for-download-toogle')) {

   $.fn.extend({
      toggleText: function (a, b) {
         return this.text(this.text() == b ? a : b);
      }
   });


   $('.for-download-toogle').click(() => {
      $('.for-download-toogle-content').slideToggle(200, "linear");
      $('.for-download-toogle h4').toggleClass('minus-before')
      $('.for-download-toogle h4').toggleText('Rozwiń', 'Zwiń')


   })
}