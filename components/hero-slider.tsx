"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/htcimage1.webp",
    content: (
      <p className="text-white text-xl md:text-3xl lg:text-4xl max-w-4xl leading-relaxed mb-8">
        <span className="font-bold">HTC Foundation</span> is dedicated to serving our{" "}
        <span className="font-bold">Latino Community,</span> to rise to the next level in personal and professional growth.
      </p>
    ),
    cta: "Vocational Training for our Latino Community!",
    ctaLink: "https://hudsontrainingcenter.com/forms/immigrant?ref=I4398HTC",
  },
  {
    image: "/htcimage2.webp",
    content: (
      <p className="text-white text-xl md:text-3xl lg:text-4xl max-w-4xl leading-relaxed mb-8">
        Come Study: <span className="font-bold">Electricity, Plumbing, Heating, HVAC and more</span>, at no cost!
      </p>
    ),
    cta: "Vocational Training for our Latino Community!",
    ctaLink: "/contact-us",
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
    <section className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[560px] overflow-hidden">
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
          <Link
            href={slide.ctaLink}
            target={slide.ctaLink.startsWith("http") ? "_blank" : undefined}
            rel={slide.ctaLink.startsWith("http") ? "noreferrer" : undefined}
            className="inline-block px-8 py-3.5 rounded-full text-white font-medium text-base md:text-lg border-2 border-white/40 hover:bg-white/10 transition-colors"
            style={{
              background: "linear-gradient(135deg, #0a0a6e, #8b1a6e)",
            }}
          >
            {slide.cta}
          </Link>
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
