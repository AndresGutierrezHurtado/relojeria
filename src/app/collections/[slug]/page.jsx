import React from "react";

// Hooks
import { useGetData } from "@/hooks/useFetch";

// Components
import ProductCard from "@/components/product";

export default async function Page({ params }) {
    const { slug } = params;
    const { watches, pages } = await useGetData(`/api/watches?collection=${slug}`);

    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Productos:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {watches
                    // .filter((p) => p.product_page == currentPage)
                    .map((product) => (
                        <ProductCard key={product.product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}
