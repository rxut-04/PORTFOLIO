"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Lightbulb,
  CheckCircle,
  FileText,
  Palette,
  Database,
  Code,
  Server,
  TestTube,
  Rocket,
  GraduationCap,
} from "lucide-react"

const ProjectTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  const timelineSteps = [
    {
      id: 1,
      title: "Problem Identification",
      description:
        "We analyze the core problem your project needs to solve, ensuring it's relevant to your course requirements.",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 2,
      title: "Idea Validation",
      description:
        "Our experts validate your concept to ensure it's innovative, feasible, and can be completed within your timeline.",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Requirement Gathering",
      description: "We document all features, user stories, and technologies needed for your project's success.",
      icon: <FileText className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      title: "Designing the Flow (UI/UX)",
      description:
        "Our designers create wireframes and mockups for your approval, ensuring an intuitive and attractive interface.",
      icon: <Palette className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: "Database Design",
      description: "We architect optimal database structures using SQL or NoSQL solutions based on your project needs.",
      icon: <Database className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 6,
      title: "Frontend Development",
      description:
        "Our developers build responsive UI components using React, Next.js, or your preferred frontend framework.",
      icon: <Code className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 7,
      title: "Backend & APIs",
      description: "We develop robust backend systems and APIs to power your application's functionality.",
      icon: <Server className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 8,
      title: "Integration & Testing",
      description: "Our QA team thoroughly tests all features and integrations to ensure a bug-free experience.",
      icon: <TestTube className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 9,
      title: "Deployment",
      description:
        "We deploy your application to production using industry-standard platforms like Vercel, Render, or Heroku.",
      icon: <Rocket className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 10,
      title: "Documentation & Demo",
      description: "We provide complete documentation and a demo video to help you present your project confidently.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-purple-400 to-pink-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...new Set([...prev, stepId])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const stepElements = document.querySelectorAll("[data-step]")
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleShareRequirements = () => {
    // Navigate to home page and scroll to contact form
    window.location.href = "/#contact-form"
  }

  return (
    <section id="project-timeline" className="relative py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-white/10 py-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-white text-center font-serif"
          >
            🎓{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Our Project Development Process
            </span>
          </motion.h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-orange-500"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.id}
              data-step={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleSteps.includes(step.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:border-white/30 transition-all duration-300 group">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${step.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full border-4 border-black"></div>

              {/* Step Number */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"}`}>
                <div className="text-5xl font-bold text-white/10">{step.id.toString().padStart(2, "0")}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 w-0.5 h-full bg-gradient-to-b from-purple-500 to-orange-500"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.id}
              data-step={step.id}
              initial={{ opacity: 0, x: -30 }}
              animate={visibleSteps.includes(step.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start mb-10 pl-16"
            >
              {/* Circle */}
              <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full border-4 border-black"></div>

              {/* Content Card */}
              <div className="flex-1">
                <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:border-white/30 transition-all duration-300 group">
                  <div className="flex items-center mb-2">
                    <div
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${step.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white scale-75">{step.icon}</div>
                    </div>
                    <div className="text-xl font-bold text-white/20">{step.id.toString().padStart(2, "0")}</div>
                  </div>
                  <h3 className="text-base font-medium text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-gray-300 text-sm mb-5">
              Simply tell us your requirements, and our expert team will build your project exactly as you need it. From
              concept to completion, we handle every step of the development process so you can focus on your studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShareRequirements}
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full hover:from-purple-600 hover:to-orange-600 transition-all duration-300 text-sm font-medium"
              >
                Share Your Requirements
              </button>
              <Link
                href="/portfolio"
                className="px-5 py-2 border border-gray-600 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { ProjectTimeline }
