"use client"

import { motion } from "framer-motion"
import PortfolioHero from "@/components/ui/portfolio-hero"
import { TechStack } from "@/components/sections/tech-stack"
import { BookGallery } from "@/components/sections/book-gallery"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Raut",
  url: "https://rauttportfoliio.netlify.app",
  sameAs: [],
  jobTitle: "Web Developer & Designer",
  description:
    "Om Raut is a web developer and designer. This is the official portfolio of Om Raut showcasing projects and skills.",
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TechStack />
        <BookGallery />
        <ContactForm />
        <Footer />
      </motion.div>
    </>
  )
}
