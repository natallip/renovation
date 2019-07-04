export const burger = function () {
  const $burger = $('.burger'),
        $nav = $('.navigation'),
        $page = $('#fullpage');
  $burger.on('click', function() {
    $(this).toggleClass('active');
    $nav.toggleClass('open');
    $page.toggleClass('no-scroll');
  }); 
}