import Image from "next/image";
import Menu from "./menu";

export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para empresa de farmacéuticos",
  keywords: "Ecommerce, medicación, dolores, calmar, tienda, online, shopping, cosméticos, Soluciones CRM Personalizadas",
};

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Imagen del logo */}
          <Image
            src="/images/logo.jpg" // Ruta correcta de la imagen
            alt="Logo de la Farmacia"
            width={100}
            height={100}
            className="object-contain"
            priority // Optimización de carga de imagen
          />
          {/* Menú */}
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
