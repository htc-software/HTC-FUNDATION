import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our story - HTC Foundation",
  description: "Learn the story behind HTC Foundation and Hudson Training Center.",
}

export default function OurStoryPage() {
  return (
    <main>
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="https://foundationhtc.com/wp-content/uploads/2025/12/college-science-classroom-diverse-young-south-asian-female-experimenting-with-computer-components-scaled.jpg"
          alt="Our story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">Our story</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 bg-[#ff0080]" />

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-[#0a0a2e] font-semibold mb-4">HTC Foundation Inc.</p>
            <p className="text-[#4b5563] leading-relaxed">
              In 2001 a dream was born! HTC Foundation Inc. was first born in the heart of Carlos Castillo a Dominican
              Republican native. He immigrated from the Dominican Republic to Puerto Rico as a teenager. Once an adult,
              he came to the United States. Once in the US, reality hit! The US was not the land of “golden streets!” He
              struggled with the language and a trade! He realized he needed to do something to change his life or his
              life would be a constant struggle! He made the determination to acquire the American Dream; he was ready
              to study and work hard!
            </p>
            <p className="text-[#4b5563] leading-relaxed mt-6">
              At great cost and no financial support, he studied and graduated, thus becoming a Master Technician! He
              then started his own businesses in the various trades. With over 25 years in the industry, experience,
              vocational knowledge and growth, he started Hudson Training Center Inc. He desired to help other Latinos,
              much like him, to afford a trade and change their lives. He wanted to give back, for so much he had been
              given! With much pride, he was the first Instructor at Hudson Training Center.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[420px] rounded-[28px] overflow-hidden">
              <Image
                src="https://foundationhtc.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.32-AM-1-768x1024.jpeg"
                alt="HTC Foundation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
        <Image
          src="https://foundationhtc.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-12.57.31-AM-2.jpeg"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="leading-relaxed text-white/90">
            <strong>
              Hudson Training Center started as a small school and has grown into a transformative force in the Latino
              community, changing and shaping the lives of thousands of Latinos.
            </strong>{" "}
            With 3,900 graduates to date, HTC has been able to provide vocational and hands on training in essential
            technical fields such as Plumbing, Electricity, Refrigeration, Heating, and OSHA Certifications, among
            others.
          </p>
          <p className="leading-relaxed text-white/90 mt-6">
            Upon witnessing how students struggled to pay a low weekly tuition, his vision became defined! He decided to
            help those wanting this education and change, but could not afford it.
          </p>
          <p className="leading-relaxed text-white/90 mt-6">
            HTC Foundation, a foundation dedicated to empowering our Latino Community through the gift of knowledge, a
            trade, personal and professional growth!
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-10">We invite you to embrace our VISION!</h2>
        </div>
      </section>
    </main>
  )
}
