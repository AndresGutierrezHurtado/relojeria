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
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            pagination={true}
            modules={[Pagination]}
            className="w-full h-full"
        >
            {combos.map((combo) => (
                <SwiperSlide key={combo.product.id} className="pb-12 py-1 cursor-grab active:cursor-grabbing">
                    <ProductCard product={combo} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
