"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ButtonBack = () => {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        setCanGoBack(window.history.length > 1);
    }, []);

    if (!canGoBack) return null;

    return (
        <button
            onClick={() => router.back()}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-200"
            aria-label="Regresar"
        >
            ⬅️ Regresar
        </button>
    );
};

export default ButtonBack;
