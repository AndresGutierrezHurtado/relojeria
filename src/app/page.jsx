import Image from "next/image";
import Link from "next/link";
import { Instagram, Music2, UserRound, Clock, ChevronRight, Mail, Facebook } from "lucide-react";

// Components
import CombosSwiper from "@/components/combosSwiper";
import ModelViewer from "@/components/modelViewer";
import CategoryCard from "@/components/categoryCard";
import TestimonialCard from "@/components/testimonialCard";
import Button from "@/components/ui/button";

// Hooks
import { useGetData } from "@/hooks/useFetch";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Inicio | Tempus Elite",
    description:
        "Tempus Elite - Tienda de relojes de lujo para quienes aprecian la elegancia atemporal",
};

export default async function Home() {
    const { watches: combos, pages } = await useGetData("/api/watches?collection=combos");

    if (!combos) return { notFound: true };

    return (
        <main className="flex flex-col space-y-[150px] pb-24">
            <section className="relative w-full flex pt-[60px] pb-[50px] items-center">
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="absolute top-0 right-4 md:right-10 flex flex-col gap-4 py-4 z-[1]">
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            aria-label="Instagram"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@tempus_elite_colombia?lang=es"
                            target="_blank"
                            aria-label="Tiktok"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Music2 className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            aria-label="Facebook"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link
                            href={`mailto:tempuselitesco@gmail.com?subject=Consulta%20desde%20el%20sitio%20web`}
                            aria-label="Email"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-8 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 text-sm text-gray-300 w-fit mx-auto md:mx-0">
                                <Clock className="w-4 h-4 text-yellow-500" />
                                <span>Elegancia en cada segundo</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                                    <span className="text-white">Tempus</span>
                                    <span className="text-yellow-500 italic"> Elite</span>
                                </h1>
                                <p className="text-xl text-gray-300 font-light max-w-xl">
                                    Donde la{" "}
                                    <span className="text-yellow-500 font-medium">elegancia</span>{" "}
                                    se encuentra al alcance de{" "}
                                    <span className="text-yellow-500 font-medium">todos!</span>
                                </p>
                            </div>

                            <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                                Creemos que la elegancia y la precisión no tienen por qué costar una
                                fortuna. Descubre nuestra colección exclusiva de relojes de las
                                marcas más prestigiosas del mundo, a precios que se adaptan a tu
                                estilo de vida.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button>Explorar Colección</Button>
                                <Link href="https://wa.link/i0yu7k" target="_blank">
                                    <Button variant="outline">Contáctanos</Button>
                                </Link>
                            </div>

                            <div className="text-sm text-gray-400 flex items-center gap-1">
                                <UserRound className="text-yellow-500 w-5 h-5" />
                                <span className="text-yellow-500 font-medium">+100</span> clientes
                                satisfechos
                            </div>
                        </div>

                        <div className="hidden sm:block w-full md:w-1/2 flex justify-center items-center">
                            <div className="relative w-full max-w-[500px] h-[500px] animate-float">
                                <ModelViewer />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xl  text-white-400">Descubre más</span>
                        <ChevronRight className="w-5 h-5 text-yellow-500 rotate-90" />
                    </div>
                </div>
            </section>

            <section className="w-full px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
                        <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                            Descubre
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Nuestras Colecciones Exclusivas
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
                            Explora nuestras categorías cuidadosamente seleccionadas para encontrar
                            el reloj perfecto que refleje tu personalidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 md:gap-10">
                        <CategoryCard
                            href="/collections/rolexx"
                            image="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-136e5a94-17fe-4a69-a9e8-eb98f44edfae.jpg?v=11092526891830783607"
                            title="Rolexx"
                        />
                        <CategoryCard
                            href="/collections/richard-mille"
                            image="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-b319a795-1746-4448-802f-4eefe80c809d.jpg?v=11757830867926194137"
                            title="Richard Mille"
                        />
                        <CategoryCard
                            href="/collections/qyq"
                            image="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-8541325a-7526-4673-b4c9-5d33bda9af66.jpg?v=18415660710441147037"
                            title="Q&Q"
                        />
                        <CategoryCard
                            href="/collections/casio"
                            image="http://www.businesscolombia.shop/cdn/shop/files/gempages_542554070993339638-3a60d8c2-0fc0-4fd3-a23e-68dc1d371fcf.jpg?v=16735776692617055759"
                            title="Casio"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-2/5 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-yellow-500/20 text-sm text-gray-300 w-fit">
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                <span>Ofertas Especiales</span>
                            </div>

                            <div className="w-full">
                                <p className="text-yellow-500 font-medium text-lg">
                                    Nuestros combos
                                </p>
                                <h2 className="text-5xl md:text-6xl font-bold text-pretty leading-[1.1]">
                                    ¡El <span className="text-yellow-500">combo perfecto</span> para
                                    ti está aquí!
                                </h2>
                            </div>

                            <p className="text-base text-gray-300 leading-relaxed">
                                Porque sabemos que el estilo importa, hemos creado combinaciones
                                únicas de relojes para que lleves lo mejor, siempre. Descubre la
                                perfecta armonía entre elegancia y funcionalidad.
                            </p>

                            <Link href="/collections/combos">
                                <Button>Ver Todos los Combos</Button>
                            </Link>
                        </div>

                        <div className="w-full md:w-3/5 relative">
                            <Image
                                src="/hero.png"
                                alt="Imagen combo"
                                className="object-contain w-full relative z-10"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-2 mb-12">
                        <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                            Destacados
                        </span>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Combos Más Populares</h2>
                            <Link
                                href="/collections/combos"
                                className="text-yellow-500 hover:text-yellow-400 flex items-center gap-1 group"
                            >
                                Ver todos
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <CombosSwiper combos={combos} />
                </div>
            </section>

            <section className="w-full px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-2 mb-12 text-center">
                        <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                            Testimonios
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Lo Que Dicen Nuestros Clientes
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Descubre por qué nuestros clientes confían en Tempus Elite para sus
                            relojes de lujo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <TestimonialCard
                            quote="Es un reloj de excelente calidad. Cumplieron con los tiempos de entrega y su precio es muy accesible. ¡Totalmente recomendado!"
                            author="Juan Esteban López Palacios"
                            role="Cliente desde el 2025"
                        />
                        <TestimonialCard
                            quote="Compré un combo de relojes como regalo para mi esposo y quedó encantado. Definitivamente volveré a comprar aquí."
                            author="Maria Cifuentes"
                            role="Cliente desde 2024"
                        />
                        <TestimonialCard
                            quote="La relación calidad-precio es inmejorable. He comprado varios relojes y todos han sido exactamente como se describen."
                            author="Javier Rodríguez"
                            role="Cliente desde 2025"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-2 mb-12 text-center">
                        <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                            Nuestra Historia
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">Quienes Somos</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Conoce más sobre Tempus Elite y nuestra pasión por la elegancia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-8 order-2 md:order-1 ">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-yellow-500">
                                    Descubre el lujo y la elegancia en cada segundo
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    En Tempus Elite, fundada por{" "}
                                    <span className="text-yellow-500 font-medium">
                                        Andres Gutierrez
                                    </span>{" "}
                                    y{" "}
                                    <span className="text-yellow-500 font-medium">Kevin Parra</span>
                                    , creemos que un reloj no es solo un accesorio, sino una
                                    declaración de estilo y estatus.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Ofrecemos una selección exclusiva de relojes que combinan
                                    diseño, confort y sofisticación, permitiéndote experimentar la
                                    satisfacción de llevar una pieza única en tu muñeca.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <p className="text-gray-200">
                                        Calidad excepcional a precios inigualables
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <p className="text-gray-200">
                                        Atención personalizada para ayudarte a elegir el diseño
                                        perfecto
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <p className="text-gray-200">
                                        Estilo, exclusividad y distinción en cada detalle
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-900/50 rounded-xl p-6 border border-yellow-500/20">
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 ">
                                        <Clock className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            Visítanos en Bogotá, Colombia
                                        </h4>
                                        <p className="text-gray-400">
                                            Déjanos acompañarte en la elección del reloj que refleje
                                            tu personalidad y eleve tu estilo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Link href="https://wa.link/i0yu7k" target="_blank">
                                <Button>📩 Contáctanos y encuentra el reloj ideal para ti</Button>
                            </Link>
                        </div>

                        <div className="relative order-1 md:order-2 ">
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden p-6">
                                <Image
                                    src="/rolexx.webp"
                                    alt="Hero"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/[0.03] rounded-full blur-xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/[0.03] rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
