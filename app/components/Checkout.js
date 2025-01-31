"use client"; // Asegura que este componente solo se renderiza en el cliente

import { placeOrder } from "../api/Orders";
import { getCartItems } from "../api/cart";
import { auth } from "../lib/firebaseConfig";
import { useState, useEffect } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchCart() {
      setCart(await getCartItems());
    }
    fetchCart();

    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleCheckout = async () => {
    if (!user) return alert("Debes iniciar sesión para comprar");
    await placeOrder(user.uid, cart);
    alert("Pedido realizado con éxito");
  };

  return (
    <div>
      <h2>Resumen del Pedido</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button 
        onClick={handleCheckout} 
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Comprar Ahora
      </button>
    </div>
  );
}
