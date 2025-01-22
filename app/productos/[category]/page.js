import { productos } from "../../mock/productos";
import ButtonBack from "../../components/common/button/buttonBack";

// Metadatos adaptados para Farmacia Veracierto
export const metadata = {
    title: "Farmacia Veracierto | Categorías de Productos",
    description: "Explora nuestras categorías de productos farmacéuticos: analgésicos, suplementos, productos de higiene, anticonceptivos y más.",
    keywords: "Farmacia, analgésicos, suplementos, higiene, anticonceptivos, productos farmacéuticos, salud, bienestar",
};

export default function CategoryPage({ params }) {
    const { category } = params;
    const filteredProducts = productos.filter(producto => producto.category === category);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center capitalize">
                {category === "analgesicos"
                    ? "Analgésicos"
                    : category === "suplementos"
                    ? "Suplementos"
                    : category === "higiene"
                    ? "Productos de Higiene"
                    : "Otros Productos"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(producto => (
                        <div key={producto.id} className="border rounded-lg p-4 shadow-md">
                            <h2 className="text-xl font-semibold">{producto.title}</h2>
                            <p className="text-gray-600">{producto.description}</p>
                            <p className="text-lg font-bold text-blue-500">${producto.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No hay productos disponibles en esta categoría.
                    </p>
                )}
            </div>
            <ButtonBack />
        </div>
    );
}
