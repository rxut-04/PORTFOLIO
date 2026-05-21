"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Build Project", href: "/build-project" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/rxut-04", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:omraut.dev@gmail.com", label: "Email" },
  ]

  return (
    <footer className="w-full px-4 sm:px-6 md:px-[4vw] pt-12 md:pt-[clamp(2rem,8vw,4vw)] pb-8 md:pb-[4vw]" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <hr className="border-t border-white/10 mb-10 md:mb-[4vw]" />

      {/* Main grid */}
      <div className="flex flex-col gap-10 md:gap-12 mb-10 md:mb-[4vw]">

        {/* Brand */}
        <div>
          <p className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight mb-4" style={{ fontFamily: "'Fira Code', monospace", color: "#C3E41D" }}>
            Om<br />Raut
          </p>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-xs">
            Full-stack developer & designer crafting fast, beautiful, and functional web experiences.
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm md:text-base text-white/60 hover:text-[#C3E41D] transition-colors duration-300 uppercase tracking-wide font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917020706900" className="text-sm md:text-base text-white/60 hover:text-[#C3E41D] transition-colors duration-300">
                  +91 7020706900
                </a>
              </li>
              <li>
                <a href="mailto:omraut.dev@gmail.com" className="text-sm md:text-base text-white/60 hover:text-[#C3E41D] transition-colors duration-300 break-all">
                  omraut.dev@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/917020706900?text=Hi Om! I'd like to discuss a project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C3E41D] hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#C3E41D] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  WhatsApp Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/10 mb-6" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 border border-white/10 rounded-lg text-white/40 hover:text-[#C3E41D] hover:border-[#C3E41D] transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.15em] text-white/30">
          © {currentYear} Om Raut · Made with code
        </p>
      </div>
    </footer>
  )
}
