"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    num: "01",
    title: "Code Debug Visualize",
    description: "Interactive code playground with visual debugging. Real-time execution, step-by-step debugging, and visual representation of data structures.",
    image: "/code-debug-project-new.png",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    liveUrl: "https://code-debug-visualize.netlify.app/",
    bg: "#C3E41D",
    color: "#000",
  },
  {
    num: "02",
    title: "Food Delivery App",
    description: "Complete food delivery platform with restaurant management, order tracking, and user authentication. Responsive design with comprehensive ordering system.",
    image: "/food.png",
    tech: ["JSP", "Servlets", "HTML5", "CSS3"],
    liveUrl: "https://food-deliverye.netlify.app/",
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "03",
    title: "AI Resume Builder",
    description: "AI-powered resume builder with smart suggestions, multiple templates, and one-click export. Built for job seekers who want to stand out.",
    image: "/resume.png",
    tech: ["React", "Firebase", "Bootstrap", "Redux"],
    liveUrl: "https://resume-buildir.netlify.app/",
    bg: "#1A3DE8",
    color: "#fff",
  },
  {
    num: "04",
    title: "Personal Finance Tracker",
    description: "Comprehensive personal finance management with expense tracking, budget planning, and financial analytics. Intuitive dashboards and detailed insights.",
    image: "/finance.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://personal-financeee.netlify.app/",
    bg: "#F5F0E8",
    color: "#000",
  },
  {
    num: "05",
    title: "SaaS Business Platform",
    description: "Modern SaaS platform with subscription management, user analytics, and automated billing. Comprehensive dashboard for business metrics.",
    image: "/saas.png",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://saas-business.netlify.app/",
    bg: "#0a0a0a",
    color: "#fff",
  },
  {
    num: "06",
    title: "Startup Community Hub",
    description: "Community platform connecting startups, founders, and investors. Features profiles, networking tools, and event management.",
    image: "/startup-community-project.png",
    tech: ["Servlets", "JSP", "HTML5", "CSS3"],
    liveUrl: "https://startup-community.netlify.app/",
    bg: "#C3E41D",
    color: "#000",
  },
  {
    num: "07",
    title: "MedLink — Safer Clinical Decisions",
    description: "An AI-assisted platform that helps medical doctors assess risk, seek second opinions, and make safer clinical decisions. Trusted by 500+ clinical specialists.",
    image: "/medlink.png",
    tech: ["React", "Next.js", "AI/ML", "Tailwind CSS"],
    liveUrl: "https://medlink-hypothesis.netlify.app/",
    bg: "#1A3DE8",
    color: "#fff",
  },
  {
    num: "08",
    title: "Library Audit — RFID System",
    description: "RFID-powered library auditing system. Tap, track, and audit physical books in real time — with a live dashboard, scan & sync, and login portal for administrators.",
    image: "/library-audit.png",
    tech: ["React", "RFID", "Node.js", "Dashboard"],
    liveUrl: "https://library-auditing.netlify.app/",
    bg: "#0a0a0a",
    color: "#fff",
  },
]

const ProjectShowcase = () => {
  return (
    <section>
      {projects.map((p) => (
        <div
          key={p.num}
          className="flex flex-col md:flex-row px-4 sm:px-6 md:px-[4vw] py-10 md:py-[4vw] gap-8 md:gap-[4vw]"
          style={{ backgroundColor: p.bg, color: p.color }}
        >
          {/* LEFT — text content */}
          <div className="flex flex-col justify-between gap-6 md:w-1/2">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ opacity: 0.5 }}>
                {p.num}
              </p>
              <h2
                className="text-[clamp(1.8rem,4vw,4.5rem)] font-bold leading-[0.9] uppercase tracking-tight"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {p.title}
              </h2>
              <hr className="border-t" style={{ borderColor: p.color === "#fff" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
              <p
                className="text-sm md:text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed"
                style={{ opacity: 0.7 }}
              >
                {p.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
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
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity w-fit"
                style={{ color: p.color }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0"
                  style={{ borderColor: p.color }}
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
                Visit Live Site
              </a>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="md:w-1/2 flex items-center">
            <div
              className="w-full overflow-hidden rounded-sm"
              style={{
                border: `1px solid ${p.color === "#fff" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // fallback to a colored placeholder if image missing
                  const target = e.currentTarget
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.background = p.color === "#fff" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.2)"
                    parent.style.minHeight = "200px"
                    parent.style.display = "flex"
                    parent.style.alignItems = "center"
                    parent.style.justifyContent = "center"
                    parent.innerHTML = `<p style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;opacity:0.3;color:${p.color}">Image Coming Soon</p>`
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export { ProjectShowcase }
