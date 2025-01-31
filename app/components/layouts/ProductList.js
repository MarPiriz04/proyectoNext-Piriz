"use client";

import { getProducts } from "../api/products";
import { useState, useEffect } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const productList = await getProducts();
            setProducts(productList);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}
