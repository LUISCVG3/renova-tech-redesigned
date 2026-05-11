<?php
$host = "localhost";
$user = "root";
$password = "Main23C@ve";
$db = "renova_tech";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    header("Content-Type: application/json");
    die(json_encode([
        "success" => false,
        "message" => "Error de conexión a la base de datos"
    ]));
}