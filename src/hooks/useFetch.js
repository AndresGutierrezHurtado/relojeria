import React, { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_DOMAIN;

export const useFetchData = async (endpoint, options) => {
    const request = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "content-type": "application/json",
            accept: "application/json",
        },
        method: "GET",
        ...options,
    }).catch((error) => {
        console.error(error);
    });

    return request.json();
};

export const useGetData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const response = await useFetchData(endpoint);
            setData(response);
            setLoading(false);
        };

        getData();
    }, [endpoint]);

    const reload = () => setLoading(true);

    return { data: data?.data, pages: data?.pages, loading, reload };
};
