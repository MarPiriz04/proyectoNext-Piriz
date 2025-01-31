"use client";

import { getCartItems, removeFromCart } from "../api/cart";
import { useState, useEffect } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchCart() {
            const cartList = await getCartItems();
            setCart(cartList);
        }

        fetchCart();
    }, []);

    const handleRemove = async (id) => {
        await removeFromCart(id);
        setCart(cart.filter(item => item.id !== id)); // Actualizar el estado local
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
