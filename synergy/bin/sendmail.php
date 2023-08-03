<?php
if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'No name entered';}
if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {
	$phone = stripslashes(strip_tags($_POST['phone']));
} else {$phone = 'No phone entered';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['comment'])) && (strlen(trim($_POST['comment'])) > 0)) {
	$comment = stripslashes(strip_tags($_POST['comment']));
} else {$comment = 'No comment entered';}
ob_start();
?>
<html>
<head>
</head>
<body style="background:#EEE; color:#666; font:13px Arial, helvetica, sans-serif;">
    <div style="background:#FFF; width:700px; margin:0 auto; padding:21px;">
        <div style="margin-bottom:35px; display:block">
            <span style="display:block"><?php echo $comment; ?></span>
        </div>
        <div style="margin-bottom:7px; display:block;">
            <span><b>name:</b></span>
            <span><?php echo $name; ?></span>
        </div>
        <div style="margin-bottom:7px; display:block;">
            <span><b>phone:</b></span>
            <span><?php echo $phone; ?></span>
        </div>
        <div style="margin-bottom:7px; display:block;">
            <span><b>email:</b></span>
            <span><?php echo $email; ?></span>
        </div>
    </div>
</body>
</html>
<?php
$body = ob_get_contents();

$to = 'fitodac@gmail.com';
$email = 'fitodac@gmail.com';
$fromaddress = "fitodac@gmail.com";
$fromname = "Online Contact";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = $email;
$mail->FromName = "Contact Form";
$mail->AddAddress("fitodac@gmail.com","Name 1");
//$mail->AddAddress("another_address@example.com","Name 2");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Contact from the web";
$mail->Body     =  $body;
$mail->AltBody  =  "This is the text-only body";

if(!$mail->Send()) {
	$recipient = 'fitodac@gmail.com';
	$subject = 'Contact form failed';
	$content = $body;
  mail($recipient, $subject, $content, "From: fitodac@gmail.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>
