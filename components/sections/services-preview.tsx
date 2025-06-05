"use client"

import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

const ServicesPreview = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Complete web applications with modern frameworks like React, Next.js, and Node.js",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on all devices and screen sizes",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Integration",
      description: "Robust database solutions with PostgreSQL, MongoDB, and real-time features",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "API Development",
      description: "RESTful APIs and GraphQL endpoints for seamless data communication",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized code and best practices",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Testing",
      description: "Secure applications with comprehensive testing and validation",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We specialize in creating exceptional web solutions for final year projects that impress professors and
            potential employers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 font-serif">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ServicesPreview }
