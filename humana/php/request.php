<?php

function sendMessage(){
  $ip = $_SERVER["REMOTE_ADDR"];


  ( $_POST["request-name"] == "" ) ? $name = "No se ha enviado un nombre" : $name = $_POST["request-name"];
  ( $_POST["request-lastname"] == "" ) ? $lastname = "No se ha enviado un apellido" : $lastname = $_POST["request-lastname"];
  ( $_POST["request-address"] == "" ) ? $address = "No se ha enviado una dirección" : $address = $_POST["request-address"];
  ( $_POST["request-city"] == "" ) ? $city = "No se ha enviado una ciudad" : $city = $_POST["request-city"];
  ( $_POST["request-state"] == "" ) ? $state = "No se ha enviado un departamento" : $state = $_POST["request-state"];
  ( $_POST["request-email"] == "" ) ? $email = "No se ha enviado un email" : $email = $_POST["request-email"];
  ( $_POST["request-phone"] == "" ) ? $phone = "No se ha enviado un telefono" : $phone = $_POST["request-phone"];
  ( $_POST["request-title"] == "" ) ? $title = "No se ha enviado un telefono" : $title = $_POST["request-title"];
  ( $_POST["request-message"] == "" ) ? $message = "No hay notas adicionales" : $message = $_POST["request-message"];


  $bodyemail .= "IP: " . $ip . " <br>";
  $bodyemail .= "Nombre: " . $name . " <br>";
  $bodyemail .= "Apellido: " . $lastname . " <br><br>";
  $bodyemail .= "Dirección: " . $address . " <br>";
  $bodyemail .= "Ciudad: " . $city . " <br>";
  $bodyemail .= "Departamento: " . $state . " <br><br>";
  $bodyemail .= "Email: " . $email . " <br>";
  $bodyemail .= "Tel: " . $phone . " <br><br>";
  $bodyemail .= "Necesito el servicio para: " . $title . " <br><br>";
  $bodyemail .= "Mensaje: " . $message . " <br><br>";


  // $recipe = "fitodac@gmail.com";
  $recipe = "info@humana.com.uy";

  $subject = "Solicitud desde <www.humana.com.uy>";


  // $headers = "" .
  //            "Reply-To:" . $from . "\r\n" .
  //            "X-Mailer: PHP/" . phpversion();
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n"; 
  $headers .= "From: info@humana.com.uy";



  mail($recipe, $subject, utf8_decode($bodyemail), $headers);

}




if( $_SERVER['REQUEST_METHOD'] === 'POST' ){
  sendMessage();
  die();
}else{
  die();
}




