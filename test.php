<html>
	<body>
<?php
$host = 'serverwebtest.database.windows.net';
$username = 'testadmin@serverwebtest.database.windows.net';
$password = 'Eduard26';

//Establishes the connection
$conn = mysqli_init();
mysqli_connect($conn, $host, $username, $password);
if (mysqli_connect_errno($conn)) {
die('Failed to connect to MySQL: '.mysqli_connect_error());
}
echo 'Conectat cu succes';

$sql='select * from studenti';
$result=mysql_query($sql);
while($linie=mysql_fetch_array($result)){
echo  '<tr>
				
					<td>$linie[nume]</td>
					<td>$linie[prenume]</td>
          <td>$linie[email]</td>
	     </tr>';
}	

//Close the connection
mysqli_close($conn);

?>
</body>
</html>
