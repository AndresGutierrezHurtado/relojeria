import React from "react";
import Tilt from "react-parallax-tilt";

export default function ProductCard({ product }) {
    return (
        <Tilt
            className="p-7 bg-stone-100/[.05] rounded-lg bg-blur-xl text-white flex flex-col gap-5 overflow-hidden"
            glareEnable={true}
            glareMaxOpacity={0.3}
            tiltMaxAngleX={10}
            tiltMaxAngleY={15}
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
                <p className="bg-gradient-to-t from-yellow-500 from-30% via-yellow-300 via-50% to-yellow-500 to-55% bg-clip-text text-transparent text-3xl font-extrabold text-center">
                    {parseInt(product.product_price).toLocaleString("es-CO")} COP
                </p>
            </div>
        </Tilt>
    );
}
