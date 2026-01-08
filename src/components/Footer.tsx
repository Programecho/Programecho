const Footer = () => {
  return (
    <footer className="bg-programecho text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <img
              src="/images/programecho-dark-name.webp"
              alt="ProgramEcho"
              className="h-16 sm:h-20 w-auto"
            />
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            The best way to <span className="font-bold text-white">Success</span>
          </p>

          <div className="pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} All Rights Reserved to{' '}
              <span className="font-programecho tracking-wider">ProgramEcho</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

