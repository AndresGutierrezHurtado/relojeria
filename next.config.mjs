/** @type {import('next').NextConfig} */
export default {
    images: {
        domains: ["www.businesscolombia.shop"],
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        unoptimized: true,
    }
};
