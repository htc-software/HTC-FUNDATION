import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeartHandshake, ShieldCheck, Users, AlertTriangle, HandHeart, Play } from "lucide-react"
import { DonationForm } from "@/components/donation-form"

export const metadata: Metadata = {
  title: "Ayuda a Venezuela – Terremotos 2026 | HTC Foundation",
  description:
    "El 24 de junio de 2026 un doble terremoto devastó el norte de Venezuela. Únete a HTC Foundation y dona para llevar ayuda humanitaria a las familias afectadas.",
}

const stats = [
  { value: "1.719+", label: "Personas fallecidas", icon: AlertTriangle },
  { value: "5.000+", label: "Personas heridas", icon: Users },
  { value: "~50.000", label: "Personas desaparecidas", icon: HandHeart },
  { value: "7,5", label: "Magnitud del sismo principal", icon: AlertTriangle },
]

type GalleryItem =
  | { type: "image"; src: string; alt: string; caption: string }
  | {
      type: "video"
      videoSrc: string
      href: string
      alt: string
      caption: string
    }

const gallery: GalleryItem[] = [
  {
    type: "image",
    src: "/venezuela/terremoto-principal.jpg",
    alt: "Daños provocados por los terremotos del 24 de junio de 2026 en Venezuela",
    caption: "Daños estructurales tras el doble terremoto del 24 de junio de 2026.",
  },
  {
    type: "video",
    videoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Tomas_a%C3%A9reas_de_edificios_destruidos_en_La_Guaira_por_los_terremotos_de_Venezuela.webm#t=1",
    href: "https://commons.wikimedia.org/wiki/File:Tomas_a%C3%A9reas_de_edificios_destruidos_en_La_Guaira_por_los_terremotos_de_Venezuela.webm",
    alt: "Tomas aéreas de edificios destruidos en La Guaira por los terremotos",
    caption: "Tomas aéreas de edificios destruidos en La Guaira. Haz clic para ver el video.",
  },
  {
    type: "video",
    videoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Recorrido_por_el_oeste_de_Caracas_evidencia_da%C3%B1os_de_consideraci%C3%B3n.webm#t=1",
    href: "https://commons.wikimedia.org/wiki/File:Recorrido_por_el_oeste_de_Caracas_evidencia_da%C3%B1os_de_consideraci%C3%B3n.webm",
    alt: "Recorrido por el oeste de Caracas que evidencia los daños del terremoto",
    caption: "Recorrido por el oeste de Caracas evidencia daños. Haz clic para ver el video.",
  },
  {
    type: "image",
    src: "/venezuela/mapa-intensidad.jpg",
    alt: "Mapa de intensidad del terremoto de magnitud 7,5 en Yumare, Venezuela (USGS)",
    caption: "Mapa de intensidad sísmica del evento principal (fuente: USGS).",
  },
]

