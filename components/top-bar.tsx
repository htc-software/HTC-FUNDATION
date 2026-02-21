import Link from "next/link"
import { UserRound } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0a0a6e] via-[#2d1b69] to-[#ff0080] py-1 px-4">
      <div className="w-full flex justify-end">
        <Link
          href="https://hudsontrainingcenter.com/login?ref=I4398HTC"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/15 transition-colors"
        >
          <UserRound className="w-4 h-4" />
          Login
        </Link>
      </div>
    </div>
  )
}
