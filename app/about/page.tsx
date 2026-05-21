"use client"

import Link from "next/link"
import { Footer } from "@/components/sections/footer"
import BookSlider from "@/components/ui/book-slider"

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fff" }} className="min-h-screen">

      {/* ── Nav ── */}
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

      {/* ── Hero ── */}
      <section className="px-[4vw] pt-[clamp(2rem,6vw,4rem)] pb-[4vw]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          01 — About Me
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />

        <h1
          className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight mb-[3vw]"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Hi, I'm
          <br />
          <span style={{ color: "#C3E41D" }}>Om</span>
          <br />
          Raut.
        </h1>

        <hr className="border-t border-white/10 mb-[3vw]" />

        <div className="flex flex-col lg:flex-row gap-[4vw] max-w-5xl">
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-normal leading-relaxed text-white/70 max-w-[50ch]">
            I'm a full-stack developer and designer based in India. I build fast, beautiful, and
            functional web experiences — from pixel-perfect UIs to robust backend systems.
          </p>
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-normal leading-relaxed text-white/70 max-w-[50ch]">
            I'm passionate about clean code, great design, and solving real problems through
            technology. When I'm not coding, I'm reading, exploring ideas, and learning something new.
          </p>
        </div>

        <hr className="border-t border-white/10 mt-[3vw] mb-[3vw]" />

        {/* Stats */}
        <div className="flex flex-wrap gap-[4vw]">
          {[
            { num: "6+", label: "Projects Shipped" },
            { num: "3+", label: "Years Building" },
            { num: "10+", label: "Technologies" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              >
                {s.num}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="px-[4vw] py-[4vw]" style={{ backgroundColor: "#111" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          02 — Skills & Stack
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />

        <div className="flex flex-wrap gap-[3vw]">
          {[
            { cat: "Frontend", items: "React · Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP" },
            { cat: "Backend", items: "Node.js · Express · REST APIs · WebSockets" },
            { cat: "Database", items: "MongoDB · PostgreSQL" },
            { cat: "Tools", items: "Git · Figma · Netlify · Vercel · VS Code" },
            { cat: "Mobile", items: "React Native" },
            { cat: "Data Viz", items: "D3.js · Recharts" },
          ].map((s) => (
            <div key={s.cat} className="min-w-[200px] flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#C3E41D" }}>
                {s.cat}
              </p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] text-white/60 leading-relaxed">
                {s.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inspirations / Book Slider ── */}
      <section className="px-[4vw] py-[4vw]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          03 — My Inspirations
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />

        <h2
          className="text-[clamp(2rem,6vw,6rem)] font-bold leading-[0.85] uppercase tracking-tight mb-[3vw]"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          What I'm
          <br />
          <span style={{ color: "#C3E41D" }}>Reading</span>
        </h2>

        <p className="text-[clamp(0.85rem,1.3vw,1rem)] text-white/40 mb-[3vw] uppercase tracking-[0.2em]">
          ← Click the corners to flip pages →
        </p>

        <div className="flex justify-center">
          <BookSlider />
        </div>

        <p className="text-center text-white/30 italic text-sm mt-8">
          "Reading is to the mind what exercise is to the body." — Joseph Addison
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="px-[4vw] py-[4vw]" style={{ backgroundColor: "#C3E41D", color: "#000" }}>
        <hr className="border-t border-black/20 mb-[3vw]" />
        <h2
          className="text-[clamp(2.5rem,8vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight mb-[3vw]"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Let's Work
          <br />
          Together.
        </h2>
        <hr className="border-t border-black/20 mb-[3vw]" />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-3 text-[clamp(0.9rem,1.5vw,1.1rem)] font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            Get In Touch
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-[clamp(0.9rem,1.5vw,1.1rem)] font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            View Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
