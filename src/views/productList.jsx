import React from "react";
import { Tilt } from "react-tilt";

export default function ProductList({ products }) {
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Productos:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {products.map((product) => (
                    <Tilt
                        key={product.product_image}
                        className="p-7 bg-zinc-300/20 rounded-lg bg-blur-xl text-white flex flex-col gap-5"
                        options={{
                            max: 15,
                            scale: 1,
                            speed: 1,
                            transition: true,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                        }}
                    >
                        <img
                            src={product.product_image}
                            alt={product.product_name}
                            className="w-full rounded-lg"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold leading-[1.1] text-center">
                                {product.product_name}
                            </h2>
                            <p className="text-3xl font-extrabold text-yellow-500 text-center">
                                {parseInt(product.product_price).toLocaleString("es-CO")} COP
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    );
}
