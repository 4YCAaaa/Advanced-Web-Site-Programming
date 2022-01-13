<?php
    include('database.php');
    if(loggedin()) 
	{
        header("location:Something.html");
    }
?>

<!DOCTYPE html>
<html>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<meta name=viewport content="width=device-width, initial-scale=1">
   	<link rel="stylesheet" type="text/css" href="LoginStyle.css">
   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   	<script src="js/script.js" type="text/javascript"></script>
	
<body>
   <form action="valid.php" method="POST">
   <?php error(); ?>

	<center>
	<div class="wrap">
		<div class="login">
	        <div class="title">Welcome</div>
			<form action="">
			<label for="">User</label>
            <input size="25" type="text" name="username" autocomplete="off" required>
			<br>
			<br><br><br>
			<label for="">Password</label>
            <input size="25" type="password" name="password" required >
			<br>
			<br>
			<br>
			<a href="newuser.php"> Create Account </a> </p> 
			<br>
            &nbsp;<input type="reset" value="Clear">&emsp;&emsp;
            &nbsp;&emsp;<input type="submit" value="Log In">
			
		<ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
		
    </center>
   </form>
</body>

