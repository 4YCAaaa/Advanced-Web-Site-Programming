<?php
    include 'database.php';
	
    $my_username = $_POST['username']; 
    $my_password = $_POST['password']; 

    isvalid($my_username, $my_password); 
?>