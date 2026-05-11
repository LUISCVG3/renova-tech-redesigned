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

$mysql = new mysqli('localhost', 'root', 'Main23C@ve', 'renova_tech');

if ($mysql->connect_error) {
    echo json_encode(["success" => false, "message" => "DB error"]);
    exit;
}

$id = $data['id'] ?? null;
$description = $data['description'] ?? null;

if (!$id || !$description) {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
    exit;
}

$stmt = $mysql->prepare("UPDATE solicitudes SET descripcion = ? WHERE id_solicitud = ?");
$stmt->bind_param("si", $description, $id);

echo json_encode(["success" => $stmt->execute()]);
if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => $stmt->error]);
}
