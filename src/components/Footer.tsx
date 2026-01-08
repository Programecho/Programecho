import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/images/programecho-dark.svg"
                alt="ProgramEcho Logo"
                className="h-12 w-auto"
              />
              &nbsp;
              &nbsp;
              <span className="font-programecho tracking-wider text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                ProgramEcho
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              The best way to <span className="font-semibold text-white">Success</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="tel:+963958611943" className="hover:text-white transition-colors">
                  +963 958 611 943
                </a>
              </li>
              <li>
                <a href="mailto:programecho@outlook.com" className="hover:text-white transition-colors">
                  programecho@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} All Rights Reserved to{' '}
            <span className="font-programecho tracking-wider text-white">ProgramEcho</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
