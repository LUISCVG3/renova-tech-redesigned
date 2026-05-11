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

$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$service = (int)($data['service'] ?? 0);
$description = $data['description'] ?? null;

if (!$name || !$email) {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
    exit;
}
$mysql = new mysqli('localhost', 'root', 'Main23C@ve', 'renova_tech');

if ($mysql->connect_error) {
    echo json_encode(["success" => false, "message" => "DB error"]);
    exit;
}

/* Buscar cliente existente */
$stmt = $mysql->prepare("SELECT id_cliente FROM clientes WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    /*verifica si el clinete existe*/
    $id_cliente = $row['id_cliente'];
} else {
    /* crear cliente si no existe */
    $stmt = $mysql->prepare("INSERT INTO clientes (nombre, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email);
    $stmt->execute();
    $id_cliente = $stmt->insert_id;
}

/* Inserta la solicitud junto con el cliente relacionadose mediante la primary key */
$stmt = $mysql->prepare("
    INSERT INTO solicitudes (id_cliente, service, descripcion)
    VALUES (?, ?, ?)
");

$stmt->bind_param("iss", $id_cliente, $service, $description);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => $stmt->error]);
}
