import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";

// Configuración de las fuentes personalizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos adaptados para Farmacia Veracierto
export const metadata = {
  title: "Farmacia Veracierto | Tu bienestar, nuestra prioridad",
  description:
    "Farmacia Veracierto te ofrece productos de salud y medicamentos con el mejor servicio en Montevideo. Descubre nuestra tienda online y cuida tu bienestar.",
  keywords: "farmacia, medicamentos, salud, ecommerce, farmacia online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
