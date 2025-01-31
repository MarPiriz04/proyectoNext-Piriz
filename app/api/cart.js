"use client";

import { db } from "../lib/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Agregar un producto al carrito
export async function addToCart(product) {
    try {
        await addDoc(collection(db, "carrito"), product);
        console.log("Producto agregado al carrito");
    } catch (error) {
        console.error("Error agregando al carrito:", error);
    }
}

// Obtener productos del carrito
export async function getCartItems() {
    try {
        const querySnapshot = await getDocs(collection(db, "carrito"));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error obteniendo carrito:", error);
        return [];
    }
}
// Eliminar un producto del carrito
export async function removeFromCart(productId) {
    try {
        await deleteDoc(doc(db, "carrito", productId));
        console.log("Producto eliminado del carrito");
    } catch (error) {
        console.error("Error eliminando del carrito:", error);
    }
}
