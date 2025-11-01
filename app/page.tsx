"use client"

import { motion } from "framer-motion"
import PortfolioHero from "@/components/ui/portfolio-hero"
import { TechStack } from "@/components/sections/tech-stack"
import { BookGallery } from "@/components/sections/book-gallery"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
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
