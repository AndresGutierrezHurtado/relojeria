import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
    try {
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

        return NextResponse.json(
            {
                success: true,
                message: "Acción exitosa",
                data: collections.filter(
                    (c) =>
                        c.collection_slug !== "/gorras" &&
                        c.collection_slug !== "/business-academy" &&
                        c.collection_slug !== "/cajas-de-presentacion"
                ),
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
