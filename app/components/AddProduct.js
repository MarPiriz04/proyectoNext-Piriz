"use client";

import { useState } from "react";
import { saveProductWithImage } from "../api/storage";

export default function AddProduct() {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Sube una imagen del producto");
    await saveProductWithImage(product, file);
    alert("Producto agregado con éxito");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Agregar Producto</h2>
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={product.name} 
        onChange={(e) => setProduct({ ...product, name: e.target.value })} 
        className="block border p-2 w-full"
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={product.price} 
        onChange={(e) => setProduct({ ...product, price: e.target.value })} 
        className="block border p-2 w-full mt-2"
      />
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
        className="block border p-2 w-full mt-2"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Guardar Producto
      </button>
    </form>
  );
}
