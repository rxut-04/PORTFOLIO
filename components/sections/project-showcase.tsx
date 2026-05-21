"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    num: "01",
    title: "Code Debug Visualize",
    description:
      "Interactive code playground with visual debugging. Real-time execution, step-by-step debugging, and visual representation of data structures.",
    image: "/code-debug-project-new.png",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    liveUrl: "https://code-debug-visualize.netlify.app/",
    bg: "#C3E41D",
    color: "#000",
  },
  {
    num: "02",
    title: "Food Delivery App",
    description:
      "Complete food delivery platform with restaurant management, order tracking, and user authentication. Responsive design with comprehensive ordering system.",
    image: "/food.png",
    tech: ["JSP", "Servlets", "HTML5", "CSS3"],
    liveUrl: "https://food-deliverye.netlify.app/",
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "03",
    title: "AI Resume Builder",
    description:
      "AI-powered resume builder with smart suggestions, multiple templates, and one-click export. Built for job seekers who want to stand out.",
    image: "/resume.png",
    tech: ["React", "Firebase", "Bootstrap", "Redux"],
    liveUrl: "https://resume-buildir.netlify.app/",
    bg: "#1A3DE8",
    color: "#fff",
  },
  {
    num: "04",
    title: "Personal Finance Tracker",
    description:
      "Comprehensive personal finance management with expense tracking, budget planning, and financial analytics. Intuitive dashboards and detailed insights.",
    image: "/finance.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://personal-financeee.netlify.app/",
    bg: "#F5F0E8",
    color: "#000",
  },
  {
    num: "05",
    title: "SaaS Business Platform",
    description:
      "Modern SaaS platform with subscription management, user analytics, and automated billing. Comprehensive dashboard for business metrics.",
    image: "/saas.png",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://saas-business.netlify.app/",
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "06",
    title: "Startup Community Hub",
    description:
      "Community platform connecting startups, founders, and investors. Features profiles, networking tools, and event management.",
    image: "/startup-community-project.png",
    tech: ["Servlets", "JSP", "HTML5", "CSS3"],
    liveUrl: "https://startup-community.netlify.app/",
    bg: "#C3E41D",
    color: "#000",
  },
]

const ProjectShowcase = () => {
  return (
    <section>
      {projects.map((p) => (
        <div
          key={p.num}
          className="flex flex-col lg:flex-row px-[4vw] py-[4vw] gap-[4vw]"
          style={{ backgroundColor: p.bg, color: p.color }}
        >
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ opacity: 0.5 }}>
                {p.num}
              </p>
              <h2
                className="text-[clamp(2rem,5vw,5rem)] font-bold leading-[0.9] uppercase tracking-tight mb-4"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {p.title}
              </h2>
              <hr className="border-t my-4" style={{ borderColor: p.color === "#fff" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
              <p className="text-[clamp(0.9rem,1.5vw,1.1rem)] leading-relaxed max-w-[45ch]" style={{ opacity: 0.7 }}>
                {p.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 border"
                    style={{ borderColor: p.color === "#fff" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[clamp(0.85rem,1.3vw,1rem)] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                style={{ color: p.color }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2"
                  style={{ borderColor: p.color }}
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
                Visit Live Site
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex-1 max-w-xl">
            <div className="overflow-hidden rounded-sm" style={{ border: `1px solid ${p.color === "#fff" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}` }}>
              <img
                src={p.image || "/placeholder.svg"}
                alt={p.title}
                className="w-full h-[280px] lg:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export { ProjectShowcase }
