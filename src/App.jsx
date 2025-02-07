import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";

// Hooks
import { useGetWatches } from "./hooks/useFetch";

function App() {
    const { data: products, loading } = useGetWatches();
    const [type, setType] = useState("home"); // home, all

    if (loading) return <h1>Loading...</h1>;
    return (
        <main className="text-white">
            <div class="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="w-full px-3 max-w-[1200px] mx-auto flex flex-col gap-10">
                <div className="w-fit mx-auto  py-10 flex flex-col gap-5">
                    <div className="flex flex-col items-center mx-5">
                        <img
                            src="https://www.businesscolombia.shop/cdn/shop/files/LOGO-BUSINESS.png?v=1734187758&width=70"
                            alt="Logo"
                            className="size-[100px] object-contain"
                        />
                        <h1 className="text-white text-4xl font-bold">Business Colombia</h1>
                    </div>
                    <ul className="flex gap-8 justify-center border-t border-yellow-400 pt-4 text-lg">
                        <li
                            className={`hover:text-yellow-400 hover:scale-[1.2] duration-300 cursor-pointer ${
                                type === "home" ? "text-yellow-300" : ""
                            }`}
                            onClick={() => setType("home")}
                        >
                            Inicio
                        </li>
                        <li
                            className={`hover:text-yellow-400 hover:scale-[1.2] duration-300 cursor-pointer ${
                                type === "all" ? "text-yellow-300" : ""
                            }`}
                            onClick={() => setType("all")}
                        >
                            Relojes
                        </li>
                    </ul>
                </div>
                {type === "home" && <div></div>}
                {type === "all" && (
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
                                            {parseInt(product.product_price).toLocaleString(
                                                "es-CO"
                                            )}{" "}
                                            COP
                                        </p>
                                    </div>
                                </Tilt>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default App;
