<?php 
    include('database.php');
    if(!loggedin())
	{
        header("location:login.php");
    }

	$username = $_SESSION['username'];
	
 	echo '<br> <a href="logout.php" align="right" title="Logout" style="color: red; text-decoration: none">&nbsp; Logout </a>';

 	echo '<a href="deleteaccount.php" align="right" title="delete account" style="color: blue; text-decoration: none">&nbsp; Delete Account </a>' ;

 	error();
	echo " <right id='user'> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	Welcome ".ucwords($username)."</right>";

	if(isset($_POST['addtask']))
	{
	    if(!empty($_POST['description']))
	    {
	        addTodoItem($_SESSION['username'], $_POST['description']);
	        header("Refresh:0");
	    }
	}
?>

<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/calendar.css">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="cc.css">

<body>

<div class="w3-row-padding w3-grayscale" style="margin-bottom:128px">
  <div class="w3-half" align="left">
    <form action="todo.php" method="POST">
		<?php spaces(30); ?>
		<input type="text" size="50" placeholder="Things" name="description" autocomplete="off"/>	
        <input type="submit" name="addtask" value="Add"/>
    </form>
  </div>
  <div class="w3-half"align="center">
   <table>
      <thead class="color">
        <tr>
          <th colspan="7" class="border-color">
            <h4 id="cal-year">2022</h4>
            <div>
              <i class="fas fa-caret-left icon"></i>
              <h3 id="cal-month">January</h3>
              <i class="fas fa-caret-right icon"></i>
            </div>
          </th>
        </tr>
        <tr>
          <th class="weekday border-color">Sun</th>
          <th class="weekday border-color">Mon</th>
          <th class="weekday border-color">Tue</th>
          <th class="weekday border-color">Wed</th>
          <th class="weekday border-color">Thu</th>
          <th class="weekday border-color">Fri</th>
          <th class="weekday border-color">Sat</th>
        </tr>
      </thead>
      <tbody id="table-body" class="border-color">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> 1</td>
          <td> 2</td>
        </tr>
        <tr>
          <td> 3</td>
          <td> 4</td>
          <td> 5</td>
          <td> 6</td>
          <td> 7</td>
		  <td> 8</td>
          <td> 9</td>
        </tr>
        <tr>
          <td>10</td>
          <td>11</td>
          <td>12</td>
		  <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
        </tr>
        <tr>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
        </tr>
        <tr>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
        </tr>
        <tr>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
</body>
</html>
