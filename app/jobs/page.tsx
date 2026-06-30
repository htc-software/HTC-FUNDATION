import type { Metadata } from "next"
import Image from "next/image"
import JobsApplicationForm from "./jobs-application-form"

export const metadata: Metadata = {
  title: "Work with us - HTC Foundation",
  description: "Apply to work with HTC Foundation.",
}

export default function JobsPage() {
  return (
    <main className="w-full">
      {/* HTC_FOUNDATION_JOBS_FRONT_REAL_1C_20260630 */}

      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="https://foundationhtc.ong/do/wp-content/uploads/2025/01/customer-service-agent-financial-advisor-call-center-employee-sits-desk-company-scaled-1.jpg"
          alt="Work with us banner"
          fill
          className="object-cover object-[67%_21%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <div className="border-l-[10px] border-[#ff008f] pl-6 mt-20 md:mt-0">
            <h2 className="text-white text-4xl md:text-5xl font-bold">Work with us</h2>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3f3f3f] mb-2">Job Application</h1>
              <h3 className="text-xl md:text-2xl text-[#3f3f3f] font-medium mb-6">
                Interested in joining the Hudson Training Center Foundation team?
              </h3>

              <hr className="my-6 border-gray-300" />

              <p className="text-[#3f3f3f] text-base leading-relaxed mb-6">
                Complete this application so our team can review your profile. If your experience matches an open opportunity, we will contact you by phone or email.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3f3f3f] mb-8">Application Requirements</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-[25px] p-6 md:p-8 shadow-sm">
                  <p className="text-[#3f3f3f] text-lg font-bold">Step 1: Online Application</p>
                  <hr className="my-4 border-gray-100" />
                  <p className="text-[#3f3f3f] italic mb-4">
                    Fill out the application and attach your resume or CV.
                  </p>
                  <ul className="list-disc list-inside text-[#3f3f3f]">
                    <li>Resume or CV</li>
                    <li>Valid contact information</li>
                    <li>Availability and preferred work location</li>
                  </ul>
                </div>

                <div className="bg-white rounded-[25px] p-6 md:p-8 shadow-sm">
                  <p className="text-[#555555] text-lg font-bold">Step 2: Review Process</p>
                  <hr className="my-4 border-gray-100" />
                  <p className="text-[#3f3f3f] italic mb-4">
                    If your profile matches our needs, our team will contact you with the next steps.
                  </p>
                  <ul className="list-disc list-inside text-[#3f3f3f]">
                    <li>Phone or email follow-up</li>
                    <li>Interview scheduling when applicable</li>
                    <li>Additional documents may be requested later if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <JobsApplicationForm />
          </div>
        </div>
      </section>
    </main>
  )
}

