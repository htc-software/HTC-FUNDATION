import Link from "next/link"
import Image from "next/image"

const LOGO_LIGHT =
  "/htc-foundation-1.webp"

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
              src={LOGO_LIGHT}
              alt="HTC Foundation Logo"
              width={190}
              height={48}
              className="object-contain"
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
                <Link href="/our-story" className="text-white/80 hover:text-white transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
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
                <a href="tel:+18002400868" className="text-white/80 hover:text-white transition-colors">
                  1-800-240-0868
                </a>
              </li>
              <li>
                <a
                  href="mailto:coordinator@hudsontrainingcenter.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  coordinator@hudsontrainingcenter.com
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
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="/privacy-policy-2" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-white/80 text-sm mt-2">
            {"Foundation for Hudson Training Center \u00A9 2025. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
