<?php 
    include('database.php');
    if(loggedin()) 
	{
		header("location:Something.html");
    }
?>

<!DOCTYPE html>
<html>
	<link rel="stylesheet" type="text/css" href="LoginStyle.css">
	
<body>
		<?php error(); ?>

        <p style="white-space:pre" >  Already have an account ? <a href="login.php" title="Login" style="color:red; text-decoration: none"> - Login Here - </a> </p>
        <form action="adduser.php" method="POST">
        <center>
		
	<div class="wrap">
		<div class="login">
			<div class="title">Create</div>
			<pre> User Name </pre>
			<input type="text" name="username" placeholder="Name" autocomplete="off">

            <pre> Password </pre> </td>
            <input type="password" required name="password1" placeholder="*******">

            <pre>Confirm Your Password </pre>
            <input type="password" required name="password2" placeholder=" *******">
			
			<br>
            <input type="reset" value="Reset">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="submit" value="Submit">
            </center>
        </form>
    </body>
</html>