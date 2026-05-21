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

    const message = `Hi Om! I'd like to discuss a project with you.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Description: ${formData.description}

Looking forward to connecting!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917020706900?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    "w-full bg-transparent border-b-2 border-white/20 focus:border-[#C3E41D] outline-none py-3 text-white placeholder-white/30 text-[clamp(0.9rem,1.2vw,1rem)] transition-colors duration-300"

  const selectClass =
    "w-full bg-[#0a0a0a] border-b-2 border-white/20 focus:border-[#C3E41D] outline-none py-3 text-white text-[clamp(0.9rem,1.2vw,1rem)] transition-colors duration-300 cursor-pointer"

  const labelClass =
    "block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2"

  return (
    <section
      id="contact-form"
      className="relative w-full min-h-screen flex flex-col justify-between gap-6 px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw]"
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      {/* Header */}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
        06 — Start A Project
      </p>

      <hr className="border-t border-white/10" />

      {/* Big heading */}
      <div>
        <h2
          className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Let's
          <br />
          <span style={{ color: "#C3E41D" }}>Build</span>
          <br />
          Together.
        </h2>
      </div>

      <hr className="border-t border-white/10" />

      {/* Sub-copy */}
      <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.5rem)] font-normal leading-relaxed text-white/70">
        Tell me about your project. I'll get back to you via WhatsApp — usually within a few hours.
      </p>

      <hr className="border-t border-white/10" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[4vw] gap-y-8 mb-8">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[4vw] gap-y-8 mb-8">
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label htmlFor="projectType" className={labelClass}>Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className={selectClass}
            >
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

        {/* Row 3 */}
        <div className="mb-8">
          <label htmlFor="budget" className={labelClass}>Budget Range *</label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select budget</option>
            <option value="Under ₹10,000">Under ₹10,000</option>
            <option value="₹10,000 - ₹25,000">₹10,000 – ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
            <option value="Let's Discuss">Let's Discuss</option>
          </select>
        </div>

        {/* Row 4 */}
        <div className="mb-10">
          <label htmlFor="description" className={labelClass}>Project Description *</label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Describe your idea, features, timeline..."
          />
        </div>

        <hr className="border-t border-white/10 mb-8" />

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            type="submit"
            className="group flex items-center gap-4 text-[clamp(1rem,2vw,1.25rem)] font-bold uppercase tracking-widest text-[#C3E41D] hover:text-white transition-colors duration-300"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#C3E41D] group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#C3E41D] group-hover:text-black transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            Send via WhatsApp
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Opens WhatsApp · Direct message to Om Raut
          </p>
        </div>
      </form>
    </section>
  )
}

export { ContactForm }
