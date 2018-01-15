<?php
// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:serverwebtest.database.windows.net,1433; Database = webtest", "testadmin", "{your_password_here}");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "testadmin@serverwebtest", "pwd" => "{your_password_here}", "Database" => "webtest", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:serverwebtest.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

?>
