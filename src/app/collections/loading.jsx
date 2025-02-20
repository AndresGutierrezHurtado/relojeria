import React from "react";

export default function Loading() {
    return (
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
            <span className="loading loading-ring w-[110px]"></span>
            <h1 className="text-3xl font-bold">Cargando...</h1>
        </div>
    );
}
