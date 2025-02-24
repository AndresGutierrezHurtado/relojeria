export const useGetData = async (endpoint) => {
    const data = await fetch(
        (process.env.APP_DOMAIN || "https://tempus-elite.onrender.com") + endpoint
    );
    const response = await data.json();

    return response.data;
};
