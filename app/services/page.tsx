"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web applications with modern frameworks and databases",
      features: ["React/Next.js Development", "Node.js Backend", "Database Integration", "API Development"],
      price: "₹8,000 - ₹15,000",
    },
    {
      title: "Real-time Applications",
      description: "Interactive applications with live data and WebSocket integration",
      features: ["WebSocket Implementation", "Live Data Visualization", "Real-time Chat", "Collaborative Features"],
      price: "₹10,000 - ₹18,000",
    },
    {
      title: "Data Visualization Projects",
      description: "Interactive dashboards and data analysis platforms",
      features: ["D3.js Visualizations", "Custom Charts", "Analytics Dashboard", "Data Processing"],
      price: "₹12,000 - ₹20,000",
    },
  ]

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
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium web development services tailored for final year computer science projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-purple-400">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
