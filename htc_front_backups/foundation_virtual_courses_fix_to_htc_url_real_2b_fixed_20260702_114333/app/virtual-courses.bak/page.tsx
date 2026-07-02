import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virtual Courses - HTC Foundation",
  description: "Virtual courses from HTC Foundation.",
}

export default function VirtualCoursesPage() {
  return (
    <main className="w-full">
      {/* HTC_FOUNDATION_VIRTUAL_COURSES_REAL_1C_20260702 */}
      <section className="relative w-full min-h-[340px] bg-[#0a0a6e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,143,0.35),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(47,123,255,0.35),_transparent_42%)]" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-40 pb-20">
          <div className="max-w-4xl">
            <div className="border-l-[10px] border-[#ff008f] pl-6">
              <p className="text-white/80 uppercase tracking-[0.28em] text-xs md:text-sm font-semibold mb-4">
                HTC Foundation
              </p>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                Virtual Courses
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-[#00139b]/10 text-[#00139b] px-4 py-2 text-sm font-bold mb-5">
                Coming Soon
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a2e] mb-4">
                Online course access will be available soon.
              </h2>

              <p className="text-[#4b5563] text-lg leading-relaxed mb-8">
                This page is ready for the virtual courses catalog. No courses are displayed yet. The HTC Foundation team will add the selected courses here in the next phase.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-[#f8f9ff] p-5">
                  <p className="text-[#00139b] font-bold mb-2">Flexible learning</p>
                  <p className="text-[#6b7280] text-sm">Designed for future online access.</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#f8f9ff] p-5">
                  <p className="text-[#00139b] font-bold mb-2">Foundation programs</p>
                  <p className="text-[#6b7280] text-sm">Courses will be selected by the admin team.</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#f8f9ff] p-5">
                  <p className="text-[#00139b] font-bold mb-2">No courses yet</p>
                  <p className="text-[#6b7280] text-sm">The catalog is currently empty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}