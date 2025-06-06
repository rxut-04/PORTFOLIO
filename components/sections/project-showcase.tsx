"use client"

import { motion } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight, Monitor, Tablet, AlertCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const projects = [
    {
      title: "CODE-DEBUG-VISUALIZE",
      description:
        "Interactive code playground with visual debugging capabilities. Features real-time code execution, step-by-step debugging, and visual representation of data structures.",
      image: "/code-debug-project-new.png",
      tech: ["React", "D3.js", "WebSocket", "Node.js"],
      liveUrl: "https://code-debug-visualize.netlify.app/",
    },
    {
      title: "FOOD-DELIVERY-APP",
      description:
        "Complete food delivery platform with restaurant management, order tracking, and user authentication. Features responsive design and comprehensive food ordering system.",
      image: "/food.png",
      tech: ["JSP", "Servlets", "HTML5", "CSS3"],
      liveUrl: "https://food-deliverye.netlify.app/",
    },
    {
      title: "STARTUP-COMMUNITY-HUB",
      description:
        "Comprehensive platform connecting startups with investors. Features company registration, investor dashboards, and admin management tools for the startup ecosystem.",
      image: "/startup-community-project.png",
      tech: ["React", "Firebase", "Bootstrap", "Redux"],
      liveUrl: "https://startup-community.netlify.app/",
    },
    {
      title: "PERSONAL-FINANCE-TRACKER",
      description:
        "Comprehensive personal finance management system with expense tracking, budget planning, and financial analytics. Features intuitive dashboards and detailed financial insights.",
      image: "/cardlogo.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://personal-financeee.netlify.app/",
    },
    {
      title: "SaaS-BUSINESS-PLATFORM",
      description:
        "Modern SaaS platform with subscription management, user analytics, and automated billing. Features a comprehensive dashboard for business metrics and customer management.",
      image: "/saas.png",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://saas-business.netlify.app/",
    },
    {
      title: "IoT Monitoring Dashboard",
      description:
        "Real-time IoT device monitoring with sensor data visualization, alerts, and automated control systems for smart environments.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "MQTT", "InfluxDB", "Grafana"],
      liveUrl: "#",
    },
  ]

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0
      const gap = 16 // gap-4 = 16px
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length
    scrollToIndex(newIndex)
  }

  const prevProject = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    scrollToIndex(newIndex)
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-serif"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Premium final year projects that have impressed professors and landed students their dream jobs
          </motion.p>
        </div>

        {/* Mobile Notice - Always visible on small screens */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 mx-2"
          >
            <div className="bg-gradient-to-r from-purple-500/30 to-orange-500/30 backdrop-blur-sm border-2 border-purple-400/50 rounded-xl p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">📱 Mobile Notice</h3>
                  <p className="text-gray-200 text-xs leading-relaxed mb-2">
                    For the best project viewing experience with full interactive features, please visit on:
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Monitor className="h-4 w-4 text-purple-300" />
                      <span className="text-xs text-white font-medium">Laptop</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tablet className="h-4 w-4 text-purple-300" />
                      <span className="text-xs text-white font-medium">Tablet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 font-serif">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:to-orange-600 transition-colors text-sm font-medium w-full justify-center"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe View */}
        <div className="block md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-[85vw] max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden snap-start"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-base font-semibold text-white leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-500/20 text-gray-400 rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:to-orange-600 transition-colors text-xs font-medium w-full justify-center"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Live Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-4 gap-1.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { ProjectShowcase }
