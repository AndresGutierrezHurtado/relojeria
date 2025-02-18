import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Hooks
import { useGetData } from "../hooks/useFetch.js";

// Components
import Loading from "../components/loading.jsx";
import ProductCard from "../components/product.jsx";

export default function Home() {
    const { data: combos, loading: combosLoading } = useGetData("/watches?collection=combos");

    if (combosLoading) return <Loading />;
    return (
        <main className="flex flex-col gap-10 py-10">
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto flex flex-row gap-5">
                    <div className="w-full md:max-w-1/3 flex flex-col gap-5 flex-none">
                        <div>
                            <p className="text-yellow-500 font-medium text-lg">Nuestros combos</p>
                            <h1 className="text-8xl font-bold text-pretty leading-[0.8]">
                                ¡El <span className="text-yellow-500">combo perfecto</span> para ti
                                está aquí!
                            </h1>
                        </div>
                        <p className="text-lg text-gray-300 leading-tight">
                            Porque sabemos que el estilo importa, hemos creado combinaciones únicas
                            de relojes para que lleves lo mejor, siempre.
                        </p>
                        <Link to="/collections/combos">
                            <button className="btn text-xl bg-yellow-500 text-black font-bold py-1 h-auto rounded-lg">Ver Combos</button>
                        </Link>
                    </div>
                    <img src="/hero.png" alt="Imagen combo" className="flex-grow w-2/3 object-contain hidden md:block"/>
                </div>
            </section>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-5">
                    <h1 className="font-medium text-4xl">Principales categorias:</h1>
                    <div className="grid text-xl grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 [&_img]:rounded-lg [&_img]:size-[150px]">
                        <Link to="/collections/rolexx" className="flex flex-col items-center gap-1">
                            <img
                                src="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-136e5a94-17fe-4a69-a9e8-eb98f44edfae.jpg?v=11092526891830783607"
                                alt="Imagen de Rolex"
                            />
                            <h2 className="text-xl text-center font-medium">Rolexx</h2>
                        </Link>
                        <Link
                            to="/collections/richard-mille"
                            className="flex flex-col items-center gap-1"
                        >
                            <img
                                src="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-b319a795-1746-4448-802f-4eefe80c809d.jpg?v=11757830867926194137"
                                alt="Imagen de Richard Mille"
                            />
                            <h2 className="text-xl text-center font-medium">Richard Mille</h2>
                        </Link>
                        <Link to="/collections/qyq" className="flex flex-col items-center gap-1">
                            <img
                                src="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-8541325a-7526-4673-b4c9-5d33bda9af66.jpg?v=18415660710441147037"
                                alt="Imagen de Richard Mille"
                            />
                            <h2 className="text-xl text-center font-medium">Q&Q</h2>
                        </Link>
                        <Link to="/collections/casio" className="flex flex-col items-center gap-1">
                            <img
                                src="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-3a60d8c2-0fc0-4fd3-a23e-68dc1d371fcf.jpg?v=16735776692617055759"
                                alt="Imagen de Richard Mille"
                            />
                            <h2 className="text-xl text-center font-medium">Casio</h2>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-5">
                    <h1 className="font-medium text-4xl">Combos🤑:</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={true}
                        modules={[Pagination]}
                        className="w-full h-full"
                    >
                        {combos.map((combo) => (
                            <SwiperSlide key={combo._id} className="pb-12">
                                <ProductCard product={combo} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
