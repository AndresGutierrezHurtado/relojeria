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
                                <h1 className="text-white text-4xl font-bold">Tempus Elite</h1>
                            </div>
                            <ul className="flex gap-8 justify-center border-t-2 border-yellow-400 pt-4 text-xl">
                                <li className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 ${pathname == "/" && "text-yellow-400"}`}>
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 ${pathname == "/collections" && "text-yellow-400"}`}>
                                    <Link href="/collections">Marcas</Link>
                                </li>
                                <li className={`hover:text-yellow-400 hover:scale-[1.1] duration-300 cursor-pointer px-1 py-0.5 truncate ${pathname == "/collections/lo-mas-vendido" && "text-yellow-400"}`}>
                                    <Link href="/collections/lo-mas-vendido">Lo Más Vendido</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-3 max-w-[1200px] mx-auto flex flex-col gap-10">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}