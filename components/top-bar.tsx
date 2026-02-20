import Link from "next/link"

export function TopBar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0a0a6e] via-[#2d1b69] to-[#ff0080] py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-end gap-4">
        <Link
          href="#"
          className="text-white text-sm hover:underline"
        >
          Student Login
        </Link>
        <span className="text-white text-sm">|</span>
        <Link
          href="#"
          className="text-white text-sm hover:underline"
        >
          Instructor Login
        </Link>
      </div>
    </div>
  )
}
