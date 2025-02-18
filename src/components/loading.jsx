import React from "react";

export default function Loading() {
    return (
        <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-stone-950 bg-[radial-gradient(ellipse_80%_80%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="fixed top-0 bottom-0 z-[-1] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            <div className="w-full px-3 max-w-[1200px] mx-auto flex flex-col gap-10">
                <div className="w-fit mx-auto  py-10 flex flex-col gap-5">
                    <div className="flex flex-col items-center mx-10">
                        <img src="/logo.png" alt="Logo" className="size-[150px] object-contain" />
                        <h1 className="text-4xl font-bold text-white">Cargando...</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
