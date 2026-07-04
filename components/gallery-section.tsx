import Image from "next/image"

const galleryImages = [
  { src: "/htcimage1.webp", alt: "Hands-on electrical training", span: "col-span-2 row-span-2" },
  { src: "/AboutUs.webp", alt: "HTC Foundation team", span: "" },
  { src: "/htcimage2.webp", alt: "Vocational training class", span: "" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-[#f5f5f5] py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-3 auto-rows-[130px] md:auto-rows-[190px] gap-3 md:gap-4">
        {galleryImages.map((img) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-2xl shadow-md group ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
