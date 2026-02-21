import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - HTC Foundation",
  description: "Terms and Conditions.",
}

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#0a0a2e] text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
        </div>
      </section>
    </main>
  )
}
