<?php
$host = 'serverwebtest.database.windows.net';
$username = 'testadmin@serverwebtest.database.windows.net';
$password = 'Admintest18';

//Establishes the connection
$conn = mysqli_init();
mysqli_connect($conn, $host, $username, $password);
if (mysqli_connect_errno($conn)) {
die('Failed to connect to MySQL: '.mysqli_connect_error());
}
echo 'Conectat cu succes';

switch($_REQUEST[op]){
case "a":
	echo<<<FORMULAR
		<form method="POST">
			Nume:<input type="text" name="nume"><br>
      Prenume:<input type="text" name="prenume"><br>
			Email:<input type="text" name="email"><br>
      <input type="hidden" name="op" value="i">
      <input type="submit" value="Trimite">
    </form>
FORMULAR;
			break;
			case "i":
				$sql="inset into webtest values(\"$_POST[nume]\",\"$_POST[prenume]\",\"$POST[email]\");";
				mysql_query($sql) or die("Nu pot agauga!");
				echo "Am agaugat!"<br><a href="?op">Vizualizeaza</a>
break;
default:
				$sql="select * from webtest";
				$result=mysql_query($sql);
echo "<table border="1">
        <tr>
          <td>Nr.</td>
          <td>Nume</td>
          <td>Prenume</td>
          <td>Email</td>
        </tr>";
				$contor=1;
				while($linie=mysql_fetch_array($result)){
  echo "<tr>
					<td>$contor</td>
					<td>$linie[nume]</td>
					<td>$linie[prenume]</td>
          <td>$linie[email]</td>
	      </tr>";
$contor++;
}	
echo"</table><a href="?op=a">Adaugare</a>";
break;
}

//Close the connection
mysqli_close($conn);

?>
