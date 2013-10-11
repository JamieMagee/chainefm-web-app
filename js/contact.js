$(document).ready(function () {

	var i = 0;
	
	$('#facebook-btn').popover()
	$('#message-btn').focus();

	$("#sms-btn").click(function () {
		var uri = "sms:80818?body=CFM ";
		cleanUp(uri);
	});

	$("#email-btn").click(function () {
		var uri = "mailto:studio@chainefm.com?body=";
		cleanUp(uri);
	});

	$("#twitter-btn").click(function () {
		var uri = "https://twitter.com/intent/tweet?text=@ChaineFM "
		cleanUp(uri);		
	});

	$("#facebook-btn").click(function () {
		if (i != 0) {
			$('#facebook-btn').popover()
			$('#message').val('');
			i = 0;
			window.open("https://facebook.com/chainefm");
		} else {
			$('#facebook-btn').popover()
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