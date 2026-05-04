import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Gallery - HTC Foundation",
  description: "Gallery - HTC Foundation.",
}

const galleryImages = [
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.49-AM-1.jpeg",
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.32-AM-1.jpeg",
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/teacher-talking-students-college-class-scaled-1.jpg",
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.31-AM-2.jpeg",
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/group-students-learning-school-lifestyle-scaled-1.jpg",
  "https://foundationhtc.ong/do/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.31-AM-1-2.jpeg"
]

export default function GalleryPage() {
  return (
    <main className="w-full">
      {/* Banner */}
      <section className="relative w-full h-[250px] md:h-[400px]">
        <Image
          src="https://foundationhtc.ong/do/wp-content/uploads/2025/01/group-students-learning-school-lifestyle-scaled-1.jpg"
          alt="Gallery Banner"
          fill
          className="object-cover object-[74%_64%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <div className="border-l-[10px] border-[#ff008f] pl-6 mt-20 md:mt-0">
            <h2 className="text-white text-4xl md:text-5xl font-bold">Gallery</h2>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-[12%] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full relative py-16 bg-[#00139b] text-white">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Mission</h1>
              <hr className="mb-6 border-white/20" />
              <p className="text-lg leading-relaxed text-white/90">
                Our mission is to develop responsible and committed individuals who become transformative agents and contribute their professional knowledge in an ever-changing and increasingly demanding world.
              </p>
            </div>
            
            {/* Vision */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Vision</h1>
              <hr className="mb-6 border-white/20" />
              <p className="text-lg leading-relaxed text-white/90">
                We envision our Foundation serving as a model of Quality Educational Training that meets the needs of our Educational Community and its surroundings, providing efficient service to the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-[#3f3f3f]">Values</h1>
            <hr className="mb-6 border-gray-300" />
            <div className="space-y-4 text-lg leading-relaxed text-[#3f3f3f]">
              <p>
                Continuous pursuit of technical and professional meaning, human values, and family, always guided by our friendly service to the community to lead all our members on the right path.
              </p>
              <p>
                Thank you for choosing us as your option to achieve your dreams.<br />
                The mission of our Foundation is to train highly qualified professionals with a humanistic approach that emphasizes professional and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
