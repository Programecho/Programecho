import { useState } from 'react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about', icon: 'ℹ️' },
    { name: 'Services', href: '#services', icon: '💼' },
    { name: 'Contact Us', href: '#contact', icon: '📞' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-4">
        <nav
          className={`rounded-2xl backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 shadow-2xl'
              : 'bg-white/95 shadow-lg'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="block"
                >
                  <img
                    src="/images/programecho-light-name.webp"
                    alt="ProgramEcho Logo"
                    className="h-12 sm:h-16 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-2 text-gray-700 hover:text-programecho font-medium rounded-lg transition-all duration-300 hover:bg-programecho/10 uppercase text-sm tracking-wide flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top duration-300">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-programecho font-medium rounded-lg transition-all duration-300 hover:bg-programecho/10 uppercase text-sm tracking-wide flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

