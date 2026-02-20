"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-[#0a0a2e] font-medium text-sm mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] text-[#0a0a2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a6e] focus:border-transparent transition-colors"
          placeholder="Your full name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-[#0a0a2e] font-medium text-sm mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] text-[#0a0a2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a6e] focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[#0a0a2e] font-medium text-sm mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] text-[#0a0a2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a6e] focus:border-transparent transition-colors"
            placeholder="(551) 327-6662"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-[#0a0a2e] font-medium text-sm mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] text-[#0a0a2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a6e] focus:border-transparent transition-colors"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[#0a0a2e] font-medium text-sm mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#e5e7eb] text-[#0a0a2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a6e] focus:border-transparent transition-colors resize-none"
          placeholder="Write your message here..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#ff0080] text-white font-semibold py-3.5 rounded-lg hover:bg-[#e0006f] transition-colors text-lg"
      >
        Send Message
      </button>
    </form>
  )
}
