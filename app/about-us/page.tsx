import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - HTC Foundation",
  description: "Learn about HTC Foundation - Foundation for Hudson Training Center Inc.",
}

const elements = [
  {
    title: "Core Purpose",
    description:
      "To empower individuals with accessible, high-quality vocational training, fostering economic opportunity and workforce readiness in high-growth sectors.",
  },
  {
    title: "Key Actions",
    description:
      "By providing strategic funding, developing robust partnerships, and delivering essential support services, we connect learners to industry-recognized skills and sustainable careers.",
  },
  {
    title: "Target Audience",
    description:
      "Serving our Latino Community, seeking career advancement to build resilient futures.",
  },
  {
    title: "Desired Impact",
    description:
      "Creating pathways to high-wage, high-skill employment, strengthening local economies, and ensuring a skilled, adaptable workforce for the future.",
  },
]

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us - Community hands together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a6e]/70 via-[#2d1b69]/60 to-[#8b1a6e]/50" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation description */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#0a0a6e] text-2xl md:text-3xl font-bold mb-6">
              Foundation For Hudson Training Center, Inc.
            </h2>
            <p className="text-[#4b5563] leading-relaxed text-justify">
              {"Foundation for Hudson Training Center Inc.\u2019s mission is to fund vocational programs focusing on connecting education with real-world jobs, bridging skills gaps, fostering economic mobility, and empowering individuals with pathways to high-demand careers through funding, mentorship, and wraparound support for technical training, industry credentials, and lifelong learning. Key elements include equitable access, partnerships with businesses, and addressing barriers, aiming for successful career entry, advancement, and economic stability for our Latino Community."}
            </p>
          </div>
          <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-presentation.jpg"
              alt="HTC Foundation presentation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pink divider */}
      <div className="w-full h-2 bg-[#ff0080]" />

      {/* Elements section */}
      <section
        className="w-full py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a0a2e 0%, #0a0a6e 50%, #1a1a8e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-12">
            Elements Of Foundation for Hudson Training Center Inc.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((element) => (
              <div
                key={element.title}
                className="bg-[#1a1a5e]/60 border border-[#2a2a7e]/50 rounded-xl p-6 hover:bg-[#1a1a5e]/80 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-4">
                  {element.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#0a0a6e] text-3xl md:text-4xl font-bold mb-4">
              Mission
            </h2>
            <div className="w-16 h-[2px] bg-[#e5e7eb] mb-6" />
            <p className="text-[#4b5563] leading-relaxed">
              {"To procure funding to provide rigorous, relevant workforce training, preparing adults for employment, career advancement, and lifelong learning in a rapidly changing global economy, for our Latino Community!"}
            </p>
          </div>
          <div>
            <h2 className="text-[#0a0a6e] text-3xl md:text-4xl font-bold mb-4">
              Vision
            </h2>
            <div className="w-16 h-[2px] bg-[#e5e7eb] mb-6" />
            <p className="text-[#4b5563] leading-relaxed">
              {"HTC Foundation is a Latino Empowerment Foundation, envisioning a future where Latinos achieve full potential, economic mobility, and leadership, building thriving, equitable communities through access to Vocational, Resources, and amplified voices; thus, creating a stronger America where diverse contributions are recognized and celebrated!"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
