export const useGetData = async (endpoint) => {
    const data = await fetch(process.env.APP_DOMAIN + endpoint);
    const response = await data.json();

    return response.data;
};
