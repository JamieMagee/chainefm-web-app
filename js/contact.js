$(document).ready(function () {

	var i = 0;

	$("#sms").click(function () {
		var uri = "sms:80818?body=CFM ";
		uri += $('#message').val();
		$('#message').val('');
		window.open(uri);
	});

	$("#email").click(function () {
		var uri = "mailto:studio@chainefm.com?body=";
		uri += $('#message').val();
		$('#message').val('');
		window.open(uri);
	});

	$("#twitter").click(function () {
		var uri = "https://twitter.com/intent/tweet?text=@ChaineFM "
		uri += $('#message').val();
		$('#message').val('');
		window.open(uri);
	});

	$("#facebook").click(function () {
		i++;
		if (i == 2) {
			$('#message').val('');
			i = 0;
			window.open("https://facebook.com/chainefm");
		} else {
			alert('Facebook does not all direct posting to a wall\r\nPlease copy to clipboard and click again to open Facebook')
		}
	});

});