"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"

export default function AboutPage() {
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
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              CodeCraft Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate startup team specializing in creating premium final year projects for computer science
            students
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Founded in 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-serif">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              To help computer science students create outstanding final year projects that not only meet academic
              requirements but also serve as impressive portfolio pieces for their future careers.
            </p>
            <h2 className="text-3xl font-bold mb-6 font-serif">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Fresh perspective with modern development practices</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Dedicated team focused on student success</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Latest technology stack and industry trends</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Personalized attention and complete project support</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Affordable pricing designed for students</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Complete documentation and presentation guidance</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 font-serif">Our Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="text-sm">React/Next.js</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm">WebSocket</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm">D3.js</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">🍃</div>
                <div className="text-sm">MongoDB</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-xl border border-purple-400/30">
              <h4 className="text-lg font-semibold mb-3 font-serif">🚀 Startup Advantage</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                As a startup, we're hungry to prove ourselves and deliver exceptional results. We bring fresh energy,
                innovative approaches, and the latest technologies to every project. Your success is our success!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
