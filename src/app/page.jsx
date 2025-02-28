import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Clock, ChevronRight, Mail } from "lucide-react"

// Components
import CombosSwiper from "@/components/combosSwiper"
import ModelViewer from "@/components/modelViewer"
import { Button } from "@/components/ui/button"

// Hooks
import { useGetData } from "@/hooks/useFetch"

export const metadata = {
  title: "Inicio | Tempus Elite",
  description: "Tempus Elite - Tienda de relojes de lujo para quienes aprecian la elegancia atemporal",
}

export default async function Home() {
  const { watches: combos, pages } = await useGetData("/api/watches?collection=combos")

  if (!combos) return { notFound: true }

  return (
    <main className="flex flex-col space-y-24 pb-24">
      <section className="relative w-full min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-16 relative z-10">
          
          <div className="absolute top-0 right-4 md:right-10 flex flex-col gap-4 py-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
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
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:info@tempuselite.com"
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
                  Donde la <span className="text-yellow-500 font-medium">elegancia</span> se encuentra al alcance de{" "}
                  <span className="text-yellow-500 font-medium">todos!</span>
                </p>
              </div>

              <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                Creemos que la elegancia y la precisión no tienen por qué costar una fortuna. Descubre nuestra colección
                exclusiva de relojes de las marcas más prestigiosas del mundo, a precios que se adaptan a tu estilo de
                vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 h-auto rounded-md transition-all duration-300 shadow-lg shadow-yellow-500/20"
                  style={{ borderRadius: "0.5rem" }}
                >
                  Explorar Colección
                </Button>
                <Link href="https://wa.link/i0yu7k" target="_blank">
                  <Button
                    variant="outline"
                    className="border-yellow-500/30 hover:border-yellow-500 text-white hover:text-yellow-500 font-medium px-8 py-6 h-auto rounded-md transition-all duration-300"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                      <Image
                        src={"/person.png"}
                        alt="Cliente satisfecho"
                        width={32}
                        height={32}
                        className="object-cover"
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-yellow-500 font-medium">+100</span> clientes satisfechos
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] h-[500px] animate-float">
                <ModelViewer />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-3rem] left-[32rem] transform -translate-x-1/2 flex flex-col items-center gap-2  animate-bounce-slow">
            <span className="text-xl  text-white-400">Descubre más</span>
            <ChevronRight className="w-5 h-5 text-yellow-500 rotate-90" />
          </div>
        </div>
      </section>

      <section className="w-full px-4">
        <div className="container mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
            <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Descubre</span>
            <h2 className="text-3xl md:text-4xl font-bold">Nuestras Colecciones Exclusivas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
              Explora nuestras categorías cuidadosamente seleccionadas para encontrar el reloj perfecto que refleje tu
              personalidad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
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
                <p className="text-yellow-500 font-medium text-lg">Nuestros combos</p>
                <h2 className="text-5xl md:text-6xl font-bold text-pretty leading-[1.1]">
                  ¡El <span className="text-yellow-500">combo perfecto</span> para ti está aquí!
                </h2>
              </div>

              <p className="text-base text-gray-300 leading-relaxed">
                Porque sabemos que el estilo importa, hemos creado combinaciones únicas de relojes para que lleves lo
                mejor, siempre. Descubre la perfecta armonía entre elegancia y funcionalidad.
              </p>

              <Link href="/collections/combos">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 h-auto rounded-md transition-all duration-300 shadow-lg shadow-yellow-500/20 w-fit">
                  Ver Todos los Combos
                </Button>
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
            <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Destacados</span>
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
            <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre por qué nuestros clientes confían en Tempus Elite para sus relojes de lujo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Los relojes de Tempus Elite han superado mis expectativas. La calidad es excepcional y el servicio al cliente es impecable."
              author="Carlos Mendoza"
              role="Cliente desde 2021"
            />
            <TestimonialCard
              quote="Compré un combo de relojes como regalo para mi esposo y quedó encantado. Definitivamente volveré a comprar aquí."
              author="María Fernández"
              role="Cliente desde 2022"
            />
            <TestimonialCard
              quote="La relación calidad-precio es inmejorable. He comprado varios relojes y todos han sido exactamente como se describen."
              author="Javier Rodríguez"
              role="Cliente desde 2020"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-yellow-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold">Mantente Informado</h2>
                <p className="text-gray-400 max-w-xl">
                  Suscríbete para recibir las últimas novedades, ofertas exclusivas y lanzamientos de nuevas
                  colecciones.
                </p>
              </div>

              <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 h-auto rounded-md transition-all duration-300">
                  Suscribirse
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                Al suscribirte, aceptas nuestra{" "}
                <Link href="/privacy" className="text-yellow-500 hover:underline">
                  Política de Privacidad
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CategoryCard({ href, image, title }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={`Categoría ${title}`}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 z-20">
        <h3 className="text-xl font-medium text-center">{title}</h3>
        <div className="w-10 h-0.5 bg-yellow-500 mx-auto mt-2 transition-all duration-300 group-hover:w-16"></div>
      </div>
    </Link>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-yellow-500/30 transition-colors duration-300">
      <div className="text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="text-gray-300 italic">{quote}</p>
      <div className="mt-auto pt-4 border-t border-gray-800">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  )
}

