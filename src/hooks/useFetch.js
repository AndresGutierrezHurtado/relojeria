import React, { useState, useEffect } from "react";

export const useFetchData = async (endpoint, options) => {
    const request = await fetch(endpoint, {
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
            setData(response.data);
            setLoading(false);
        };

        getData();
    }, [endpoint]);

    const reload = () => setLoading(true);

    return { data: data?.watches, pages: data?.pages, loading, reload };
};
