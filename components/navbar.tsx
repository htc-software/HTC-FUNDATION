"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const LOGO_DARK =
  "/htc-foundation-1.webp"

const LOGO_LIGHT =
  "/htc-foundation-1.webp"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    href: "/about-us",
    children: [
      { label: "Who we are?", href: "/about-us" },
      { label: "Our story", href: "/our-story" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Work with us", href: "/jobs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Ayuda Venezuela", href: "/venezuela" },
  // HTC_FOUNDATION_VIRTUAL_COURSES_HTC_URL_REAL_2B_20260702
  { label: "Virtual Courses", href: "https://hudsontrainingcenter.com/forms/virtual-courses?ref=I4398HTC" },
  { label: "Vocational Training", href: "https://hudsontrainingcenter.com/forms/immigrant?ref=I4398HTC" },
  { label: "Donate", href: "/donate" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const onTop = !scrolled
  const useLightLogo = onTop

  const headerPositionClass = onTop
    ? "absolute top-8 left-0 right-0"
    : "fixed top-8 left-0 right-0"

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        `w-full z-40 transition-colors ${headerPositionClass} ${
          scrolled
            ? "bg-[#d9dff3]/95 shadow-sm backdrop-blur"
            : "bg-transparent"
        }`
      }
    >
      <div className="w-full flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={useLightLogo ? LOGO_LIGHT : LOGO_DARK}
            alt="HTC Foundation Logo"
            width={260}
            height={70}
            sizes="(min-width: 768px) 300px, 220px"
            className="shrink-0 w-[220px] h-auto md:w-[300px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={
                  onTop
                    ? "relative flex items-center gap-1 text-white/90 font-medium text-sm transition-colors py-2 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[#2f7bff] after:transition-all group-hover:after:w-full"
                    : "relative flex items-center gap-1 text-[#0a0a2e] font-medium text-sm transition-colors py-2 hover:text-[#0a0a6e] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[#2f7bff] after:transition-all group-hover:after:w-full"
                }
              >
                {link.label}
                {link.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div
                  className={
                    onTop
                      ? "absolute top-full left-0 bg-[#0a0a6e]/95 shadow-lg rounded-md py-2 min-w-[180px] z-50 border border-white/10"
                      : "absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50 border border-[#e5e7eb]"
                  }
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={
                        onTop
                          ? "block px-4 py-2 text-sm text-white/90 hover:bg-[#2f7bff]/25 hover:text-white transition-colors"
                          : "block px-4 py-2 text-sm text-[#0a0a2e] hover:bg-[#f5f5f5] hover:text-[#0a0a6e] transition-colors"
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://hudsontrainingcenter.com/forms/immigrant"
            target="_blank"
            rel="noreferrer"
            className="hidden"
            style={{ background: "linear-gradient(135deg, #0a0a6e, #8b1a6e)" }}
          >
            Vocational Training for our Latino Community!
          </Link>
          <Link
            href="https://www.hudsontrainingcenter.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 tracking-wide"
            style={{ background: "#0a2a8e" }}
          >
            HUDSON TRAINING CENTER
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={
            onTop ? "lg:hidden text-white" : "lg:hidden text-[#0a0a2e]"
          }
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className={
            onTop
              ? "lg:hidden bg-[#0a0a6e]/95 border-t border-white/10 px-4 py-4"
              : "lg:hidden bg-white border-t border-[#e5e7eb] px-4 py-4"
          }
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={
                  onTop
                    ? "block py-2 text-white font-medium"
                    : "block py-2 text-[#0a0a2e] font-medium"
                }
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={
                        onTop
                          ? "block py-1.5 text-sm text-white/80"
                          : "block py-1.5 text-sm text-[#6b7280]"
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="https://hudsontrainingcenter.com/forms/immigrant"
            target="_blank"
            rel="noreferrer"
            className="hidden"
            style={{ background: "linear-gradient(135deg, #0a0a6e, #8b1a6e)" }}
            onClick={() => setMobileOpen(false)}
          >
            Vocational Training for our Latino Community!
          </Link>
          <Link
            href="https://www.hudsontrainingcenter.com/"
            target="_blank"
            rel="noreferrer"
            className="block mt-3 text-white text-sm font-bold px-5 py-2.5 rounded-full text-center tracking-wide"
            style={{ background: "#0a2a8e" }}
            onClick={() => setMobileOpen(false)}
          >
            HUDSON TRAINING CENTER
          </Link>
        </div>
      )}
    </header>
  )
}