const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-programecho/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Mobile First */}
            <div className="lg:hidden order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src="/images/about.webp"
                  alt="About ProgramEcho"
                  className="relative rounded-2xl w-full h-auto shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">
                About Our Company
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mb-8 rounded-full" />
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                We're a startup software development company, and we're on a mission to make it easy for
                businesses to find and work with the right developers. We specialize in matching
                businesses with the perfect developers for their project, and we take the guesswork out
                of finding the right fit. So whether you're looking to build a new app or need help
                fixing an existing one, we've got you covered.
              </p>
            </div>

            {/* Image - Desktop */}
            <div className="hidden lg:block order-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src="/images/about.webp"
                  alt="About ProgramEcho"
                  className="relative rounded-2xl w-full h-auto shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

