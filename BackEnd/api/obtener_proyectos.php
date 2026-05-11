<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require "db.php";

$result = $conn->query("
    SELECT p.*, s.nombre AS status_nombre
    FROM projects p
    JOIN status_proyectos s
        ON p.status = s.id_status
");

if (!$result) {
    echo json_encode([
        "success" => false,
        "message" => "Error en la consulta SQL"
    ]);
    exit;
}

$projects = [];

while ($row = $result->fetch_assoc()) {
    $projects[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $projects
]);
