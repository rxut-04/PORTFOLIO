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

    const message = `Hi Om! I'd like to discuss a project with you.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Description: ${formData.description}

Looking forward to connecting!`

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
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Tell me about your project and I'll help bring your vision to life
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
                  <option value="Web Development" className="bg-gray-800">
                    Web Development
                  </option>
                  <option value="Mobile App" className="bg-gray-800">
                    Mobile App
                  </option>
                  <option value="UI/UX Design" className="bg-gray-800">
                    UI/UX Design
                  </option>
                  <option value="Full Stack Project" className="bg-gray-800">
                    Full Stack Project
                  </option>
                  <option value="Consultation" className="bg-gray-800">
                    Consultation
                  </option>
                  <option value="Other" className="bg-gray-800">
                    Other
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
                <option value="Under ₹10,000" className="bg-gray-800">
                  Under ₹10,000
                </option>
                <option value="₹10,000 - ₹25,000" className="bg-gray-800">
                  ₹10,000 - ₹25,000
                </option>
                <option value="₹25,000 - ₹50,000" className="bg-gray-800">
                  ₹25,000 - ₹50,000
                </option>
                <option value="₹50,000+" className="bg-gray-800">
                  ₹50,000+
                </option>
                <option value="Let's Discuss" className="bg-gray-800">
                  Let's Discuss
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
              This will open WhatsApp to connect directly with Om Raut
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export { ContactForm }
