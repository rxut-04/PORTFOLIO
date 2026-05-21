"use client"

import Link from "next/link"

const steps = [
  { id: "01", title: "Problem Identification", desc: "We analyze the core problem your project needs to solve, ensuring it's relevant to your course requirements.", bg: "#0a0a0a", color: "#fff" },
  { id: "02", title: "Idea Validation", desc: "Our experts validate your concept to ensure it's innovative, feasible, and completable within your timeline.", bg: "#C3E41D", color: "#000" },
  { id: "03", title: "Requirement Gathering", desc: "We document all features, user stories, and technologies needed for your project's success.", bg: "#0a0a0a", color: "#fff" },
  { id: "04", title: "UI/UX Design", desc: "Our designers create wireframes and mockups for your approval — intuitive and visually impressive.", bg: "#1A3DE8", color: "#fff" },
  { id: "05", title: "Database Design", desc: "We architect optimal database structures using SQL or NoSQL solutions based on your project needs.", bg: "#0a0a0a", color: "#fff" },
  { id: "06", title: "Frontend Development", desc: "Responsive UI components built with React, Next.js, or your preferred frontend framework.", bg: "#C3E41D", color: "#000" },
  { id: "07", title: "Backend & APIs", desc: "Robust backend systems and APIs to power your application's full functionality.", bg: "#0a0a0a", color: "#fff" },
  { id: "08", title: "Integration & Testing", desc: "Our QA team thoroughly tests all features and integrations to ensure a bug-free experience.", bg: "#F5F0E8", color: "#000" },
  { id: "09", title: "Deployment", desc: "We deploy your application to production using industry-standard platforms like Vercel or Netlify.", bg: "#0a0a0a", color: "#fff" },
  { id: "10", title: "Documentation & Demo", desc: "Complete documentation and a demo video to help you present your project confidently.", bg: "#C3E41D", color: "#000" },
]

const ProjectTimeline = () => {
  return (
    <section id="project-timeline">
      {steps.map((s) => (
        <div key={s.id} className="flex flex-row items-start gap-4 md:gap-[4vw] px-4 sm:px-6 md:px-[4vw] py-8 md:py-[4vw]" style={{ backgroundColor: s.bg, color: s.color }}>
          {/* Step number — compact on mobile */}
          <p className="text-[clamp(2.5rem,6vw,8rem)] font-bold leading-none flex-shrink-0 w-16 md:w-auto" style={{ fontFamily: "'Fira Code', monospace", opacity: 0.15 }}>
            {s.id}
          </p>

          {/* Content */}
          <div className="flex-1 pt-1">
            <hr className="border-t mb-3" style={{ borderColor: s.color === "#fff" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
            <h3 className="text-[clamp(1.1rem,3vw,3rem)] font-bold leading-tight uppercase tracking-tight mb-3" style={{ fontFamily: "'Fira Code', monospace" }}>
              {s.title}
            </h3>
            <p className="text-sm md:text-[clamp(0.9rem,1.5vw,1.1rem)] leading-relaxed" style={{ opacity: 0.7 }}>
              {s.desc}
            </p>
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="px-4 sm:px-6 md:px-[4vw] py-12 md:py-[4vw]" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
        <hr className="border-t border-white/10 mb-8" />
        <h3 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.85] uppercase tracking-tight mb-8" style={{ fontFamily: "'Fira Code', monospace" }}>
          Ready To<br /><span style={{ color: "#C3E41D" }}>Start?</span>
        </h3>
        <hr className="border-t border-white/10 mb-8" />
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="/#contact-form" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C3E41D] hover:text-white transition-colors duration-300">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#C3E41D] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            Share Requirements
          </a>
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/30 flex-shrink-0">
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

export { ProjectTimeline }
