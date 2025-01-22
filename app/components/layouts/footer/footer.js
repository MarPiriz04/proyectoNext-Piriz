"use client";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede implementar la lógica para suscribirse al newsletter
    alert("¡Gracias por suscribirte a nuestro boletín!");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de Contacto */}
          <div>
            <h1 className="text-xl font-bold mb-4">Contáctanos</h1>
            <p className="mb-2">Calle Salud 123</p>
            <p className="mb-2">Montevideo, Uruguay</p>
            <p className="mb-2">Teléfono: +598 1234 5678</p>
            <p>Email: contacto@farmaciaveracierto.com</p>
          </div>

          {/* Suscripción al Newsletter */}
          <div>
            <h2 className="text-xl font-bold mb-4">Suscríbete</h2>
            <p className="mb-4">Recibe nuestras ofertas y noticias de salud en tu correo.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Introduce tu email"
                className="w-full p-2 mb-2 text-gray-900 rounded"
                required
              />
              <button
                aria-label="Suscribirse"
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-blue-400">Sobre Nosotros</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-blue-400">Preguntas Frecuentes</a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="hover:text-blue-400">Información de Envío</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-blue-400">Política de Privacidad</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400" aria-label="Facebook">
                <p>Facebook</p>
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="Twitter">
                <p>Twitter</p>
              </a>
              <a 
                href="https://www.instagram.com/educacioncristian/" 
                rel="noopener noreferrer" 
                target="_blank" 
                className="hover:text-blue-400"
                aria-label="Instagram"
              >
                <p>Instagram</p>
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Farmacia Veracierto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
