"use client"

import PortfolioHero from "@/components/ui/portfolio-hero"
import { PortfolioScroll } from "@/components/sections/portfolio-scroll"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Raut",
  url: "https://rauttportfoliio.netlify.app",
  sameAs: [],
  jobTitle: "Frontend Web Developer & Designer",
  description:
    "Om Raut is a frontend web developer and designer specializing in React and Next.js. This is the official developer portfolio of Om Raut.",
  knowsAbout: ["Web Development", "Frontend Development", "React", "Next.js", "UI Design"],
}

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioHero />
      <PortfolioScroll />
      <ContactForm />
      <Footer />
    </>
  )
}
