"use client"

import { useState } from "react"
import { HeartHandshake, Loader2 } from "lucide-react"

const PRESET_AMOUNTS = [25, 50, 100, 250]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getAmount = (): number => {
    if (isCustom) {
      return parseFloat(customAmount) || 0
    }
    return selectedAmount || 0
  }

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount("")
    setError("")
  }

  const handleCustomFocus = () => {
    setIsCustom(true)
    setSelectedAmount(null)
    setError("")
  }

  const handleDonate = async () => {
    const amount = getAmount()

    if (amount < 1) {
      setError("Please enter a valid amount (minimum $1).")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      setError(err.message || "Failed to process donation. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => handlePresetClick(amount)}
            className={`group relative rounded-2xl border p-5 text-center overflow-hidden transition-all hover:-translate-y-0.5 cursor-pointer ${
              selectedAmount === amount && !isCustom
                ? "border-white bg-white/25 -translate-y-0.5"
                : "border-white/25 bg-white/10 hover:bg-white/15 hover:border-white/40"
            }`}
          >
            <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[420px]" />
            <p className="text-white text-2xl font-extrabold">${amount}</p>
            <p className="text-white/75 text-xs mt-1 tracking-[0.22em] uppercase">One-time</p>
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mt-4">
        <div
          className={`relative rounded-2xl border overflow-hidden transition-all ${
            isCustom
              ? "border-white bg-white/25"
              : "border-white/25 bg-white/10"
          }`}
        >
          <div className="flex items-center px-5 py-4">
            <span className="text-white text-xl font-bold mr-2">$</span>
            <input
              type="number"
              min="1"
              step="any"
              placeholder="Custom amount"
              value={customAmount}
              onFocus={handleCustomFocus}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setIsCustom(true)
                setSelectedAmount(null)
                setError("")
              }}
              className="flex-1 bg-transparent text-white text-xl font-bold placeholder:text-white/50 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-white/60 text-sm tracking-[0.22em] uppercase">USD</span>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-red-200 text-sm bg-red-500/20 border border-red-300/30 rounded-xl px-4 py-2">
          {error}
        </p>
      )}

      {/* Donate Button */}
      <div className="mt-6">
        <button
          onClick={handleDonate}
          disabled={loading}
          className="group relative w-full inline-flex items-center justify-center gap-2 bg-white text-[#0a0a6e] font-semibold px-6 py-4 rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-white/90 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
        >
          <span className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#ff0080]/30 to-transparent -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[620px]" />
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <HeartHandshake className="w-5 h-5" />
          )}
          {loading ? "Processing..." : `Donate${getAmount() > 0 ? ` $${getAmount()}` : ""}`}
        </button>
      </div>
    </div>
  )
}
