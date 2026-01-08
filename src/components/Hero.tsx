const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient">
              Our code builds
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              your dreams
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Unlock the full potential of your business with our cutting-edge software solutions
            and programming expertise.
          </p>

          <div className="pt-8">
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-8 py-4 bg-white text-programecho font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

