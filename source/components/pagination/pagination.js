import scrollify from '../libraries/jquery.scrollify';
export const pagination = function() {
  $(function() {
		$.scrollify({
			section : '.section',
			sectionName : 'section-name',
			standardScrollElements: "#first, #guarantees, #services, #steps, #order, #calculator",
      overflowScroll: true,
      scrollSpeed: 300,
      before:function(i,panels) {
				var ref = panels[i].attr('data-section-name');      
				$('.pagination__list .active').removeClass('active');      
				$('.pagination__list').find('a[href=\'#' + ref + '\']').addClass('active');
			}
		});
  });
  
  $('.pagination__list a').on('click',$.scrollify.move);
}