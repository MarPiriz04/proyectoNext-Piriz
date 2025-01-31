"use client";

import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Guardar pedido en Firestore
export async function placeOrder(userId, cart) {
  try {
    const order = {
      userId,
      items: cart,
      date: new Date().toISOString(),
    };
    await addDoc(collection(db, "pedidos"), order);
    console.log("Pedido realizado con éxito");
  } catch (error) {
    console.error("Error al hacer el pedido:", error);
  }
}
