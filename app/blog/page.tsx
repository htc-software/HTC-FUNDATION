import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - HTC Foundation",
  description: "Didactic information and foundation news.",
}

export default function BlogPage() {
  return (
    <main className="w-full min-h-[50vh] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3f3f3f] mb-4">Didactic information</h2>
          <p className="text-lg text-[#3f3f3f] leading-relaxed">Foundation News</p>
        </div>
      </div>
    </main>
  )
}
