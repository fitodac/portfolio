<?php
$ip = $_SERVER["REMOTE_ADDR"];


( $_POST["afiliation-name"] == "" ) ? $name = "No se ha enviado un nombre" : $name = $_POST["contact-name"];
( $_POST["afiliation-phone"] == "" ) ? $phone = "No se ha enviado un telefono" : $phone = $_POST["contact-phone"];


$bodyemail .= "IP: " . $ip . " <br>";
$bodyemail .= "Nombre: " . $name . " <br>";
$bodyemail .= "Tel: " . $phone . " <br><br>";


// $recipe = "fitodac@gmail.com";
$recipe = "info@acompania.com.uy";

$subject = "Solicitud de afiliación <www.acompania.com.uy>";


// $headers = "" .
//            "Reply-To:" . $from . "\r\n" .
//            "X-Mailer: PHP/" . phpversion();
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n"; 
$headers .= "From: contacto@acompania.com.uy";



mail($recipe, $subject, utf8_decode($bodyemail), $headers);

