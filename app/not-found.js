'use client'
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 via-yellow-300 to-pink-300">
            <h1 className="text-8xl font-extrabold text-white drop-shadow-md animate-bounce">
                404 😵
            </h1>
            <p className="text-2xl mt-4 text-white font-semibold">
                ¡Oops! No pudimos encontrar esa página.
            </p>
            <button
                onClick={() => router.back()}
                className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition duration-300"
            >
                🚀 Regresar a la página principal
            </button>
            <img
                src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"
                alt="Gif divertido"
                className="mt-8 w-60 rounded-xl shadow-md"
            />
        </div>
    );
};

export default NotFoundPage;
