import React from "react";

export default function Swiper({ combos }) {
    return (
        <Swiper spaceBetween={50} slidesPerView={3} className="w-full h-full">
            {combos.map((combo) => (
                <SwiperSlide key={combo._id} className="pb-12">
                    <ProductCard product={combo} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
