const Services = () => {
  const services = [
    { name: 'Laravel', icon: '/images/services/laravel-svgrepo-com.svg', color: 'from-red-500/20 to-red-600/20' },
    { name: 'Node.js', icon: '/images/services/node-js-svgrepo-com.svg', color: 'from-green-500/20 to-green-600/20' },
    { name: 'Flutter', icon: '/images/services/flutter-svgrepo-com.svg', color: 'from-blue-500/20 to-blue-600/20' },
    { name: 'PHP', icon: '/images/services/php-svgrepo-com.svg', color: 'from-indigo-500/20 to-indigo-600/20' },
    { name: 'TypeScript', icon: '/images/services/typescript-official-svgrepo-com.svg', color: 'from-blue-500/20 to-blue-600/20' },
    { name: 'Android', icon: '/images/services/Android_robot_head.svg', color: 'from-green-500/20 to-green-600/20' },
    { name: 'MySQL', icon: '/images/services/mysql-logo-svgrepo-com.svg', color: 'from-orange-500/20 to-orange-600/20' },
    { name: 'PostgreSQL', icon: '/images/services/postgresql-svgrepo-com.svg', color: 'from-blue-500/20 to-blue-600/20' },
    { name: 'iOS', icon: '/images/services/ios-svgrepo-com.svg', color: 'from-gray-500/20 to-gray-600/20' },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-programecho/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
                <div
                  className={`relative bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl border border-white/10`}
                >
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs sm:text-sm text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

