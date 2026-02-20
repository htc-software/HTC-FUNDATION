import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full">
      {/* Main footer */}
      <div
        className="w-full py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a0a6e 0%, #2d1b69 40%, #8b1a6e 70%, #c2185b 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <Image
              src="/images/htc-logo.png"
              alt="HTC Foundation Logo"
              width={70}
              height={70}
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl leading-tight">
                HTC Foundation
              </span>
              <span className="text-[#ff0080] text-sm italic">
                To Empower our Latino Community!
              </span>
            </div>
          </div>

          {/* About us links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About us</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-white transition-colors">
                  Who we are?
                </Link>
              </li>
              <li>
                <Link href="/about-us#story" className="text-white/80 hover:text-white transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {"United States 🇺🇸"}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+15513276662" className="text-white/80 hover:text-white transition-colors">
                  +1 (551) 327-6662
                </a>
              </li>
              <li>
                <a href="mailto:info@foundationhtc.com" className="text-white/80 hover:text-white transition-colors">
                  info@foundationhtc.com
                </a>
              </li>
              <li className="text-white/80">1600 E St Georges Ave, Linden, NJ 07036</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full py-6 px-4"
        style={{
          background: "linear-gradient(135deg, #0a0a6e 0%, #2d1b69 50%, #8b1a6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto bg-[#1a1a3e]/60 rounded-xl py-4 px-6 text-center">
          <p className="text-white/80 text-sm">
            Terms and Conditions | Privacy Policy
          </p>
          <p className="text-white/80 text-sm mt-2">
            {"Foundation for Hudson Training Center \u00A9 2025. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
