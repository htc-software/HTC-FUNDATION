import type { Metadata } from "next"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - HTC Foundation",
  description: "Get in touch with HTC Foundation - Foundation for Hudson Training Center Inc.",
}

export default function ContactUsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a6e]/70 via-[#2d1b69]/60 to-[#8b1a6e]/50" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Pink divider */}
      <div className="w-full h-2 bg-[#ff0080]" />

      {/* Contact Content */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-[#0a0a6e] text-2xl md:text-3xl font-bold mb-8">
              Get In Touch
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a0a6e] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0a0a2e] font-bold text-lg">Address</h3>
                  <p className="text-[#4b5563] mt-1">1600 E St Georges Ave, Linden, NJ 07036</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a0a6e] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0a0a2e] font-bold text-lg">Phone</h3>
                  <a href="tel:+15513276662" className="text-[#4b5563] mt-1 hover:text-[#0a0a6e] transition-colors">
                    +1 (551) 327-6662
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a0a6e] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0a0a2e] font-bold text-lg">Email</h3>
                  <a href="mailto:info@foundationhtc.com" className="text-[#4b5563] mt-1 hover:text-[#0a0a6e] transition-colors">
                    info@foundationhtc.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5!2d-74.24!3d40.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1600+E+St+Georges+Ave%2C+Linden%2C+NJ+07036!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HTC Foundation location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-[#0a0a6e] text-2xl md:text-3xl font-bold mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
