import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parsear los datos recibidos en la solicitud
        const formData = await request.json();
        const { name, message } = formData;

        // Validar que los campos requeridos existan
        if (!name || !message) {
            return NextResponse.json(
                { error: "El nombre y el mensaje son obligatorios." },
                { status: 400 } // Solicitud incorrecta
            );
        }

        // Responder con un mensaje personalizado
        return NextResponse.json({
            success: true,
            message: `Hello, world! ${name} ${message}`,
        });
    } catch (error) {
        // Manejo de errores en caso de que falle el parseo o la lógica
        console.error("Error en el endpoint POST:", error);
        return NextResponse.json(
            { error: "Hubo un problema al procesar tu solicitud." },
            { status: 500 } // Error interno del servidor
        );
    }
}
