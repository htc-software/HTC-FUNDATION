"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

const LOGO_DARK =
  "https://foundationhtc.com/wp-content/uploads/2025/12/foundation_logo_dark.png"

const LOGO_LIGHT =
  "https://foundationhtc.com/wp-content/uploads/2025/12/htc-foundation-1.png"

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
  { label: "Donate", href: "/donate" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const homeOnTop = isHome && !scrolled
  const useLightLogo = homeOnTop

  const headerPositionClass = isHome
    ? homeOnTop
      ? "absolute top-10 left-0 right-0"
      : "fixed top-10 left-0 right-0"
    : "sticky top-0"

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
        isHome
          ? `w-full z-40 transition-colors ${headerPositionClass} ${
              scrolled
                ? "bg-[#d9dff3]/95 shadow-sm backdrop-blur"
                : "bg-transparent"
            }`
          : `w-full bg-white z-40 shadow-sm ${headerPositionClass}`
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={useLightLogo ? LOGO_LIGHT : LOGO_DARK}
            alt="HTC Foundation Logo"
            width={260}
            height={70}
            className="w-[180px] h-auto md:w-[240px] object-contain"
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
                  isHome
                    ? homeOnTop
                      ? "relative flex items-center gap-1 text-white/90 font-medium text-sm transition-colors py-2 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[#2f7bff] after:transition-all group-hover:after:w-full"
                      : "relative flex items-center gap-1 text-[#0a0a2e] font-medium text-sm transition-colors py-2 hover:text-[#0a0a6e] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[#2f7bff] after:transition-all group-hover:after:w-full"
                    : "flex items-center gap-1 text-[#0a0a2e] font-medium text-sm hover:text-[#0a0a6e] transition-colors py-2"
                }
              >
                {link.label}
                {link.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div
                  className={
                    isHome
                      ? "absolute top-full left-0 bg-[#0a0a6e]/95 shadow-lg rounded-md py-2 min-w-[180px] z-50 border border-white/10"
                      : "absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50"
                  }
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={
                        isHome
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

        {/* CTA Button */}
        <Link
          href="https://hudsontrainingcenter.com/forms/immigrant"
          target="_blank"
          rel="noreferrer"
          className={
            isHome
              ? homeOnTop
                ? "hidden lg:inline-block text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors border border-white/60 hover:bg-white/10"
                : "hidden lg:inline-block text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors border border-white/30 hover:bg-white/10"
              : "hidden lg:inline-block bg-[#ff0080] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#e0006f] transition-colors border border-white/30"
          }
          style={
            isHome
              ? { background: "linear-gradient(135deg, #0a0a6e, #8b1a6e)" }
              : undefined
          }
        >
          Vocational Training for our Latino Community!
        </Link>

        {/* Mobile menu button */}
        <button
          className={
            isHome
              ? homeOnTop
                ? "lg:hidden text-white"
                : "lg:hidden text-[#0a0a2e]"
              : "lg:hidden text-[#0a0a2e]"
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
            isHome
              ? "lg:hidden bg-[#0a0a6e]/95 border-t border-white/10 px-4 py-4"
              : "lg:hidden bg-white border-t border-[#e5e7eb] px-4 py-4"
          }
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={
                  isHome
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
                        isHome
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
            className={
              isHome
                ? "block mt-4 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center border border-white/60"
                : "block mt-4 bg-[#ff0080] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center"
            }
            style={
              isHome
                ? { background: "linear-gradient(135deg, #0a0a6e, #8b1a6e)" }
                : undefined
            }
            onClick={() => setMobileOpen(false)}
          >
            Vocational Training for our Latino Community!
          </Link>
        </div>
      )}
    </header>
  )
}
