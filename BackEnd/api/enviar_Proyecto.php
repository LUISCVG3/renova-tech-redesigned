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

$name = $data["nombre"] ?? null;
$email = $data["email"] ?? null;
$organization = $data["empresa"] ?? null;
$type_service = $data["tipo_Servicio"] ?? null;
$description = $data["descripción"] ?? null;
$range_presupuest = $data["presupuesto"] ?? null;
$place_time = $data["plazo_Estimado"] ?? null;
$requery_tecs = $data["requerimientosTecnico"] ?? null;

$mysql = new mysqli('localhost', 'root', 'Main23C@ve', 'renova_tech');

if ($mysql->connect_error) {
    echo json_encode(["success" => false, "message" => "DB error"]);
    exit;
}

$stmt = $mysql->prepare("INSERT INTO solicitud_proyectos (name, email, organization, type_service, description, range_presupuest, place_time, requery_tecs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$requery_tecs_json = json_encode($requery_tecs);

$stmt->bind_param(
    "ssssssss",
    $name,
    $email,
    $organization,
    $type_service,
    $description,
    $range_presupuest,
    $place_time,
    $requery_tecs_json
);
if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => $stmt->error]);
}