export default function VenezuelaPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
        <Image
          src="/venezuela/terremoto-principal.jpg"
          alt="Terremotos de Venezuela de 2026"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00247D]/85 via-[#0a0a2e]/70 to-[#CF142B]/55" />

        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-11 md:w-20 md:h-14 rounded-md overflow-hidden ring-2 ring-white/70 shadow-lg shrink-0">
                <Image
                  src="/venezuela/bandera-venezuela.svg"
                  alt="Bandera de Venezuela"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#FCDD09] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                  Emergencia Humanitaria
                </p>
                <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
                  Unidos por Venezuela
                </h1>
              </div>
            </div>
            <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl">
              El 24 de junio de 2026, un doble terremoto sacudió el norte de Venezuela. Hoy, miles de
              familias lo han perdido todo. Tu donación puede marcar la diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* Tricolor divider */}
      <div className="w-full h-2 flex">
        <div className="flex-1 bg-[#FCDD09]" />
        <div className="flex-1 bg-[#00247D]" />
        <div className="flex-1 bg-[#CF142B]" />
      </div>

      {/* Stats */}
      <section className="w-full bg-[#0a0a2e] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:-translate-y-0.5 hover:border-[#FCDD09]/40"
                >
                  <Icon className="w-6 h-6 text-[#FCDD09] mx-auto" />
                  <p className="mt-3 text-white text-3xl md:text-4xl font-extrabold">{s.value}</p>
                  <p className="mt-1 text-white/70 text-sm">{s.label}</p>
                </div>
              )
            })}
          </div>
          <p className="mt-5 text-center text-white/45 text-xs">
            Cifras preliminares al 29 de junio de 2026. Fuentes: USGS y Wikipedia.
          </p>
        </div>
      </section>

      {/* What happened + Donation */}
      <section className="w-full bg-[#f5f5f5] py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Story */}
            <div className="lg:col-span-7">
              <div className="rounded-[28px] bg-white border border-[#e5e7eb] shadow-sm overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#CF142B]/20 bg-[#CF142B]/5 px-4 py-2">
                    <AlertTriangle className="w-4 h-4 text-[#CF142B]" />
                    <p className="text-[#CF142B] text-xs font-semibold tracking-[0.25em] uppercase">
                      Lo que ocurrió
                    </p>
                  </div>

                  <h2 className="mt-4 text-[#0a0a2e] text-2xl md:text-3xl font-extrabold tracking-tight">
                    El terremoto más grave del siglo en Venezuela
                  </h2>

                  <p className="mt-4 text-[#374151] text-sm md:text-base leading-relaxed">
                    El <strong>24 de junio de 2026</strong>, a las 6:04 de la tarde, dos potentes
                    sismos golpearon el norte de Venezuela con apenas 39 segundos de diferencia. El
                    primero, de magnitud <strong>7,2</strong>, tuvo su epicentro cerca de San Felipe
                    (estado Yaracuy); el segundo, de magnitud <strong>7,5</strong>, se registró cerca
                    de Yumare. Se trata del terremoto más devastador que ha vivido el país en más de
                    125 años.
                  </p>

                  <p className="mt-4 text-[#374151] text-sm md:text-base leading-relaxed">
                    El temblor se sintió con fuerza en <strong>Caracas, Maracay, Valencia, La Guaira</strong>{" "}
                    y numerosas localidades del norte del país, donde se reportó destrucción
                    generalizada: viviendas y edificios colapsados, hospitales dañados, vías de
                    transporte interrumpidas y afectaciones en el Aeropuerto Internacional de Maiquetía.
                  </p>

                  <p className="mt-4 text-[#374151] text-sm md:text-base leading-relaxed">
                    Las cifras preliminares hablan de más de <strong>1.719 fallecidos</strong>, más de{" "}
                    <strong>5.000 heridos</strong> y cerca de <strong>50.000 personas desaparecidas</strong>.
                    Se declaró el estado de emergencia nacional y equipos de rescate locales e
                    internacionales trabajan contra el reloj para auxiliar a las familias afectadas.
                  </p>

                  <div className="mt-6 rounded-2xl border border-[#00247D]/15 bg-[#00247D]/5 p-5">
                    <p className="text-[#0a0a2e] text-sm md:text-base leading-relaxed">
                      <strong>Cada aporte cuenta.</strong> Tu donación ayuda a financiar alimentos,
                      agua potable, refugio temporal, atención médica y suministros de primera
                      necesidad para quienes lo han perdido todo. Unámonos como comunidad para llevar
                      esperanza al pueblo venezolano.
                    </p>
                  </div>

                  {/* Gallery */}
                  <h3 className="mt-10 text-[#0a0a2e] text-lg font-bold tracking-tight">
                    Imágenes del incidente
                  </h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gallery.map((item, i) =>
                      item.type === "image" ? (
                        <figure
                          key={i}
                          className="group rounded-2xl overflow-hidden border border-[#e5e7eb] bg-[#f9fafb]"
                        >
                          <div className="relative w-full h-48">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <figcaption className="p-3 text-[#6b7280] text-xs leading-relaxed">
                            {item.caption}
                          </figcaption>
                        </figure>
                      ) : (
                        <figure
                          key={i}
                          className="group rounded-2xl overflow-hidden border border-[#e5e7eb] bg-[#f9fafb]"
                        >
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block relative w-full h-48 overflow-hidden"
                            aria-label={item.alt}
                          >
                            <video
                              src={item.videoSrc}
                              preload="metadata"
                              muted
                              playsInline
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                <Play className="w-6 h-6 text-[#CF142B] translate-x-0.5" fill="currentColor" />
                              </span>
                            </span>
                            <span className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                              Video
                            </span>
                          </a>
                          <figcaption className="p-3 text-[#6b7280] text-xs leading-relaxed">
                            {item.caption}
                          </figcaption>
                        </figure>
                      )
                    )}
                  </div>
                  <p className="mt-3 text-[#9ca3af] text-[11px] leading-relaxed">
                    Créditos: foto de daños vía Wikimedia Commons (CC BY 4.0); videos de Venezolana de
                    Televisión y mapa de intensidad del USGS (dominio público). Los videos se abren en
                    su fuente original en Wikimedia Commons.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-[28px] border border-white/50 shadow-sm overflow-hidden lg:sticky lg:top-28"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,36,125,0.97) 0%, rgba(10,10,46,0.97) 50%, rgba(207,20,43,0.95) 100%)",
                }}
              >
                <div className="relative p-8 md:p-10">
                  <div className="absolute inset-0 opacity-[0.12]">
                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FCDD09] blur-3xl" />
                    <div className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-white blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
                      <HeartHandshake className="w-4 h-4 text-[#FCDD09]" />
                      <p className="text-white/85 text-xs tracking-[0.3em] uppercase">
                        Dona ahora
                      </p>
                    </div>

                    <h2 className="mt-4 text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                      Ayuda a Venezuela
                    </h2>

                    <p className="mt-4 text-white/85 text-base leading-relaxed">
                      Tu donación se destina íntegramente a la ayuda humanitaria para las familias
                      afectadas por los terremotos. Cada dólar lleva alimento, refugio y esperanza.
                    </p>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                      <ShieldCheck className="w-5 h-5 text-white/90 mt-0.5" />
                      <p className="text-white/80 text-sm leading-relaxed">
                        Foundation for Hudson Training Center Inc. es una organización sin fines de
                        lucro 501(c)(3). Tu donación es segura y se procesa a través de Stripe.
                      </p>
                    </div>

                    <DonationForm
                      cause="venezuela"
                      frequencyLabel="Único"
                      customPlaceholder="Otra cantidad"
                      donateLabel="Donar"
                      processingLabel="Procesando..."
                      invalidAmountMessage="Por favor ingresa una cantidad válida (mínimo $1)."
                      genericErrorMessage="No se pudo procesar la donación. Inténtalo de nuevo."
                    />

                    <p className="mt-5 text-center text-white/60 text-xs">
                      ¿Prefieres aportar de otra forma?{" "}
                      <Link
                        href="mailto:coordinator@hudsontrainingcenter.com?subject=Ayuda%20Venezuela"
                        className="text-[#FCDD09] font-semibold hover:underline"
                      >
                        Escríbenos
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
