"use client"

import { useState } from "react"
import { ArrowRight, Menu, X, Home } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
          <Link href="/" className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <span className="font-bold">&lt;/&gt;</span>
            </div>
            <span className="ml-2 text-lg md:text-xl font-bold text-white">CodeCraft Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center text-sm text-gray-300 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                <span>Home</span>
              </Link>
              <NavItem label="Services" href="/services" hasDropdown />
              <NavItem label="Portfolio" href="/portfolio" hasDropdown />
              <NavItem label="About" href="/about" hasDropdown />
              <NavItem label="Build Your Own Project" href="/build-project" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu with animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <span className="font-bold">&lt;/&gt;</span>
                  </div>
                  <span className="ml-2 text-lg font-bold text-white">CodeCraft Solutions</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="mt-8 flex flex-col space-y-6">
                <Link
                  href="/"
                  className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white"
                >
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>
                <MobileNavItem label="Services" href="/services" />
                <MobileNavItem label="Portfolio" href="/portfolio" />
                <MobileNavItem label="About" href="/about" />
                <MobileNavItem label="Build Your Own Project" href="/build-project" />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact-form")
                      contactSection?.scrollIntoView({ behavior: "smooth" })
                    }, 300)
                  }}
                  className="h-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-8 text-base font-bold text-black hover:from-purple-600 hover:to-orange-600 flex items-center justify-center"
                >
                  Get Custom Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-medium text-white">⚡ Where Innovation Meets Excellence</span>
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-8 md:mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white font-serif">
            Premium Final Year Projects for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Computer Science Students
            </span>
          </h1>
          <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-sm md:text-lg text-gray-300 leading-relaxed">
            Get cutting-edge{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
              Interactive Web Applications
            </span>{" "}
            built with Next.js, WebSocket, D3.js, and modern databases. Stand out with interactive dashboards and
            real-time features that impress your professors.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto h-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-6 md:px-8 text-sm md:text-base font-bold text-black hover:from-purple-600 hover:to-orange-600 flex items-center justify-center transition-all duration-300"
            >
              View Live Projects
            </Link>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact-form")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full sm:w-auto h-12 rounded-full border border-gray-600 px-6 md:px-8 text-sm md:text-base font-bold text-white hover:bg-white/10 flex items-center justify-center"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  label,
  href,
  hasDropdown,
}: {
  label: string
  href: string
  hasDropdown?: boolean
}) {
  return (
    <Link href={href} className="flex items-center text-sm text-gray-300 hover:text-white">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </Link>
  )
}

function MobileNavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </Link>
  )
}

export { Hero2 }
