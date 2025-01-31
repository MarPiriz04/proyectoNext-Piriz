"use client";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const storage = getStorage();

// Subir imagen y obtener URL
export async function uploadImage(file) {
  try {
    const storageRef = ref(storage, `productos/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error subiendo imagen:", error);
  }
}

// Guardar producto con imagen en Firestore
export async function saveProductWithImage(product, file) {
  try {
    const imageUrl = await uploadImage(file);
    const docRef = await addDoc(collection(db, "productos"), { ...product, imageUrl });
    console.log("Producto guardado con imagen, ID:", docRef.id);
  } catch (error) {
    console.error("Error guardando producto:", error);
  }
}
