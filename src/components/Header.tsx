import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`rounded-2xl backdrop-blur-md transition-all duration-500 border ${
            isScrolled
              ? 'bg-slate-900/80 border-slate-800 shadow-2xl'
              : 'bg-slate-900/60 border-slate-700/50 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center group"
            >
              <img
                src="/images/programecho-dark.svg"
                alt="ProgramEcho Logo"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              &nbsp;
              &nbsp;
              <span className="font-programecho tracking-wider text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                ProgramEcho
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 px-6 space-y-2 border-t border-slate-800 mt-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800/50"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
