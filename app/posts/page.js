import Link from 'next/link';

const getPosts = async () => {
    try {
        const res = await fetch('https://fastapiproject-1-eziw.onrender.com/blue', {
            cache: 'no-store', // Solicitud basada en la petición
            next: {
                revalidate: 10, // Revalidar cada 10 segundos
            },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }
};

const Posts = async () => {
    try {
        const data = await getPosts();

        return (
            <div className="p-6 max-w-xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Posts</h1>
                <ul className="bg-gray-100 p-4 rounded shadow-md">
                    <li className="text-lg">
                        <strong>Moneda:</strong> {data.currency}
                    </li>
                    <li className="text-lg">
                        <strong>Compra:</strong> {data.compra}
                    </li>
                    <li className="text-lg">
                        <strong>Venta:</strong> {data.venta}
                    </li>
                </ul>
                <div className="mt-4 text-center">
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Regresar al inicio</a>
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="p-6 max-w-xl mx-auto text-center">
                <h1 className="text-3xl font-bold mb-4 text-red-600">Error</h1>
                <p className="text-lg text-gray-700">No se pudieron cargar los datos. Intenta nuevamente más tarde.</p>
                <div className="mt-4">
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Regresar al inicio</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default Posts;
