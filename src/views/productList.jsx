import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Hooks
import { useGetData } from "../hooks/useFetch.js";

// Components
import ProductCard from "../components/product.jsx";
import Loading from "../components/loading.jsx";
import Pagination from "../components/pagination.jsx";

export default function ProductList() {
    const { collection } = useParams();
    const { data: products, pages: productPages, loading: productsLoading } = useGetData(`/watches?collection=${collection}`);
    const [currentPage, setCurrentPage] = useState(1);

    if (productsLoading) return <Loading />;
    return (
        <div className="flex flex-col gap-5 pb-10">
            <h2 className="text-4xl font-bold text-white">Productos:</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                {products.filter(p => p.product_page == currentPage).map((product) => (
                    <ProductCard key={product.product.id} product={product} />
                ))}
            </div>
            <Pagination pages={productPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}
