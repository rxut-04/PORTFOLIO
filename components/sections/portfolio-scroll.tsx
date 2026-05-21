'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export function PortfolioScroll() {
  return (
    <FlowArt aria-label="Om Raut Portfolio Sections">

      {/* 01 — Who I Am */}
      <FlowSection aria-label="Who I Am" style={{ backgroundColor: '#C3E41D', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who I Am</p>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Full<br />Stack<br />Dev
          </h2>
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          I'm Om Raut — a full-stack developer and designer based in India. I build fast,
          beautiful, and functional web experiences from the ground up. Code is my craft,
          design is my language.
        </p>
      </FlowSection>

      {/* 02 — Tech Stack */}
      <FlowSection aria-label="Tech Stack" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Tech Stack</p>
        <hr className="my-4 md:my-[2vw] border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Built<br />To<br />Scale
          </h2>
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-white/20" />
        <p className="max-w-[50ch] text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          Modern tools. Production-grade code. Every project is engineered for performance,
          maintainability, and real-world scale.
        </p>
        <hr className="my-4 md:my-[2vw] border-t border-white/20" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[3vw]">
          {[
            { label: "Frontend", text: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion — pixel-perfect UIs that feel alive." },
            { label: "Backend", text: "Node.js, Express, REST APIs, WebSockets — robust server-side logic for real-time apps." },
            { label: "Database", text: "MongoDB, PostgreSQL — flexible data modeling for any scale." },
            { label: "Data Viz", text: "D3.js — turning raw data into interactive, insightful visual stories." },
            { label: "Mobile", text: "React Native — cross-platform mobile apps with a single codebase." },
            { label: "Tools", text: "Git, Figma, Netlify, Vercel — from design to deployment, end to end." },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C3E41D]">{item.label}</p>
              <p className="text-sm md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{item.text}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 03 — Projects */}
      <FlowSection aria-label="Projects" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Projects</p>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Real<br />Work.<br />Real<br />Impact.
          </h2>
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <p className="max-w-[50ch] text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          Every project solves a real problem. Here's what I've shipped.
        </p>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[3vw]">
          {[
            { label: "Visiting Card Generator", text: "A dynamic tool to create, customize, and export professional visiting cards instantly — built with Next.js and canvas rendering." },
            { label: "Food Delivery Mockup", text: "A high-fidelity UI mockup for a food delivery app — complete with ordering flow, cart, and real-time tracking screens." },
            { label: "This Portfolio", text: "Built from scratch with Next.js 15, Tailwind CSS, Framer Motion, and GSAP. Optimized for SEO, performance, and visual impact." },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">{item.label}</p>
              <p className="text-sm md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{item.text}</p>
            </div>
          ))}
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-black/30" />
        <p className="mt-auto text-right text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          More projects at{' '}
          <a href="/portfolio" className="underline underline-offset-4 font-semibold">
            /portfolio
          </a>
        </p>
      </FlowSection>

      {/* 04 — Services */}
      <FlowSection aria-label="Services" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Services</p>
        <hr className="my-4 md:my-[2vw] border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            What<br />I<br />Build
          </h2>
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          From idea to deployment — I handle the full product lifecycle.
        </p>
        <hr className="my-4 md:my-[2vw] border-t border-white/30" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[3vw]">
          {[
            { label: "Web Development", text: "Custom websites and web apps built with Next.js — fast, SEO-optimized, and production-ready." },
            { label: "UI/UX Design", text: "Clean, intuitive interfaces designed in Figma and brought to life with pixel-perfect code." },
            { label: "Real-time Apps", text: "WebSocket-powered applications — live dashboards, chat systems, collaborative tools." },
            { label: "Full Stack Projects", text: "End-to-end development — frontend, backend, database, and deployment all handled by one person." },
            { label: "Mobile Apps", text: "React Native apps for iOS and Android — one codebase, two platforms, zero compromise." },
            { label: "Consultation", text: "Tech stack advice, code reviews, architecture planning — expert guidance before you build." },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">{item.label}</p>
              <p className="text-sm md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{item.text}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 05 — Let's Work Together */}
      <FlowSection aria-label="Contact" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Let's Work Together</p>
        <hr className="my-4 md:my-[2vw] border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Got<br />An<br />Idea?
          </h2>
        </div>
        <hr className="my-4 md:my-[2vw] border-t border-white/20" />
        <p className="mt-auto max-w-[50ch] text-[clamp(0.95rem,2.5vw,2rem)] font-normal leading-relaxed">
          I'm available for freelance projects, full-time roles, and collaborations.
          Let's build something great together — reach out below or{' '}
          <a
            href="https://wa.me/917020706900?text=Hi Om! I'd like to discuss a project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C3E41D] underline underline-offset-4"
          >
            WhatsApp me directly.
          </a>
        </p>
      </FlowSection>

    </FlowArt>
  );
}
