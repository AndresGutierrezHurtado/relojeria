"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Components
import ProductCard from "./product";

export default function CombosSwiper({ combos }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={true}
            modules={[Pagination]}
            className="w-full h-full"
        >
            {combos.map((combo) => (
                <SwiperSlide key={combo.product.id} className="pb-12">
                    <ProductCard product={combo} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
