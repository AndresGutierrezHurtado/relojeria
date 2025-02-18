import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
app.use(cors());

app.get("/watches", async (req, res) => {
    try {
        const indexPage = 1;
        const baseUrl = `http://www.businesscolombia.shop/collections`;
        const watches = [];
        const { collection = "rolexx" } = req.query;

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
                const productImage = $(element)
                    .find("gp-product-images-v2 img")
                    .attr("data-src");
                const productName = $(element)
                    .find("gp-text h2                 ")
                    .text()
                    .trim();
                const productPrice = $(element)
                    .find(
                        "gp-product div:nth-of-type(2) div:nth-child(2) gp-text"
                    )
                    .text()
                    .trim();
                const productDiscount = $(element)
                    .find("gp-product gp-product-price")
                    .text()
                    .trim();
                const product = $(element)
                    .find("gp-product-images-v2")
                    .attr("gp-data");

                const productJSON = JSON.parse(product).product;

                if (
                    productImage &&
                    productName &&
                    productPrice &&
                    productDiscount &&
                    productJSON
                ) {
                    watches.push({
                        product_image: productImage,
                        product_name: productName,
                        product_price: parseInt(
                            productPrice
                                .replace("$", "")
                                .replace(",00", "")
                                .replaceAll(".", "")
                        ),
                        product_discount: parseInt(
                            productDiscount
                                .replace("$", "")
                                .replace(",00", "")
                                .replaceAll(".", "")
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

        for (let i = 1; i <= pages; i++) {
            await getWatches(baseUrl + "/" + collection + `?page=${i}`, i);
        }

        res.status(200).json({
            success: true,
            message: "Relojes obtenidos correctamente",
            data: watches,
            pages: pages,
        });
    } catch (error) {
        console.error("Error fetching watches:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching watches",
            data: error,
        });
    }
});
app.get("/collections", async (req, res) => {
    try {
        const response = await fetch(
            `https://www.businesscolombia.shop/collections`
        );
        const body = await response.text();
        const $ = cheerio.load(body);

        const collections = [];
        $('a[href^="https://www.businesscolombia.shop/collections"]').each(
            (index, element) => {
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
            }
        );

        res.status(200).json({
            success: true,
            message: "Acción exitosa",
            data: collections.filter(
                (c) =>
                    c.collection_slug !== "/gorras" &&
                    c.collection_slug !== "/business-academy" &&
                    c.collection_slug !== "/cajas-de-presentacion"
            ),
        });
    } catch (error) {
        console.error("Error fetching watches:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching watches",
            data: error,
        });
    }
});

app.listen(8000, () => console.log("Server running on port 8000"));
