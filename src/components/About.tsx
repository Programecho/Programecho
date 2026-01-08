import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
  const features = [
    { icon: '🎯', title: 'Expert Team', desc: 'Skilled developers ready for any challenge' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
    { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security and reliability' },
    { icon: '💡', title: 'Innovation', desc: 'Cutting-edge solutions for modern problems' },
  ]

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/images/about.webp"
                alt="About ProgramEcho"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 w-fit">
              About Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              We're More Than Just
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developers
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We're a startup software development company on a mission to make it easy for
              businesses to find and work with the right developers. We specialize in matching
              businesses with the perfect developers for their project, taking the guesswork out
              of finding the right fit.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether you're looking to build a new app or need help fixing an existing one,
              we've got you covered with expertise, dedication, and innovation.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900/60 backdrop-blur-xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
