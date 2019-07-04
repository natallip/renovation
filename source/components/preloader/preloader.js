export const preloader= function () {
	$('#fullpage').addClass('no-scroll');
	$(window).on('load', function() {
		$('#preloader').fadeOut('slow');
		$('#fullpage').removeClass('no-scroll');
	});
};