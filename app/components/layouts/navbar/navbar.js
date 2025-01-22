import Image from "next/image";
import Menu from "./menu";

export const metadata = {
  title: "Ecommerce - Navbar",
  description: "Navegación principal de un ecommerce moderno.",
  keywords: "ecommerce, tienda, moda, ropa, compras online, navegación, logo",
};

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Inicio">
            <Image
              src="/logoApp.svg"
              alt="Logo del Ecommerce"
              width={100}
              height={100}
              className="object-contain"
            />
          </a>

          {/* Menu */}
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


