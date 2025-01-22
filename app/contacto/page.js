'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState(null); // Para mostrar mensajes de éxito o error
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        try {
            const response = await fetch(`/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                setFeedback({ type: 'success', message: '¡Mensaje enviado con éxito!' });
                setForm({ name: '', email: '', message: '' });
            } else {
                setFeedback({ type: 'error', message: data.error || 'Algo salió mal. Intenta nuevamente.' });
            }
        } catch (error) {
            setFeedback({ type: 'error', message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
            {feedback && (
                <p
                    className={`text-center font-semibold mb-4 ${
                        feedback.type === 'success' ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                    {feedback.message}
                </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-lg font-medium">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">
                        Correo Electrónico:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-medium">
                        Mensaje:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                    />
                </div>
                <button
                    type="submit"
                    className={`mt-4 ${
                        isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white font-bold py-2 px-4 rounded`}
                    disabled={isSubmitting}
                    aria-label="Enviar"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    aria-label="Volver"
                >
                    Volver
                </button>
            </form>
        </main>
    );
}
