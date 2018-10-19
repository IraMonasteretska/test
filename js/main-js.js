$(document).ready(function() {

	$('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.top-menu').slideToggle();
	});
	
});