import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryCard({ href, image, title }) {
    return (
        <Link
            href={href}
            className="group relative overflow-hidden rounded-xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
        >
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={`Categoría ${title}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <h3 className="text-xl font-medium text-center">{title}</h3>
                <div className="w-10 h-0.5 bg-yellow-500 mx-auto mt-2 transition-all duration-300 group-hover:w-16"></div>
            </div>
        </Link>
    );
}
