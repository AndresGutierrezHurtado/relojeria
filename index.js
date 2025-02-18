import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
app.use(cors());

app.get("/watches", async (req, res) => {
    try {
        const response = await fetch("https://www.businesscolombia.shop/collections/rolexx");
        const body = await response.text();
        const $ = cheerio.load(body);

        const watches = [];
        $("gp-product").each((index, element) => {
            const productImage = $(element).find("gp-product-images-v2 img").attr("data-src");
            const productName = $(element).find("gp-text h2").text().trim();
            const productPrice = $(element)
                .find("gp-product div:nth-of-type(2) div:nth-child(2) gp-text")
                .text()
                .trim();
            const productDiscount = $(element).find("gp-product gp-product-price").text().trim();
            const product = $(element).find("gp-product-images-v2").attr("gp-data");
            const productJSON = JSON.parse(product).product;
            if (productImage && productName && productPrice) {
                watches.push({
                    product_image: productImage,
                    product_name: productName,
                    product_price: parseInt(
                        productPrice.replace("$", "").replace(",00", "").replace(".", "")
                    ),
                    product_discount: parseInt(
                        productDiscount.replace("$", "").replace(",00", "").replace(".", "")
                    ),
                    product_description: productJSON.description,
                    product_availability: productJSON.available,
                    product: productJSON,
                });
            }
        });

        res.status(200).json({
            success: true,
            message: "Acción exitosa",
            data: watches,
        });
    } catch (error) {
        console.error("Error fetching watches:", error);
        res.status(500).json({ error: "Failed to fetch watches" });
    }
});

app.listen(8000, () => console.log("Server running on port 8000"));
