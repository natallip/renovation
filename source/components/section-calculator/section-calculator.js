export const calculator = function() {
  const form = $('#calculator'),
        btnNext = $('#calculator #btnNext'),
        btnSubmit = $('#calculator #btnSubmit'),        
        fieldsets = form.find('.calc');        
  let index = 0;
  
  function toggleFieldset(value) {
    if (value) {
      if (index < fieldsets.length-2) {
        $(fieldsets[index]).removeClass('active');
        $(fieldsets[index]).next().addClass('active');
        index++;
      } else {
        $(fieldsets[index]).removeClass('active');
        $(fieldsets[index]).next().addClass('active');
        btnNext.hide();
        btnSubmit.show();
      }      
    } 
  }
  function toggleSteps() {
    const step = $('.steps__item')[index];
    $(step).addClass('active');    
  }
  function verificationRadio() {
    const idFieldset = fieldsets[index].id;
    const val = $(`#${idFieldset} :input:checked`).val();
    toggleFieldset(val);    
  }
  function verificationInput() {
    const idFieldset = fieldsets[index].id;
    const val = $(`#${idFieldset} :input[type=number]`).val();
    if (val > 0) {
      toggleFieldset(val);  
    }      
  }
  function verificationRadioAndInput() {
    const idFieldset = fieldsets[index].id;
    const val = $(`#${idFieldset} :input:checked`).val();
    const input = $(`#${idFieldset} :input[type=number]`);
       
    if (val === 'yes') {        
      if (input.val() > 0) {
        verificationInput();
      }        
    } else {        
      if (input.val() == '') {
        toggleFieldset(val);
      }        
    }        
  }
  function verification() {
    if (index === 0 || index === 1 || index === 4) {
      verificationRadio();      
    } else if (index === 3) {
      verificationRadioAndInput()
    } else {
      verificationInput();
    }
    toggleSteps();
  }
  btnNext.on('click', verification);

  $('#calculator').submit(function(e) { 
    e.preventDefault();

    if ($(this)[0].name.value == '' || $(this)[0].phone.value == '') {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('#calculator').trigger('reset');
      $('.section-calculator__wrap').fadeOut();
      $('.done').fadeIn();
    });    
  });
}