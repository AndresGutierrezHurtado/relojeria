import React, { useState, useEffect } from "react";

// Hooks
import { useGetWatches } from "./hooks/useFetch";
import ProductList from "./views/productList";

function App() {
    const { data: products, loading } = useGetWatches();
    const [type, setType] = useState("home"); // home, all

    console.log("products", products, "loading", loading);
    if (loading) return <h1>Loading...</h1>;
    return (
        <main className="text-white">
            <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-stone-950 bg-[radial-gradient(ellipse_80%_80%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <div className="fixed top-0 bottom-0 z-[-1] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            </div>
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
                    <ul className="flex gap-8 justify-center border-t-2 border-yellow-400 pt-4 text-xl">
                        <li
                            className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer ${
                                type === "home" ? "text-yellow-300" : ""
                            }`}
                            onClick={() => setType("home")}
                        >
                            Inicio
                        </li>
                        <li
                            className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer ${
                                type === "all" ? "text-yellow-300" : ""
                            }`}
                            onClick={() => setType("all")}
                        >
                            Relojes
                        </li>
                    </ul>
                </div>
                {type === "home" && <div></div>}
                {type === "all" && <ProductList products={products} />}
            </div>
        </main>
    );
}

export default App;
