/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Verde principal (color de la farmacia)
        secondary: "#ffffff", // Blanco
        background: "#f8f9fa", // Fondo claro
        success: "#4CAF50", // Verde para éxito
        danger: "#FF5252", // Rojo para errores o alertas
        info: "#2196F3", // Azul para información
        light: "#ffffff", // Blanco adicional
        dark: "#2E2E2E", // Gris oscuro para textos secundarios
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pharmacy: {
          primary: "#4CAF50", // Verde
          secondary: "#ffffff", // Blanco
          accent: "#81C784", // Verde claro
          neutral: "#E8F5E9", // Fondo muy claro
          "base-100": "#ffffff", // Fondo base (blanco)
          info: "#64B5F6", // Azul claro
          success: "#4CAF50", // Verde
          warning: "#FFC107", // Amarillo
          error: "#FF5252", // Rojo
        },
      },
    ],
  },
};