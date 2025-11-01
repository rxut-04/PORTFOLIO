"use client"

import React, { useState, useEffect } from "react"
import HTMLFlipBook from "react-pageflip"

function BookSlider() {
  const [bookSize, setBookSize] = useState({ width: 600, height: 800 })

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setBookSize({ width: 350, height: 520 })
      } else if (window.innerWidth < 768) {
        setBookSize({ width: 500, height: 700 })
      } else if (window.innerWidth < 1024) {
        setBookSize({ width: 550, height: 750 })
      } else {
        setBookSize({ width: 600, height: 800 })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  const techData = [
    {
      id: "001",
      name: "React.js",
      level: "Expert",
      category: "Frontend Framework",
      description: "Building dynamic, component-based user interfaces with React 19. Mastering hooks, context, and state management for scalable applications.",
      image: "/react.webp",
    },
    {
      id: "002",
      name: "Supabase",
      level: "Advanced",
      category: "Backend as a Service",
      description: "Open-source Firebase alternative. Real-time databases, authentication, storage, and serverless functions for rapid development.",
      image: "/supabase.webp",
    },
    {
      id: "003",
      name: "Vue.js",
      level: "Intermediate",
      category: "Frontend Framework",
      description: "Progressive JavaScript framework for building user interfaces. Reactive data binding, component composition, and elegant API design.",
      image: "/vue.webp",
    },
    {
      id: "004",
      name: "Next.js",
      level: "Expert",
      category: "Full-Stack Framework",
      description: "React framework for production. Server-side rendering, static site generation, API routes, and optimized performance out of the box.",
      image: "/next.png",
    },
  ]

  return (
    <div className="flex justify-center items-center py-12 px-4 min-h-screen">
      <HTMLFlipBook
        width={bookSize.width}
        height={bookSize.height}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        minWidth={600}
        minHeight={800}
        maxWidth={600}
        maxHeight={800}
        className="book-flipper"
      >
        <div className="page rounded-3xl overflow-hidden group" style={{ position: "relative", cursor: "pointer" }}>
          <div className="page-content cover" style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="/COVERPAGE.jpg"
              alt="Tech Stack Cover"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-2xl">
                  <p className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="text-3xl">👆</span>
                    Click Me
                    <span className="text-3xl">👆</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {techData.map((tech) => (
          <div className="page bg-white rounded-3xl" key={tech.id}>
            <div className="page-content p-6 md:p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="mb-6">
                  <div className="w-full bg-gradient-to-br from-purple-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ height: "300px" }}>
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="object-contain"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{tech.name}</h2>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-2 md:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {tech.category}
                    </span>
                    <span className="inline-block px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-1 md:pt-2">{tech.description}</p>
                </div>
              </div>
              <div className="text-center text-xs text-gray-400 pt-3 md:pt-4 border-t">#{tech.id}</div>
            </div>
          </div>
        ))}

        <div className="page rounded-3xl" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
          <div className="page-content cover flex flex-col items-center justify-center p-4 md:p-8">
            <div className="text-5xl md:text-7xl mb-4 md:mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 md:mb-4">Let's Build</h2>
            <p className="text-white/80 text-center text-base md:text-lg">Something amazing together</p>
          </div>
        </div>
      </HTMLFlipBook>

      <style jsx global>{`
        .page {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 24px;
        }
        .page-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .page-content.cover {
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  )
}

export default BookSlider
