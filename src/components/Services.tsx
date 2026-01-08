import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Services = () => {
  const services = [
    { 
      name: 'Laravel', 
      icon: '/images/services/laravel-svgrepo-com.svg', 
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30',
      hoverColor: 'hover:border-red-500/60',
      category: 'Backend'
    },
    { 
      name: 'Node.js', 
      icon: '/images/services/node-js-svgrepo-com.svg', 
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-500/60',
      category: 'Backend'
    },
    { 
      name: 'Flutter', 
      icon: '/images/services/flutter-svgrepo-com.svg', 
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-500/60',
      category: 'Mobile'
    },
    { 
      name: 'PHP', 
      icon: '/images/services/php-svgrepo-com.svg', 
      color: 'from-indigo-500/20 to-indigo-600/20',
      borderColor: 'border-indigo-500/30',
      hoverColor: 'hover:border-indigo-500/60',
      category: 'Backend'
    },
    { 
      name: 'TypeScript', 
      icon: '/images/services/typescript-official-svgrepo-com.svg', 
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-500/60',
      category: 'Frontend'
    },
    { 
      name: 'Android', 
      icon: '/images/services/Android_robot_head.svg', 
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-500/60',
      category: 'Mobile'
    },
    { 
      name: 'MySQL', 
      icon: '/images/services/mysql-logo-svgrepo-com.svg', 
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      hoverColor: 'hover:border-orange-500/60',
      category: 'Database'
    },
    { 
      name: 'PostgreSQL', 
      icon: '/images/services/postgresql-svgrepo-com.svg', 
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-500/60',
      category: 'Database'
    },
    { 
      name: 'iOS', 
      icon: '/images/services/ios-svgrepo-com.svg', 
      color: 'from-gray-500/20 to-gray-600/20',
      borderColor: 'border-gray-500/30',
      hoverColor: 'hover:border-gray-500/60',
      category: 'Mobile'
    },
  ]

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 mb-4">
            Our Tech Stack
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies We
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master & Love
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We work with cutting-edge technologies to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`bg-gradient-to-br ${service.color} backdrop-blur-xl border ${service.borderColor} ${service.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <CardHeader className="p-4 pb-2">
                <div className="aspect-square flex items-center justify-center mb-2">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="text-sm font-semibold text-white text-center mb-1">
                  {service.name}
                </CardTitle>
                <Badge 
                  variant="outline" 
                  className="text-xs w-full justify-center border-slate-700 text-slate-400"
                >
                  {service.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
