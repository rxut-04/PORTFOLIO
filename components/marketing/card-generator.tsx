"use client"

import { useState } from "react"
import { Download } from "lucide-react"

const CardGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateCard = async () => {
    setIsGenerating(true)

    // Create canvas
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Set card dimensions (standard business card: 3.5" x 2" at 300 DPI)
    canvas.width = 1050 // 3.5 inches * 300 DPI
    canvas.height = 600 // 2 inches * 300 DPI

    if (!ctx) return

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#1a1a2e")
    gradient.addColorStop(0.3, "#16213e")
    gradient.addColorStop(0.6, "#0f3460")
    gradient.addColorStop(1, "#0e2954")

    // Fill background
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add gradient overlay effects
    const overlay1 = ctx.createRadialGradient(
      canvas.width * 0.8,
      canvas.height * 0.2,
      0,
      canvas.width * 0.8,
      canvas.height * 0.2,
      300,
    )
    overlay1.addColorStop(0, "rgba(147, 51, 234, 0.3)")
    overlay1.addColorStop(0.5, "rgba(59, 130, 246, 0.2)")
    overlay1.addColorStop(1, "rgba(147, 51, 234, 0)")

    ctx.fillStyle = overlay1
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const overlay2 = ctx.createRadialGradient(
      canvas.width * 0.2,
      canvas.height * 0.8,
      0,
      canvas.width * 0.2,
      canvas.height * 0.8,
      400,
    )
    overlay2.addColorStop(0, "rgba(236, 72, 153, 0.3)")
    overlay2.addColorStop(0.5, "rgba(251, 146, 60, 0.2)")
    overlay2.addColorStop(1, "rgba(236, 72, 153, 0)")

    ctx.fillStyle = overlay2
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add noise texture effect
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 20 - 10
      data[i] = Math.max(0, Math.min(255, data[i] + noise)) // Red
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)) // Green
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)) // Blue
    }

    ctx.putImageData(imageData, 0, 0)

    // Add company logo/icon
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(60, 60, 80, 80)
    ctx.fillStyle = "#000000"
    ctx.font = "bold 40px Arial"
    ctx.textAlign = "center"
    ctx.fillText("</>", 100, 110)

    // Add company name
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 48px Arial"
    ctx.textAlign = "left"
    ctx.fillText("CodeCraft Solutions", 180, 110)

    // Add tagline with gradient effect
    const taglineGradient = ctx.createLinearGradient(180, 140, 800, 140)
    taglineGradient.addColorStop(0, "#a855f7")
    taglineGradient.addColorStop(0.5, "#ec4899")
    taglineGradient.addColorStop(1, "#f97316")

    ctx.fillStyle = taglineGradient
    ctx.font = "bold 32px Arial"
    ctx.fillText("Premium Final Year Projects", 180, 170)

    // Add contact info
    ctx.fillStyle = "#e5e7eb"
    ctx.font = "24px Arial"
    ctx.fillText("📱 +91 7020706900", 60, 250)
    ctx.fillText("💻 codecraftsolutions.com", 60, 290)
    ctx.fillText("📧 info@codecraftsolutions.com", 60, 330)

    // Add technologies
    ctx.fillStyle = "#d1d5db"
    ctx.font = "20px Arial"
    ctx.fillText("React • Next.js • WebSocket • D3.js • MongoDB", 60, 380)

    // Add bottom accent
    const bottomGradient = ctx.createLinearGradient(0, canvas.height - 40, canvas.width, canvas.height - 40)
    bottomGradient.addColorStop(0, "#a855f7")
    bottomGradient.addColorStop(0.5, "#ec4899")
    bottomGradient.addColorStop(1, "#f97316")

    ctx.fillStyle = bottomGradient
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40)

    // Add call to action
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Get Your Dream Project Today!", canvas.width / 2, canvas.height - 15)

    // Download the image
    const link = document.createElement("a")
    link.download = "codecraft-marketing-card.jpg"
    link.href = canvas.toDataURL("image/jpeg", 0.9)
    link.click()

    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 font-serif">
          Marketing Card{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Generator
          </span>
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Generate a high-quality marketing card with the same beautiful gradient background from your hero section.
          Perfect for printing business cards, flyers, or promotional materials.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 font-serif">Card Specifications:</h3>
          <ul className="text-left space-y-2 text-gray-300">
            <li>
              • <strong>Dimensions:</strong> 3.5" x 2" (Standard Business Card)
            </li>
            <li>
              • <strong>Resolution:</strong> 300 DPI (Print Ready)
            </li>
            <li>
              • <strong>Format:</strong> High-Quality JPG
            </li>
            <li>
              • <strong>Background:</strong> Hero Section Gradient
            </li>
            <li>
              • <strong>Content:</strong> Company Info, Contact Details, Technologies
            </li>
          </ul>
        </div>

        <button
          onClick={generateCard}
          disabled={isGenerating}
          className="flex items-center gap-3 mx-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full hover:from-purple-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50"
        >
          <Download className="h-5 w-5" />
          {isGenerating ? "Generating..." : "Generate & Download Card"}
        </button>

        <p className="text-sm text-gray-400 mt-4">
          The card will be automatically downloaded as a JPG file ready for printing
        </p>
      </div>
    </div>
  )
}

export default CardGenerator
