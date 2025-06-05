"use client"

import { motion } from "framer-motion"

const TechStack = () => {
  const technologies = [
    {
      name: "Next.js",
      description: "Full-stack React framework",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "WebSocket",
      description: "Real-time communication",
      icon: "⚡",
      color: "from-green-400 to-emerald-400",
    },
    {
      name: "D3.js",
      description: "Interactive data visualization",
      icon: "📊",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "MongoDB",
      description: "NoSQL database solution",
      icon: "🍃",
      color: "from-green-400 to-teal-400",
    },
    {
      name: "PostgreSQL",
      description: "Relational database",
      icon: "🐘",
      color: "from-blue-400 to-indigo-400",
    },
    {
      name: "React Native",
      description: "Mobile app development",
      icon: "📱",
      color: "from-purple-400 to-violet-400",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-serif"
          >
            Technology Stack{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge technologies that power our premium final year projects
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{tech.icon}</div>
                <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">{tech.name}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{tech.description}</p>
              </div>
              <div
                className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TechStack }
