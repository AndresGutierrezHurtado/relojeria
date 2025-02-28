"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Collection({ collection }) {
    return (
        <Tilt
            key={collection.collection_slug}
            className="p-7 bg-stone-100/[.05] rounded-[0.5rem] bg-blur-xl text-white flex flex-col gap-5 overflow-hidden"
            glareEnable={true}
            glareMaxOpacity={0.3}
            tiltMaxAngleX={10}
            tiltMaxAngleY={15}
        >
            <a href={`/collections${collection.collection_slug}`}>
                <img
                    src={collection.collection_image}
                    alt={collection.collection_name}
                    className="w-full rounded-[0.5rem]"
                />
            </a>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold leading-[1.1] text-center">
                    {collection.collection_name}
                </h2>
            </div>
        </Tilt>
    );
}
