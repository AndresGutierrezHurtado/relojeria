"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="es">
            <body className="antialiased">
                <main className="text-white">
                    <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-stone-950 bg-[radial-gradient(ellipse_80%_80%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                        <div className="fixed top-0 bottom-0 z-[-1] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
                    </div>
                    <div className="w-full px-3 max-w-[1200px] mx-auto flex flex-col gap-10 text-center">
                        <div className="w-fit max-w-full mx-auto  py-10 flex flex-col gap-5">
                            <div className="flex flex-col items-center mx-10">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    className="object-contain"
                                    width={150}
                                    height={150}
                                />
                                <h1 className="text-white text-4xl font-bold">
                                    Tempus Elite
                                </h1>
                            </div>
                            <ul className="flex gap-8 justify-center border-t-2 border-yellow-400 pt-4 text-xl">
                                <li
                                    className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 ${
                                        pathname == "/" && "text-yellow-400"
                                    }`}
                                >
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li
                                    className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 ${
                                        pathname == "/collections" &&
                                        "text-yellow-400"
                                    }`}
                                >
                                    <Link href="/collections">Marcas</Link>
                                </li>
                                <li
                                    className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 truncate ${
                                        pathname ==
                                            "/collections/lo-mas-vendido" &&
                                        "text-yellow-400"
                                    }`}
                                >
                                    <Link href="/collections/lo-mas-vendido">
                                        Lo Más Vendido
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-3 max-w-[1200px] mx-auto flex flex-col gap-10">
                        {children}
                    </div>
                </main>
                <Link target="_blank" href="https://wa.link/4qkq4a" className="fixed bottom-[10vh] right-[5vw]">
                    <button className="btn btn-success bg-green-500 text-white px-5 h-auto rounded-[99px] animate-bounce hover:animate-none duration-300">
                        <svg
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                        >
                            <path
                                d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z"
                                fill="#EDEDED"
                            ></path>
                            <path
                                d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z"
                                fill="#25D366"
                            ></path>
                            <path
                                d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z"
                                fill="#FEFEFE"
                            ></path>
                        </svg>
                        Envíanos un mensaje
                    </button>
                </Link>
            </body>
        </html>
    );
}