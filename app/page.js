"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const ofertas = [
    {
      id: 1,
      image: "/images/inmunel.jpg",
      title: "50% de descuento en productos de inmunidad",
    },
    {
      id: 2,
      image: "/images/dirox.jpg",
      title: "¡Suplementos al 30% menos!",
    },
    {
      id: 3,
      image: "/images/dinamil.jpg",
      title: "2x1 en multivitaminicos",
    },
  ];

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bienvenidos a Farmacia Veracierto</h1>
      <p>Encuentra todos los productos de salud y medicamentos que necesitas.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Ofertas Especiales</h2>
        <Swiper
          spaceBetween={0} // Sin espacio entre diapositivas
          slidesPerView={1} // Una diapositiva visible a la vez
          loop={true} // Desplazamiento infinito
          autoplay={{ delay: 5000 }} // Desplazamiento automático cada 5 segundos
          navigation={true} // Flechas de navegación
          pagination={{ clickable: true }} // Puntos interactivos
          modules={[Navigation, Pagination]}
        >
          {ofertas.map((oferta) => (
            <SwiperSlide key={oferta.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px", // Altura del banner
                  overflow: "hidden",
                  borderRadius: "10px", // Opcional: Bordes redondeados
                }}
              >
                <img
                  src={oferta.image}
                  alt={oferta.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Asegura que la imagen ocupe el contenedor
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    color: "#fff",
                    background: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "1.5rem" }}>{oferta.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
