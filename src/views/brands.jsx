import React from "react";
import Tilt from "react-parallax-tilt";

// Hooks
import { useGetData } from "../hooks/useFetch";

// Components
import Loading from "../components/loading";

export default function Brands() {
    const { data: collections, loading: loadingCollections } = useGetData("/collections");

    if (loadingCollections) return <Loading />;
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Marcas:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {collections.map((collection) => (
                    <Tilt
                        key={collection.collection_slug}
                        className="p-7 bg-stone-100/[.05] rounded-lg bg-blur-xl text-white flex flex-col gap-5 overflow-hidden"
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                    >
                        <a href={`/collections${collection.collection_slug}`}>
                            <img
                                src={collection.collection_image}
                                alt={collection.collection_name}
                                className="w-full rounded-lg"
                            />
                        </a>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold leading-[1.1] text-center">
                                {collection.collection_name}
                            </h2>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    );
}
