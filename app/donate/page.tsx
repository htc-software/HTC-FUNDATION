import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Donate - HTC Foundation",
  description: "Support HTC Foundation - Help empower our Latino Community through vocational training.",
}

export default function DonatePage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
        <Image
          src="https://foundationhtc.com/wp-content/uploads/2025/12/joined-hands-teamwork-business-concept-scaled.jpg"
          alt="Donate to HTC Foundation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a6e]/70 via-[#2d1b69]/60 to-[#8b1a6e]/50" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">Donate</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Pink divider */}
      <div className="w-full h-2 bg-[#ff0080]" />

      {/* Donate Content */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#0a0a6e] text-2xl md:text-3xl font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mb-8">
            {"Your generous donation helps us provide vocational training and empower our Latino Community. Every contribution makes a difference in someone's life, helping them gain the skills they need for a brighter future."}
          </p>
          <p className="text-[#4b5563] leading-relaxed mb-12">
            {"Foundation for Hudson Training Center Inc. is a federally recognized 501(c)(3) non-profit organization. All donations are tax-deductible to the fullest extent allowed by law."}
          </p>

          {/* Donation options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[25, 50, 100].map((amount) => (
              <div
                key={amount}
                className="border-2 border-[#0a0a6e] rounded-xl p-8 hover:bg-[#0a0a6e] hover:text-white transition-colors group cursor-pointer"
              >
                <p className="text-3xl font-bold text-[#0a0a6e] group-hover:text-white transition-colors">
                  ${amount}
                </p>
                <p className="text-[#6b7280] mt-2 group-hover:text-white/80 transition-colors">
                  One-time donation
                </p>
              </div>
            ))}
          </div>

          <Link
            href="mailto:info@foundationhtc.com?subject=Donation%20Inquiry"
            className="inline-block bg-[#ff0080] text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#e0006f] transition-colors"
          >
            Contact Us to Donate
          </Link>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0a0a6e]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a0a6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-[#0a0a2e] font-bold text-lg mb-2">Fund Education</h3>
              <p className="text-[#6b7280] text-sm">
                Help provide free vocational training to those who need it most.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0a0a6e]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a0a6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-[#0a0a2e] font-bold text-lg mb-2">Build Community</h3>
              <p className="text-[#6b7280] text-sm">
                Strengthen our Latino community through skills and opportunity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0a0a6e]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0a0a6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[#0a0a2e] font-bold text-lg mb-2">Create Impact</h3>
              <p className="text-[#6b7280] text-sm">
                Every dollar creates pathways to high-wage, high-skill employment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
