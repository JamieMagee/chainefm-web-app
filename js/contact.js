$(document).ready(function () {

	var i = 0;
	
	$('#facebook').popover()
	$('#message').focus();

	$("#sms").click(function () {
		var uri = "sms:80818?body=CFM ";
		cleanUp(uri);
	});

	$("#email").click(function () {
		var uri = "mailto:studio@chainefm.com?body=";
		cleanUp(uri);
	});

	$("#twitter").click(function () {
		var uri = "https://twitter.com/intent/tweet?text=@ChaineFM "
		cleanUp(uri);		
	});

	$("#facebook").click(function () {
		if (i != 0) {
			$('#facebook').popover()
			$('#message').val('');
			i = 0;
			window.open("https://facebook.com/chainefm");
		} else {
			$('#facebook').popover()
			$('#message').select();
			i++;
		}
	});
	
});

function cleanUp(uri) {
	uri += $('#message').val();
	$('#message').val('');
	$('#message').focus();
	window.open(uri);
}