"use client"

import { motion } from "framer-motion"
import { Hero2 } from "@/components/ui/hero-2"
import { TechStack } from "@/components/sections/tech-stack"
import { ProjectShowcase } from "@/components/sections/project-showcase"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero2 />
      <TechStack />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
    </motion.main>
  )
}
