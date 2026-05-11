const API = "http://localhost:8000/api";

export async function crearSolicitud(data) {
  try {
    const response = await fetch(`${API}/crear_solicitud.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Error en el servidor");
    }

    return result;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

export async function eliminarProyecto(data) {
  try {
    const response = await fetch(`${API}/eliminar_proyecto.php`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

export async function ObtenerProyectos() {
  try {
    const response = await fetch(`${API}/obtener_proyectos.php`);

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const datos = await response.json();
    return datos;
  } catch (e) {
    console.error("Error obteniendo proyectos:", e);
    return { success: false, data: [] };
  }
}

export async function EnviarProyecto(data) {
  try {
    const response = await fetch(`${API}/enviar_Proyecto.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Error en el servidor");
    }

    return result;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
