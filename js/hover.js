$(document).ready(function () {

	$('li:not(.active)').hover(
		   function () {
			 $(this).toggleClass('active');
		   }, 
		  function () {
			  $(this).toggleClass('active');
		   }
	);

});