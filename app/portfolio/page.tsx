"use client"

import Link from "next/link"
import { ProjectShowcase } from "@/components/sections/project-showcase"
import { Footer } from "@/components/sections/footer"

export default function PortfolioPage() {
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
          Projects
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />
        <h1
          className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Real
          <br />
          Work.
          <br />
          <span style={{ color: "#C3E41D" }}>Real</span>
          <br />
          Impact.
        </h1>
        <hr className="border-t border-white/10 mt-[3vw] mb-[2vw]" />
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-white/60 max-w-[50ch]">
          Six projects. Each one solving a real problem, built with production-grade code.
        </p>
      </section>

      {/* Projects */}
      <ProjectShowcase />

      {/* CTA */}
      <section className="px-[4vw] py-[4vw]" style={{ backgroundColor: "#C3E41D", color: "#000" }}>
        <hr className="border-t border-black/20 mb-[3vw]" />
        <h2
          className="text-[clamp(2rem,6vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight mb-[3vw]"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Got A
          <br />
          Project?
        </h2>
        <hr className="border-t border-black/20 mb-[3vw]" />
        <Link
          href="/#contact-form"
          className="inline-flex items-center gap-3 text-[clamp(0.9rem,1.5vw,1.1rem)] font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          Let's Build It
        </Link>
      </section>

      <Footer />
    </div>
  )
}
