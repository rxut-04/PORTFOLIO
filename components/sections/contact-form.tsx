"use client"

import type React from "react"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi Om! I'd like to discuss a project with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nDescription: ${formData.description}\n\nLooking forward to connecting!`
    window.open(`https://wa.me/917020706900?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = "w-full bg-transparent border-b-2 border-white/20 focus:border-[#C3E41D] outline-none py-3 text-white placeholder-white/30 text-base transition-colors duration-300"
  const selectClass = "w-full bg-[#0a0a0a] border-b-2 border-white/20 focus:border-[#C3E41D] outline-none py-3 text-white text-base transition-colors duration-300 cursor-pointer"
  const labelClass = "block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2"

  return (
    <section
      id="contact-form"
      className="w-full px-4 sm:px-6 md:px-[4vw] py-16 md:py-[4vw]"
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      {/* Header */}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
        06 — Start A Project
      </p>
      <hr className="border-t border-white/10 mb-8" />

      {/* Big heading */}
      <h2
        className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight mb-8"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        Let's
        <br />
        <span style={{ color: "#C3E41D" }}>Build</span>
        <br />
        Together.
      </h2>

      <hr className="border-t border-white/10 mb-8" />

      {/* Sub-copy */}
      <p className="text-base md:text-[clamp(1rem,2.5vw,1.5rem)] font-normal leading-relaxed text-white/70 mb-8 max-w-[50ch]">
        Tell me about your project. I'll get back to you via WhatsApp — usually within a few hours.
      </p>

      <hr className="border-t border-white/10 mb-8" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number *</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label htmlFor="projectType" className={labelClass}>Project Type *</label>
            <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={selectClass}>
              <option value="">Select type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Full Stack Project">Full Stack Project</option>
              <option value="Consultation">Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="budget" className={labelClass}>Budget Range *</label>
          <select id="budget" name="budget" required value={formData.budget} onChange={handleChange} className={selectClass}>
            <option value="">Select budget</option>
            <option value="Under ₹10,000">Under ₹10,000</option>
            <option value="₹10,000 - ₹25,000">₹10,000 – ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
            <option value="Let's Discuss">Let's Discuss</option>
          </select>
        </div>

        <div className="mb-10">
          <label htmlFor="description" className={labelClass}>Project Description *</label>
          <textarea id="description" name="description" required rows={4} value={formData.description} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Describe your idea, features, timeline..." />
        </div>

        <hr className="border-t border-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="submit"
            className="group flex items-center gap-4 text-base font-bold uppercase tracking-widest text-[#C3E41D] hover:text-white transition-colors duration-300"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#C3E41D] group-hover:bg-[#C3E41D] transition-all duration-300 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#C3E41D] group-hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            Send via WhatsApp
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Opens WhatsApp · Direct to Om Raut
          </p>
        </div>
      </form>
    </section>
  )
}

export { ContactForm }
