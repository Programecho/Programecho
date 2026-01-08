import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-2">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/30">
                🚀 We Build Dreams
              </Badge>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              <span className="block text-white mb-2">
                Transform Your
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Ideas Into Reality
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Cutting-edge software solutions powered by expert developers. 
              We turn your vision into scalable, beautiful applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-8 py-6 h-auto shadow-lg shadow-cyan-500/50"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#services')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6 h-auto"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-slate-400">Years</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glowing Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 h-4 bg-slate-800 rounded ml-4" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-800 rounded w-3/4" />
                    <div className="h-3 bg-slate-800 rounded w-full" />
                    <div className="h-3 bg-slate-800 rounded w-5/6" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30" />
                    <div className="h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg border border-teal-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
