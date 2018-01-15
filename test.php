<?php
$servername = "serverwebtest.database.windows.net";
$username = "testadmin";
$password = "Admintest18";

// Create connection
$conn = mssql_connect($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{ 
    echo "Connected successfully";
}


?>
