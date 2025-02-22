/** @type {import('next').NextConfig} */
export default {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.businesscolombia.shop",
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};
