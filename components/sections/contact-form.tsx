"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hi! I'm interested in a final year project.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Description: ${formData.description}

Please provide more details about your services.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917020706900?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact-form" className="relative py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-serif"
          >
            Get{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Custom Quote
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Tell us about your project requirements and we'll provide you with a detailed quote
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white font-serif">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white font-serif">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white font-serif">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-white font-serif">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                >
                  <option value="" className="bg-gray-800">
                    Select project type
                  </option>
                  <option value="Web Application" className="bg-gray-800">
                    Web Application
                  </option>
                  <option value="Real-time Dashboard" className="bg-gray-800">
                    Real-time Dashboard
                  </option>
                  <option value="Data Visualization" className="bg-gray-800">
                    Data Visualization
                  </option>
                  <option value="E-commerce Platform" className="bg-gray-800">
                    E-commerce Platform
                  </option>
                  <option value="Custom Project" className="bg-gray-800">
                    Custom Project
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white font-serif">
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              >
                <option value="" className="bg-gray-800">
                  Select budget range
                </option>
                <option value="₹8,000 - ₹12,000" className="bg-gray-800">
                  ₹8,000 - ₹12,000
                </option>
                <option value="₹12,000 - ₹15,000" className="bg-gray-800">
                  ₹12,000 - ₹15,000
                </option>
                <option value="₹15,000+" className="bg-gray-800">
                  ₹15,000+
                </option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-white font-serif">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 resize-none"
                placeholder="Describe your project requirements, features needed, timeline, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-medium hover:from-purple-600 hover:to-orange-600 transition-all duration-300"
            >
              Send WhatsApp Message
            </button>

            <p className="text-sm text-gray-400 text-center mt-4">
              This will open WhatsApp with your project details pre-filled
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export { ContactForm }
