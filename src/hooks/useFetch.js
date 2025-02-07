import React, { useState, useEffect } from "react";

// Mock
import { products } from "../mocks/products.json";

export const queryApi = async () => {
    try {
        return {
            success: true,
            message: "Acción exitosa",
            data: products.map((p) => ({
                product_image: p.product_image,
                product_name: p.product_name,
                product_price: parseInt(p.product_discount.replace("$", "").replace(".", "")),
            })),
        };
    } catch (error) {
        console.error("Error al realizar la petición: ", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error en la petición: " + error.message,
        });
        return undefined;
    }
};

export const useGetWatches = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await queryApi();
            if (result) setData(result.data);
            setLoading(false);
        };
        fetchData();
    }, [endpoint]);

    return { data, loading };
};

