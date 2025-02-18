import React from "react";

// Components
import ProductCard from "../components/product";

export default function ProductList({ products }) {
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Productos:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {products.map((product) => (
                    <ProductCard key={product.product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
