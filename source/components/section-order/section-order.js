import maskedInput from '../libraries/jquery.maskedinput';
export const callback = function() {
  $(window).scroll(function() {      
    if (($(this).scrollTop() > $('.section-services').offset().top - $('.section-services').height()/2)) {      
      $('.section-services__img').addClass('visible');
    }  
  });

  $(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
  });

  $('#formOrder').submit(function(e) { 
    e.preventDefault();

    if ($(this)[0].phone.value == '' ) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "callback.php",
      data: $(this).serialize()
    }).done(function() {
           
      $('#formOrder').trigger('reset');
      $('.section-order__wrap').fadeOut();
      $('.done-order').fadeIn();
    });
    return false;
  });
}