"use client";

import { auth, googleProvider } from "../lib/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

// Iniciar sesión con Google
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Usuario autenticado:", result.user);
        return result.user;
    } catch (error) {
        console.error("Error en la autenticación:", error);
    }
}

// Cerrar sesión
export async function logout() {
    try {
        await signOut(auth);
        console.log("Sesión cerrada");
    } catch (error) {
        console.error("Error cerrando sesión:", error);
    }
}
