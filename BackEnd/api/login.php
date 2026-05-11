<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "JSON inválido"]);
    exit;
}

$email = $data['email'] ?? null;
$mypassword = $data['password'] ?? null;

$mysql = new mysqli('localhost', 'root', 'Main23C@ve', 'renova_tech');

$query = $mysql->prepare("SELECT user, password FROM users WHERE user = ? AND password = ?");
$query->bind_param("ss", $email, $mypassword);
$query->execute();

$result = $query->get_result();
