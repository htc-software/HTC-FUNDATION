"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react"

const slides = [
  {
    image: "/htcimage1.webp",
    content: (
      <p className="text-white text-xl md:text-3xl lg:text-4xl max-w-4xl leading-relaxed mb-8">
        <span className="font-bold">HTC Foundation</span> is dedicated to serving our{" "}
        <span className="font-bold">Latino Community,</span> to rise to the next level in personal and professional growth.
      </p>
    ),
  },
  {
    image: "/htcimage2.webp",
    content: (
      <p className="text-white text-xl md:text-3xl lg:text-4xl max-w-4xl leading-relaxed mb-8">
        Come Study: <span className="font-bold">Electricity, Plumbing, Heating, HVAC and more</span>, at no cost!
      </p>
    ),
  },
]

const ctaButtons = [
  {
    label: "Virtual Courses",
    sublabel: "Learn online, at your pace",
    href: "https://hudsontrainingcenter.com/forms/virtual-courses?ref=I4398HTC",
    Icon: GraduationCap,
    className:
      "border-white/20 hover:border-white/40 shadow-lg shadow-[#0a0a6e]/30 hover:shadow-[#2f7bff]/40",
    style: { background: "linear-gradient(135deg, #0a0a6e 0%, #2f7bff 100%)" },
    iconWrap: "bg-white/15",
  },
  {
    label: "Ayuda Venezuela",
    sublabel: "Apoya a nuestra gente",
    href: "/venezuela",
    Icon: HeartHandshake,
    className:
      "border-white/25 hover:border-white shadow-lg shadow-[#cf142b]/25 hover:shadow-[#ffcc00]/40",
    // Venezuela flag: amarillo, azul, rojo
    style: { background: "linear-gradient(135deg, #ffcc00 0%, #00247d 55%, #cf142b 100%)" },
    iconWrap: "bg-black/20",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative w-full h-[320px] sm:h-[360px] md:h-[390px] lg:h-[460px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="HTC Foundation vocational training"
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {slide.content}
        <div className="flex flex-col sm:flex-row gap-4">
          {ctaButtons.map((btn) => {
            const { Icon } = btn
            return (
              <Link
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noreferrer" : undefined}
                className={`group/cta flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full text-white text-left border-2 transition-all duration-300 hover:-translate-y-0.5 ${btn.className}`}
                style={btn.style}
              >
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-full ${btn.iconWrap} shrink-0 transition-transform group-hover/cta:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-bold text-base md:text-lg">{btn.label}</span>
                  <span className="text-xs md:text-sm text-white/80">{btn.sublabel}</span>
                </span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            )
          })}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors bg-transparent"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors bg-transparent"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all ${
              i === current ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
