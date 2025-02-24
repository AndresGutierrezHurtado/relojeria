import React from "react";

// Hooks
import { useGetData } from "@/hooks/useFetch";

// Components
import ProductCard from "@/components/product";
import Pagination from "@/components/pagination";

export default async function Page({ searchParams, params }) {
    const { slug } = await params;
    const { page = 1 } = await searchParams;

    const { watches, pages } = await useGetData(`/api/watches?collection=${slug}`);

    if (!watches) return { notFound: true };
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Productos:</h2>
            {watches.length == 0 && (
                <div className="text-center py-10">
                    <h2 className="text-xl font-medum">No se encontraron existencias..</h2>
                    <p>Espera a que el adminstrador publique más productos</p>
                </div>
            )}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {watches
                    .filter((p) => p.product_page == page)
                    .map((product) => (
                        <ProductCard key={product.product.id} product={product} />
                    ))}
            </div>
            <Pagination pages={pages} page={page} currentPage={`/collections/${slug}`} />
        </div>
    );
}
