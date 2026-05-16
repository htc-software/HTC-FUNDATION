import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You - HTC Foundation",
  description: "Thank you for your generous donation to HTC Foundation.",
}

export default function DonateSuccessPage() {
  return (
    <main>
      <section className="w-full min-h-[60vh] bg-[#f5f5f5] py-20 px-4 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-[#0a0a2e] text-3xl md:text-4xl font-extrabold tracking-tight">
            Thank You!
          </h1>

          <p className="mt-4 text-[#6b7280] text-lg leading-relaxed">
            Your generous donation has been received. Your support helps us expand access to
            vocational and technical training while empowering our Latino Community.
          </p>

          <p className="mt-3 text-[#6b7280] text-sm">
            A confirmation email will be sent to you shortly.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0a0a6e] text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:bg-[#0a0a6e]/90"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
