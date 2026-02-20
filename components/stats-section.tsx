"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 3800, label: "Students", prefix: "+" },
  { value: 10, label: "Instructors", prefix: "+" },
  { value: 12, label: "Courses", prefix: "+" },
  { value: 10, label: "Staff", prefix: "+" },
]

function StatCard({ value, label, prefix }: { value: number; label: string; prefix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-[#0a0a6e] mb-2">
        {prefix}{count.toLocaleString()}
      </div>
      <div className="text-lg md:text-xl text-[#0a0a2e] font-semibold">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <>
      {/* Pink banner */}
      <section className="w-full bg-[#ff0080] py-8">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center">
          To Empower our Latino Community!
        </h2>
      </section>

      {/* Stats */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>
    </>
  )
}
