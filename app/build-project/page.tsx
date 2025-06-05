"use client"

import { motion } from "framer-motion"
import { BuildProjectHero } from "@/components/sections/build-project-hero"
import { ProjectTimeline } from "@/components/sections/project-timeline"
import { Footer } from "@/components/sections/footer"

export default function BuildProjectPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BuildProjectHero />
      <ProjectTimeline />
      <Footer />
    </motion.main>
  )
}
