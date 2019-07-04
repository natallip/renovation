export const moveUp = function() {
  $('#toTop').on('click', function() {  
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  })
}