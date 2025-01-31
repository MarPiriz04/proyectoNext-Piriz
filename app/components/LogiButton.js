"use client";

import { loginWithGoogle, logout } from "../api/auth";
import { useState } from "react";

export default function LoginButton() {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        const loggedUser = await loginWithGoogle();
        setUser(loggedUser);
    };

    const handleLogout = async () => {
        await logout();
        setUser(null);
    };

    return user ? (
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
            Cerrar sesión
        </button>
    ) : (
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
            Iniciar sesión con Google
        </button>
    );
}
