import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Work with us - HTC Foundation",
  description: "Job application - Work with HTC Foundation.",
}

export default function JobsPage() {
  return (
    <main>
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/htcimage2.webp"
          alt="Work with us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">Work with us</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 bg-[#ff0080]" />

      <section className="w-full bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[32px] p-10 md:p-12 text-center border border-white/40 shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,10,110,0.96) 0%, rgba(45,27,105,0.96) 45%, rgba(139,26,110,0.96) 75%, rgba(255,0,128,0.96) 100%)",
            }}
          >
            <p className="text-white/80 text-xs tracking-[0.35em] uppercase">Work with us</p>
            <h2 className="mt-4 text-white text-3xl md:text-5xl font-extrabold tracking-tight">
              Coming Soon
            </h2>
            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              We’re preparing this section to share opportunities and ways to collaborate with our foundation.
            </p>
            <div className="mx-auto mt-8 h-px w-56 bg-white/35" />
            <p className="mt-6 text-white/80 text-sm">
              Please check back soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
