"use client"

import PortfolioHero from "@/components/ui/portfolio-hero"
import { PortfolioScroll } from "@/components/sections/portfolio-scroll"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Raut",
  alternateName: ["Raut Om", "rxut", "rxut-04", "CodeCraft Solutions"],
  url: "https://rauttportfoliio.netlify.app",
  sameAs: ["https://github.com/rxut-04"],
  jobTitle: "Full-Stack Developer & Designer",
  description:
    "Om Raut (also known as Raut Om, rxut, rxut-04) is a full-stack developer and designer from Nashik, Maharashtra, India — behind CodeCraft Solutions.",
  knowsAbout: ["Web Development", "Frontend Development", "React", "Next.js", "UI Design", "Full Stack Development"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  brand: {
    "@type": "Brand",
    name: "CodeCraft Solutions",
  },
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
