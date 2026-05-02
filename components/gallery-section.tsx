import Image from "next/image"

export function GallerySection() {
  return (
    <section id="gallery" className="w-full">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/htcimage1.webp"
          alt="Students working at computers"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
