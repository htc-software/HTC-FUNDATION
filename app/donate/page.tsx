import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeartHandshake, Mail, ShieldCheck, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate - HTC Foundation",
  description: "Support HTC Foundation - Help empower our Latino Community through vocational training.",
}

export default function DonatePage() {
  const initiatives = [
    "To foster supportive community and private sector relationships to service the interest and needs of the Latino Community",
    "To inform the Latino Community about the strengths and challenges faced by Hudson Training Center Inc for expansion purposes",
    "To provide mini-grants to students to develop innovative programs and activities in Vocational and Technical Trades",
    "To provide small grants to Hudson Training Center Inc. for educational staff members to initiate quality projects consistent with the goals of the Foundation and to bring positive attention Hudson Training Center Inc.",
    "To provide scholarships to students of Hudson Training Center Inc. to further their training for licensing and entrepreneurship opportunities",
    "To make distributions, for Vocational Training, to organizations that qualify as exempt organizations under Section 501 (C) (3) of the Internal Revenue Code or any successor statute",
    "To seek donations of equipment and funds from business or individuals to support the Foundation’s Vocational training expansion for the Latino Community at large.",
  ]

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
        <div className="absolute inset-0 opacity-[0.28]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#ff0080] blur-3xl animate-pulse" />
          <div className="absolute -bottom-28 -right-24 w-[560px] h-[560px] rounded-full bg-[#0a0a6e] blur-3xl animate-pulse" />
        </div>
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
      <section className="w-full bg-[#f5f5f5] py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[36px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(10,10,110,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,110,0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute -top-28 left-1/3 w-[480px] h-[480px] rounded-full bg-[#ff0080]/30 blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full bg-[#0a0a6e]/25 blur-3xl animate-pulse" />
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div
                className="rounded-[28px] border border-white/50 shadow-sm overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,110,0.96) 0%, rgba(45,27,105,0.96) 45%, rgba(139,26,110,0.96) 75%, rgba(255,0,128,0.96) 100%)",
                }}
              >
                <div className="relative p-8 md:p-10">
                  <div className="absolute inset-0 opacity-[0.14]">
                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white blur-3xl" />
                    <div className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-white blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
                      <Sparkles className="w-4 h-4 text-white/90" />
                      <p className="text-white/80 text-xs tracking-[0.35em] uppercase">Support HTC Foundation</p>
                    </div>
                    <h2 className="mt-4 text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                      Support Our Mission
                    </h2>

                    <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
                      Your donation helps us expand access to vocational and technical training while empowering our Latino
                      Community.
                    </p>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                      <ShieldCheck className="w-5 h-5 text-white/90 mt-0.5" />
                      <p className="text-white/80 text-sm leading-relaxed">
                        Foundation for Hudson Training Center Inc. is a federally recognized 501(c)(3) non-profit organization.
                        Donations are tax-deductible to the fullest extent allowed by law.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[25, 50, 100].map((amount) => (
                        <div
                          key={amount}
                          className="group relative rounded-2xl border border-white/25 bg-white/10 p-5 text-center overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40"
                        >
                          <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[420px]" />
                          <p className="text-white text-2xl font-extrabold">${amount}</p>
                          <p className="text-white/75 text-xs mt-1 tracking-[0.22em] uppercase">One-time</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="mailto:info@foundationhtc.com?subject=Donation%20Inquiry"
                        className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#0a0a6e] font-semibold px-6 py-3 rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-white/90"
                      >
                        <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#ff0080]/30 to-transparent -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[520px]" />
                        <Mail className="w-4 h-4" />
                        Contact Us to Donate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[28px] bg-white border border-[#e5e7eb] shadow-sm overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-150">
                <div className="p-8 md:p-10">
                  <h3 className="mt-4 text-[#0a0a2e] text-2xl md:text-3xl font-extrabold tracking-tight">
                    Where Your Support Goes
                  </h3>
                  <p className="mt-3 text-[#6b7280] leading-relaxed">
                    Your generosity helps us expand programs, fund mini-grants and scholarships, and strengthen partnerships
                    that create lasting impact.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {initiatives.map((text, idx) => (
                      <div
                        key={idx}
                        className="group rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5 transition-all hover:-translate-y-0.5 hover:border-[#0a0a6e]/40 hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <p className="text-[#374151] text-sm leading-relaxed group-hover:text-[#111827]">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl border border-[#ff0080]/30 bg-[#ff0080]/5 p-6">
                    <p className="text-[#0a0a2e] font-semibold">Want to donate equipment or sponsor a program?</p>
                    <p className="mt-2 text-[#6b7280] text-sm leading-relaxed">
                      We welcome support from businesses and individuals. Reach out and we’ll guide you through the best way
                      to help.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="mailto:info@foundationhtc.com?subject=Donation%20Initiatives"
                        className="group relative inline-flex items-center justify-center gap-2 bg-[#ff0080] text-white font-semibold px-6 py-3 rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-[#e0006f]"
                      >
                        <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[520px]" />
                        <Mail className="w-4 h-4" />
                        Email Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}
