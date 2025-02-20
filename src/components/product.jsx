"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function ProductCard({ product }) {
    return (
        <>
            <Tilt
                className="p-7 bg-stone-100/[.05] rounded-lg bg-blur-xl text-white flex flex-col gap-5 overflow-hidden"
                glareEnable={true}
                glareMaxOpacity={0.3}
                tiltMaxAngleX={10}
                tiltMaxAngleY={15}
            >
                <img
                    onClick={() =>
                        document.getElementById(`modal-${product.product_name}`).showModal()
                    }
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-full aspect-square object-contain rounded-lg bg-black/50 cursor-pointer hover:grayscale-50 duration-300"
                    title="Información extra"
                />
                <div className="flex flex-col gap-2 flex-grow">
                    <h2 className="text-2xl font-bold leading-[1.1] text-center flex-grow">
                        {product.product_name}
                    </h2>
                    <p className="bg-gradient-to-t from-yellow-500 from-30% via-yellow-300 via-50% to-yellow-500 to-55% bg-clip-text text-transparent text-3xl font-extrabold text-center">
                        {parseInt(product.product_price).toLocaleString("es-CO")} COP
                    </p>
                </div>
            </Tilt>
            <dialog id={`modal-${product.product_name}`} className="modal px-3">
                <div className="modal-box w-full max-w-[1200px] xl:max-w-[1500px] bg-zinc-900">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2 pt-5 md:pt-0 rounded-lg bg-black/50 overflow-hidden">
                            <img
                                src={product.product_image}
                                alt={`imagen del producto ${product.product_name}`}
                                className="w-full max-h-[80vh] object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-grow">
                            <p className="py-4 text-2xl font-medium">Información del producto:</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: product.product_description
                                        .replace(
                                            "GARANTÍA DE 3 MESES POR DEFECTOS DE FÁBRICA Y FUNCIONAMIENTO.",
                                            ""
                                        )
                                        .replace("📊 Proyección de rentabilidad:", "")
                                        .replace(
                                            /<li>\s*<strong>\s*Precio sugerido de venta por unidad.*?<\/strong>.*?<\/li>/gs,
                                            ""
                                        )
                                        .replace(
                                            /<li>\s*<strong>\s*Rentabilidad promedio total.*?<\/strong>.*?<\/li>/gs,
                                            ""
                                        ),
                                }}
                            />
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
