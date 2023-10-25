<?php
$ip = $_SERVER["REMOTE_ADDR"];


( $_POST["contact-name"] == "" ) ? $name = "No se ha enviado un nombre" : $name = $_POST["contact-name"];
( $_POST["contact-email"] == "" ) ? $email = "No se ha enviado un email" : $email = $_POST["contact-email"];
( $_POST["contact-phone"] == "" ) ? $phone = "No se ha enviado un telefono" : $phone = $_POST["contact-phone"];
( $_POST["contact-message"] == "" ) ? $message = "No se ha enviado un mensaje" : $message = $_POST["contact-message"];


$bodyemail = "IP: " . $ip . " <br>";
$bodyemail .= "Nombre: " . $name . " <br>";
$bodyemail .= "Email: " . $email . " <br>";
$bodyemail .= "Tel: " . $phone . " <br><br>";
$bodyemail .= "Mensaje: " . $message . " <br>";


// $recipe = "fitodac@gmail.com";
$recipe = "info@acompania.com.uy";

$subject = "Contacto desde <www.acompania.com.uy>";


// $headers = "" .
//            "Reply-To:" . $from . "\r\n" .
//            "X-Mailer: PHP/" . phpversion();
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n"; 
$headers .= "From: contacto@acompania.com.uy";


if( $_POST["sendform"] == 1 ){
  mail($recipe, $subject, utf8_decode($bodyemail), $headers);
}

