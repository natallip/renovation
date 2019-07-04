require('../OwlCarousel2-2.3.4/dist/owl.carousel.min.js');

export const sliderWorks = function () {  
  $('#slider-works').owlCarousel({          
    loop: true,  
    margin:20,
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      768:{
        items:2,
        margin:20,
        dots: false,
        nav: true
      },
      1200:{
        items:3,
        margin:20,
        dots: false,
        nav: true
      }
    }
  })  
}