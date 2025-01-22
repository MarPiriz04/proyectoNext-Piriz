import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";


export const metadata = {
  title: "Farmacia Veracierto | Inicio",
  description: "Ecommerce para productos farmacéuticos y de salud",
  keywords:
    "Farmacia, Veracierto, salud, medicamentos, ecommerce, farmacia online, productos farmacéuticos",
  openGraph: {
    title: "Farmacia Veracierto | Inicio",
    description: "Ecommerce para productos farmacéuticos y de salud",
    url: "https://farmacia.veracierto.com",
    siteName: "Farmacia Veracierto",
    images: [
      {
        url: "https://example.com/images/farmacia-veracierto.jpg",
        alt: "Farmacia Veracierto",
        title: "Farmacia Veracierto",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Metadatos dinámicos (cuando uses Firebase en el futuro)
/*
export async function generateMetadata({ params, searchParams }, parent) {
  const { id } = params;
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  const parentMetadata = await parent;
  return {
    title: `Farmacia Veracierto | ${product.title}`,
    description: product.description,
    openGraph: {
      title: `Farmacia Veracierto | ${product.title}`,
      description: product.description,
      url: `https://farmacia.veracierto.com/product/${id}`,
      siteName: "Farmacia Veracierto",
      images: [
        {
          url: product.image,
          alt: product.title,
          title: product.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    ...parentMetadata,
  };
}
*/

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Bienvenidos a Farmacia Veracierto</h1>
        <p>
          Encuentra todos los productos de salud y medicamentos que necesitas. 
          Nuestra prioridad es tu bienestar.
        </p>
      </main>
      <Footer />
    </>
  );
}

