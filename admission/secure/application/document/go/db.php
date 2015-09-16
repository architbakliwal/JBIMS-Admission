<?php

	$hostname_Connection = "127.0.0.1";
    $database_Connection = "jbims_admission";
    $username_Connection = "root";
    $password_Connection = "";

    $connection = mysql_connect($hostname_Connection, $username_Connection, $password_Connection) or die (mysql_error());
    $database = mysql_select_db ($database_Connection, $connection) or die (mysql_error());		

    $applicationid = 'JB2015000562';

?>