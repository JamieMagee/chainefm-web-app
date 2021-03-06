<?php

// check for form submission - if it doesn't exist then send back to contact form
if (!isset($_POST['save']) || $_POST['save'] != 'contact') {
    header('Location: contact2.php'); exit;
}
	
// get the posted data
$name = $_POST['contact_name'];
$message = $_POST['contact_message'];
	
// check that a name was entered
if (empty($name))
    $error = 'You must enter your name.';
// check that a message was entered
elseif (empty($message))
    $error = 'You must enter a message.';
		
// check if an error was found - if there was, send the user back to the form
if (isset($error)) {
    header('Location: contact.php?e='.urlencode($error)); exit;
}

$headers = "From: app@chainefm.com\r\n"; 
$headers .= "Reply-To: app@chainefm.com\r\n";

// write the email content
$email_content = "Name: $name\n";
$email_content .= "Message:\n\n$message";
	
// send the email
//ENTER YOUR INFORMATION BELOW FOR THE FORM TO WORK!
mail ('studio@chainefm.com', 'Chaine FM - Contact Form Submission', $email_content, $headers);
	
// send the user back to the form
header('Location: contact2?s='.urlencode('Thank you for your message.')); exit;

?>
