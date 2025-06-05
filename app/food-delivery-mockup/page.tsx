"use client"

export default function FoodDeliveryMockup() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient background matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <span className="font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="ml-2 text-lg font-bold text-white font-serif">Code Craft Solutions</span>
          </div>
          <div className="text-white text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              Academic Excellence Starts HERE! →
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            PREMIUM FINAL YEAR PROJECTS
            <br />
            FOR{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              COMPUTER SCIENCE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              STUDENTS
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
            Elevate your academic journey with cutting-edge, industry-ready projects. From
            <br />
            AI and machine learning to web development and mobile apps - we deliver
            <br />
            exceptional solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Browse Projects
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Project Preview Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Project details */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Food. Order.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Deliver.
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience food delivery like never before with comprehensive
              <br />
              restaurant management, real-time order tracking, and seamless
              <br />
              user authentication system.
            </p>

            {/* Feature List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                <span>Restaurant Management Dashboard</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                <span>Real-time Order Tracking System</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                <span>User Authentication & Profile Management</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                <span>Responsive Design Architecture</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                <span>Payment Gateway Integration</span>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-2">TECHNOLOGY STACK</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">JSP</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Servlets</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">HTML5</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">CSS3</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors">
              🚀 Start Building
            </button>
          </div>

          {/* Right side - Visual element */}
          <div className="relative flex items-center justify-center">
            {/* FEASTO Preview Window */}
            <div className="relative bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 w-full max-w-md">
              {/* Browser-like header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400 ml-2">food-deliverye.netlify.app</div>
              </div>

              {/* FEASTO Interface */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">🍕</span>
                  </div>
                  <span className="text-white font-bold text-xl">FEASTO</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Discover Flavors.</h3>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                  Anywhere.
                </h3>
                <p className="text-gray-300 text-sm mb-6">From local gems to top-rated kitchens—delivered fast.</p>

                <div className="flex gap-2 justify-center mb-6">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium">
                    Explore Cuisines
                  </button>
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full text-xs">
                    Track Order
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Food Element */}
            <div className="absolute -right-8 -bottom-8 text-8xl opacity-80">🍔</div>
            <div className="absolute -left-4 -top-4 text-4xl opacity-60">🍕</div>
            <div className="absolute right-4 top-8 text-3xl opacity-70">🥤</div>
          </div>
        </div>
      </div>
    </div>
  )
}
