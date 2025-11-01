"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/sections/footer"
import BookSlider from "@/components/ui/book-slider"

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Hi, I'm <span className="text-white font-bold">Om Raut</span>, a full-stack developer passionate about
              creating beautiful, functional digital experiences. I specialize in modern web technologies and love
              turning ideas into reality through code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                ← Back Home
              </Link>
              <button
                onClick={() => {
                  window.location.href = "/#contact-form"
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full hover:from-purple-600 hover:to-orange-600 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Zone / My Inspirations Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">My Inspirations</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Every idea starts from curiosity.
              <br />
              Here's what's inspiring me lately:
            </p>
          </motion.div>

          {/* Interactive Book Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <BookSlider />
          </motion.div>

          {/* Instruction Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-sm md:text-base">
              ← Click the corners to flip pages →
            </p>
          </motion.div>

          {/* Additional inspiration quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-gray-500 italic text-sm md:text-base max-w-2xl mx-auto">
              "Reading is to the mind what exercise is to the body." — Joseph Addison
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
