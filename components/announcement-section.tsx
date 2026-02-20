import Image from "next/image"

export function AnnouncementSection() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/announcement-bg.jpg"
          alt="Technical training background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a6e]/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-xl md:text-3xl leading-relaxed max-w-3xl">
          {"We are Thankful to Announce,"}
          <br />
          {"That we are Now"}
          <br />
          {"A Federally Recognized"}
          <br />
          {"501(c)(3) "}
          <span className="font-bold">Non Profit Organization</span>!
        </p>
        <div className="w-48 h-[2px] bg-white my-8" />
        <p className="text-white text-lg md:text-2xl leading-relaxed">
          {"Tax Exempt Status Granted"}
          <br />
          {"Internal Revenue Service (IRS)"}
        </p>
      </div>
    </section>
  )
}
