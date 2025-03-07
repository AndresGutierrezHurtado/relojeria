import React from "react";

// Hooks
import { useGetData } from "@/hooks/useFetch";
import Collection from "@/components/collection";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Marcas | Tempus Elite",
};

export default async function Page() {
    const collections = await useGetData("/api/collections");

    if (!collections) return { notFound: true };
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Marcas:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {collections.map((collection) => (
                    <Collection collection={collection} key={collection.collection_slug} />
                ))}
            </div>
        </div>
    );
}
