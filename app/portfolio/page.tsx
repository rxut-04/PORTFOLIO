"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"
import { ProjectShowcase } from "@/components/sections/project-showcase"

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-black text-white"
    >
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
        <Link href="/" className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <span className="font-bold">&lt;/&gt;</span>
          </div>
          <span className="ml-2 text-lg md:text-xl font-bold text-white font-serif">CodeCraft Solutions</span>
        </Link>

        {/* Home Link */}
        <Link href="/" className="flex items-center text-sm text-gray-300 hover:text-white">
          <Home className="h-4 w-4 mr-2" />
          <span>Home</span>
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of premium final year projects that have impressed professors and industry experts
          </p>
        </div>
      </div>
      <ProjectShowcase />
    </motion.div>
  )
}
