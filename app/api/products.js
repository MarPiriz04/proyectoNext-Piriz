"use client";

import { db } from "../lib/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Guardar producto en Firestore
export async function saveProduct(product) {
    try {
        const docRef = await addDoc(collection(db, "productos"), product);
        console.log("Producto guardado con ID: ", docRef.id);
    } catch (error) {
        console.error("Error guardando producto:", error);
    }
}

// Obtener productos desde Firestore
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error obteniendo productos:", error);
        return [];
    }
}
