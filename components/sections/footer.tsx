"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services" },
      { name: "Real-time Applications", href: "/services" },
      { name: "Data Visualization", href: "/services" },
      { name: "Custom Projects", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    technologies: [
      { name: "React/Next.js", href: "/portfolio" },
      { name: "WebSocket", href: "/portfolio" },
      { name: "D3.js", href: "/portfolio" },
      { name: "MongoDB", href: "/portfolio" },
    ],
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:info@codecraftsolutions.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <span className="font-bold text-sm">&lt;/&gt;</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white font-serif">CodeCraft Solutions</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating premium final year projects for computer science students with cutting-edge technologies and
                modern development practices.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">+91 7020706900</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">info@codecraftsolutions.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-3 text-purple-400" />
                  <span className="text-sm">India</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 font-serif">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 font-serif">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 font-serif">Technologies</h3>
              <ul className="space-y-3">
                {footerLinks.technologies.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Ready to start?</span>
                <a
                  href="https://wa.me/917020706900?text=Hi! I'm interested in a final year project. Please provide more details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full hover:from-purple-600 hover:to-orange-600 transition-all duration-300 text-sm font-medium"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">© {currentYear} CodeCraft Solutions. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <div className="text-gray-400">
                  Made with <span className="text-red-500 mx-1">❤️</span>
                  for students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
