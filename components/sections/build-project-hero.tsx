"use client"

import Link from "next/link"

const BuildProjectHero = () => {
  return (
    <section
      className="px-4 sm:px-6 md:px-[4vw] pt-8 md:pt-[clamp(2rem,8vw,4vw)] pb-8 md:pb-[4vw] min-h-screen flex flex-col justify-between"
      style={{ backgroundColor: "#C3E41D", color: "#000" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between mb-8 md:mb-[4vw]">
        <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">
          ← Back Home
        </Link>
        <span className="text-2xl font-bold" style={{ fontFamily: "'Brush Script MT', cursive" }}>O</span>
      </nav>

      <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-4">Build Project</p>
      <hr className="border-t border-black/20 mb-6 md:mb-[3vw]" />

      <div className="flex-1 flex flex-col justify-center py-6">
        <h1
          className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          We Build<br />Your<br />Project.
        </h1>
      </div>

      <hr className="border-t border-black/20 mb-6 md:mb-[3vw]" />

      <div className="flex flex-col gap-6">
        <p className="text-base md:text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed opacity-70 max-w-lg">
          Our expert team handles every step — from concept to deployment — using a proven
          10-step methodology. Get a professional project that impresses professors and future employers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById("project-timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            See Our Process
          </button>
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export { BuildProjectHero }
