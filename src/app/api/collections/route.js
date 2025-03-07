import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

if (!global.cache) {
    global.cache = new Map();
}

export async function GET() {
    try {
        if (global.cache.has("collections") && Date.now() - global.cache.get("collections").timestamp < 600000) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Marcas obtenidas desde caché",
                    data: global.cache.get("collections").data,
                },
                { status: 200 }
            );
        }

        const response = await fetch(`https://www.businesscolombia.shop/collections`);
        const body = await response.text();
        const $ = cheerio.load(body);

        const collections = [];
        $('a[href^="https://www.businesscolombia.shop/collections"]').each((index, element) => {
            const collectionName = $(element)
                .closest('div[type="component"]')
                .find("gp-text h3")
                .text()
                .trim();
            const collectionLink = $(element).attr("href");
            const collecitonImage = $(element).find("img").attr("data-src");

            if (collectionName && collectionLink && collecitonImage) {
                collections.push({
                    collection_name: collectionName,
                    collection_slug: collectionLink.replace(
                        "https://www.businesscolombia.shop/collections",
                        ""
                    ),
                    collection_image: collecitonImage,
                });
            }
        });

        global.cache.set("collections", {
            timestamp: Date.now(),
            data: collections.filter(
                (c) =>
                    c.collection_slug !== "/gorras" &&
                    c.collection_slug !== "/business-academy" &&
                    c.collection_slug !== "/cajas-de-presentacion"
            ),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Marcas obtenidas con éxito",
                data: global.cache.get("collections").data,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Error al obtener las categorias", data: error },
            { status: 500 }
        );
    }
}
