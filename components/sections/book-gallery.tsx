"use client"

import { motion } from "framer-motion"
import { Book } from "@/components/ui/book"

const BookGallery = () => {
  const books = [
    {
      title: "The Art of Web Development",
      color: "#7DC1C1",
      textColor: "white",
      variant: "simple" as const,
    },
    {
      title: "Modern JavaScript Mastery",
      color: "#9D2127",
      textColor: "#ece4db",
      variant: "simple" as const,
    },
    {
      title: "React & Next.js Guide",
      color: "#FED954",
      textColor: "#9d3b05",
      variant: "simple" as const,
    },
    {
      title: "Full Stack Engineering",
      color: "#4A5568",
      textColor: "white",
      variant: "stripe" as const,
    },
    {
      title: "TypeScript Deep Dive",
      color: "#3178C6",
      textColor: "white",
      variant: "stripe" as const,
    },
    {
      title: "UI/UX Design Principles",
      color: "#E85D75",
      textColor: "white",
      variant: "stripe" as const,
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
            Portfolio{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore my collection of projects, from web applications to design systems
          </motion.p>
        </div>

        {/* Desktop: 3 columns grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {books.slice(0, 3).map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Book title={book.title} color={book.color} textColor={book.textColor} variant={book.variant} textured />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.slice(3).map((book, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Book title={book.title} color={book.color} textColor={book.textColor} variant={book.variant} textured />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Book
                  title={book.title}
                  color={book.color}
                  textColor={book.textColor}
                  variant={book.variant}
                  textured
                  width={160}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">Want to see more? Let's connect and discuss your project</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact-form")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full hover:from-purple-600 hover:to-orange-600 transition-all duration-300 text-sm md:text-base font-medium"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export { BookGallery }
