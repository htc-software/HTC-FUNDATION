import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - HTC Foundation",
  description: "Didactic information and foundation news.",
}

export default function BlogPage() {
  return (
    <main>
      <section className="w-full bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[32px] p-10 md:p-12 text-center border border-white/40 shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,10,110,0.96) 0%, rgba(45,27,105,0.96) 45%, rgba(139,26,110,0.96) 75%, rgba(255,0,128,0.96) 100%)",
            }}
          >
            <p className="text-white/80 text-xs tracking-[0.35em] uppercase">Blog</p>
            <h1 className="mt-4 text-white text-3xl md:text-5xl font-extrabold tracking-tight">
              Coming Soon
            </h1>
            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              We’re building this section to share updates, stories, and resources for our community.
            </p>
            <div className="mx-auto mt-8 h-px w-56 bg-white/35" />
            <p className="mt-6 text-white/80 text-sm">
              Thank you for your patience.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
