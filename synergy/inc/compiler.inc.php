<?php
	include "../css/less/lessc.inc.php";
 
	$less = new lessc("../css/import.less");
	file_put_contents("../css/compiled.styles.css", $less->parse(
		null,
		array()
	));
?>