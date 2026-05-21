"use client"

import Link from "next/link"
import { Footer } from "@/components/sections/footer"

const services = [
  {
    num: "01",
    title: "Web Development",
    price: "₹8,000 – ₹15,000",
    description: "Custom websites and web apps built with Next.js — fast, SEO-optimized, and production-ready.",
    features: ["React / Next.js", "Node.js Backend", "Database Integration", "API Development"],
    bg: "#C3E41D",
    color: "#000",
  },
  {
    num: "02",
    title: "Real-time Applications",
    price: "₹10,000 – ₹18,000",
    description: "WebSocket-powered apps — live dashboards, chat systems, and collaborative tools.",
    features: ["WebSocket Implementation", "Live Data Visualization", "Real-time Chat", "Collaborative Features"],
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "03",
    title: "Data Visualization",
    price: "₹12,000 – ₹20,000",
    description: "Interactive dashboards and analytics platforms built with D3.js and Recharts.",
    features: ["D3.js Visualizations", "Custom Charts", "Analytics Dashboard", "Data Processing"],
    bg: "#1A3DE8",
    color: "#fff",
  },
  {
    num: "04",
    title: "UI/UX Design",
    price: "₹5,000 – ₹12,000",
    description: "Clean, intuitive interfaces designed in Figma and brought to life with pixel-perfect code.",
    features: ["Figma Prototyping", "Responsive Design", "Design Systems", "User Research"],
    bg: "#F5F0E8",
    color: "#000",
  },
  {
    num: "05",
    title: "Full Stack Projects",
    price: "₹15,000 – ₹40,000",
    description: "End-to-end development — frontend, backend, database, and deployment all handled by one person.",
    features: ["Complete Architecture", "Frontend + Backend", "Database Design", "Deployment"],
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "06",
    title: "Consultation",
    price: "₹2,000 / session",
    description: "Tech stack advice, code reviews, architecture planning — expert guidance before you build.",
    features: ["Tech Stack Review", "Code Audit", "Architecture Planning", "1-on-1 Session"],
    bg: "#C3E41D",
    color: "#000",
  },
]

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fff" }} className="min-h-screen">

      {/* Nav */}
      <nav className="flex items-center justify-between px-[4vw] py-6">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-[#C3E41D] transition-colors duration-300"
        >
          ← Back Home
        </Link>
        <span
          className="text-2xl font-bold"
          style={{ fontFamily: "'Brush Script MT', cursive", color: "#C3E41D" }}
        >
          O
        </span>
      </nav>

      {/* Header */}
      <section className="px-[4vw] pt-[clamp(2rem,6vw,4rem)] pb-[4vw]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          Services
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />
        <h1
          className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          What
          <br />
          I <span style={{ color: "#C3E41D" }}>Build</span>
          <br />
          For You.
        </h1>
        <hr className="border-t border-white/10 mt-[3vw]" />
      </section>

      {/* Service Cards */}
      <section>
        {services.map((s) => (
          <div
            key={s.num}
            className="px-[4vw] py-[4vw] flex flex-col lg:flex-row justify-between gap-[4vw]"
            style={{ backgroundColor: s.bg, color: s.color }}
          >
            {/* Left */}
            <div className="flex-1">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ opacity: 0.5 }}
              >
                {s.num}
              </p>
              <h2
                className="text-[clamp(2rem,6vw,6rem)] font-bold leading-[0.85] uppercase tracking-tight mb-4"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {s.title}
              </h2>
              <p
                className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold"
                style={{ opacity: 0.6 }}
              >
                {s.price}
              </p>
            </div>

            {/* Right */}
            <div className="flex-1 max-w-lg">
              <hr className="border-t mb-6" style={{ borderColor: s.color === "#fff" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }} />
              <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed mb-6" style={{ opacity: 0.7 }}>
                {s.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 border"
                    style={{ borderColor: s.color === "#fff" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-[4vw] py-[4vw]">
        <hr className="border-t border-white/10 mb-[3vw]" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-white/60 max-w-[40ch]">
            Ready to start? Tell me about your project and I'll get back to you within a few hours.
          </p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-3 text-[clamp(0.9rem,1.5vw,1.1rem)] font-bold uppercase tracking-widest text-[#C3E41D] hover:text-white transition-colors duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#C3E41D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            Start A Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
