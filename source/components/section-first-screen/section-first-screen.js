import WOW from '../libraries/wow';
export const animate = function() {  
  $(window).on('load', function() {
    new WOW().init();
  });  
}