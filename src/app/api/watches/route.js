import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

const cache = new Map();

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        const indexPage = 1;
        const baseUrl = `http://www.businesscolombia.shop/collections`;
        const watches = [];
        const collection = searchParams.get("collection") || "rolexx";

        if (cache.has(collection) && Date.now() - cache.get(collection).timestamp < 600000) {
            return NextResponse.json({
                success: true,
                message: "Relojes obtenidos desde caché",
                data: cache.get(collection).data,
            });
        }

        const getPages = async (url) => {
            const response = await fetch(url);
            const $ = cheerio.load(await response.text());
            let pages = 1;

            $(".gf_collection-paginator-wrapper span").each((i, el) => {
                const number = parseInt($(el).text().trim());
                if (number && number > pages) {
                    pages = number;
                }
            });

            return pages;
        };

        const getWatches = async (url, page) => {
            const response = await fetch(url);
            const $ = cheerio.load(await response.text());

            $("gp-product").each((index, element) => {
                const productImage = $(element).find("gp-product-images-v2 img").attr("data-src");
                const productName = $(element).find("gp-text h2                 ").text().trim();
                const productPrice = $(element)
                    .find("gp-product div:nth-of-type(2) div:nth-child(2) gp-text")
                    .text()
                    .trim();
                const productDiscount = $(element)
                    .find("gp-product gp-product-price")
                    .text()
                    .trim();
                const product = $(element).find("gp-product-images-v2").attr("gp-data");

                const productJSON = JSON.parse(product).product;

                if (
                    productImage &&
                    productName &&
                    (productPrice || productDiscount) &&
                    productJSON
                ) {
                    watches.push({
                        product_image: productImage,
                        product_name: productName,
                        product_price: parseInt(
                            (productPrice || productDiscount).replace("$", "").replace(",00", "").replaceAll(".", "")
                        ),
                        product_discount: parseInt(
                            (productDiscount || productPrice).replace("$", "").replace(",00", "").replaceAll(".", "")
                        ),
                        product_description: productJSON.description,
                        product_availability: productJSON.available,
                        product_page: page,
                        product: productJSON,
                    });
                }
            });
        };
        const pages = await getPages(baseUrl + "/" + collection);

        await Promise.all(
            Array.from({ length: pages }).map((_, i) =>
                getWatches(baseUrl + "/" + collection + `?page=${i + 1}`, i + 1)
            )
        );

        cache.set(collection, {
            data: { watches, pages },
            timestamp: Date.now(),
        });

        return NextResponse.json({
            success: true,
            message: "Relojes obtenidos con exito",
            data: { watches, pages },
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error al obtener los relojes",
            data: error,
        });
    }
}
