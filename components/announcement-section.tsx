import Image from "next/image"

export function AnnouncementSection() {
  return (
    <section className="relative w-full py-10 md:py-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/htcimage2.webp"
          alt="Technical training background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a6e]/80" />
      </div>

      <div className="relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            After a year of dedication, patience, and belief in our mission, this milestone marks an exciting new chapter as we
            continue working towards offering <span className="text-white font-semibold">FREE Vocational Training</span>, to our
            Latino Community!
          </p>

          <div className="mt-8 md:mt-10">
            <p className="text-white/70 text-[11px] md:text-xs tracking-[0.35em] uppercase">
              We are Thankful to Announce,
            </p>

            <h2 className="mt-4 text-white font-extrabold tracking-tight leading-[1.05] text-3xl sm:text-4xl md:text-5xl">
              That we are Now
              <br />
              A Federally Recognized
              <br />
              <span className="text-white/95">501(c)(3)</span> Non Profit Organization!
            </h2>

            <div className="mx-auto mt-6 md:mt-7 h-px w-40 md:w-56 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            <div className="mt-5 inline-flex flex-col items-center gap-1">
              <p className="text-white/90 text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase">
                Tax Exempt Status Granted
              </p>
              <p className="text-white/75 text-xs md:text-sm">
                Internal Revenue Service (IRS)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
