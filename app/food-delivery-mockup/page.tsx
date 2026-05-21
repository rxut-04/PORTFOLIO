"use client"

import Link from "next/link"

export default function FoodDeliveryMockup() {
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

      {/* Hero */}
      <section className="px-[4vw] pt-[clamp(2rem,6vw,4rem)] pb-[4vw]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          Project — Food Delivery
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />

        <h1
          className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          Food.
          <br />
          <span style={{ color: "#C3E41D" }}>Order.</span>
          <br />
          Deliver.
        </h1>

        <hr className="border-t border-white/10 mt-[3vw] mb-[3vw]" />

        <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-white/60 max-w-[50ch] mb-[3vw]">
          A complete food delivery platform with restaurant management, real-time order tracking,
          and seamless user authentication — built as a final year project showcase.
        </p>
      </section>

      {/* Features */}
      <section className="px-[4vw] py-[4vw]" style={{ backgroundColor: "#111" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          Features
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { title: "Restaurant Dashboard", desc: "Full management panel for restaurant owners — menu, orders, analytics." },
            { title: "Real-time Tracking", desc: "Live order status updates from placement to delivery at your door." },
            { title: "User Auth", desc: "Secure registration, login, and profile management for customers." },
            { title: "Responsive Design", desc: "Works flawlessly on mobile, tablet, and desktop." },
            { title: "Payment Gateway", desc: "Integrated payment flow for seamless checkout experience." },
          ].map((f) => (
            <div key={f.title} className="min-w-[200px] flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#C3E41D" }}>
                {f.title}
              </p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] text-white/60 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-[4vw] py-[4vw]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-[2vw]">
          Technology Stack
        </p>
        <hr className="border-t border-white/10 mb-[3vw]" />
        <div className="flex flex-wrap gap-3">
          {["JSP", "Servlets", "HTML5", "CSS3", "JavaScript", "MySQL"].map((t) => (
            <span
              key={t}
              className="text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 border border-white/20 hover:border-[#C3E41D] hover:text-[#C3E41D] transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Preview */}
      <section className="px-[4vw] py-[4vw]" style={{ backgroundColor: "#C3E41D", color: "#000" }}>
        <hr className="border-t border-black/20 mb-[3vw]" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[4vw]">
          <div>
            <h2
              className="text-[clamp(2rem,6vw,6rem)] font-bold leading-[0.85] uppercase tracking-tight mb-4"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              FEASTO
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] opacity-70 max-w-[40ch] mb-6">
              Discover Flavors. Anywhere. From local gems to top-rated kitchens — delivered fast.
            </p>
            <a
              href="https://food-deliverye.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[clamp(0.9rem,1.5vw,1.1rem)] font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              Visit Live Site
            </a>
          </div>

          {/* Browser mockup */}
          <div className="flex-1 max-w-lg">
            <div className="bg-black rounded-sm overflow-hidden border border-black/20">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-xs text-white/40 ml-2">food-deliverye.netlify.app</span>
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">🍕</span>
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "'Fira Code', monospace" }}>FEASTO</span>
                </div>
                <p className="text-white/60 text-sm mb-4">Discover Flavors. Anywhere.</p>
                <div className="flex gap-2 justify-center">
                  <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-[#C3E41D] text-[#C3E41D]">Explore</span>
                  <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/20 text-white/40">Track Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
