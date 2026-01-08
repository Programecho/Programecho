import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://submit-form.com/SSFHnSpY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ Name: '', Phone: '', Email: '', Message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: 'Phone', href: 'tel:+963958611943', icon: '📱', color: 'hover:bg-blue-500' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/programecho', icon: '💼', color: 'hover:bg-blue-600' },
    { name: 'GitHub', href: 'https://github.com/Programecho', icon: '💻', color: 'hover:bg-gray-800' },
    { name: 'Email', href: 'mailto:programecho@outlook.com', icon: '✉️', color: 'hover:bg-red-500' },
  ]

  return (
    <>
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="bg-programecho/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300">
                Get in touch and let's build something amazing together
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>

              <div>
                <textarea
                  name="Message"
                  placeholder="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={5}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 bg-white text-programecho font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send'}
                    {!isSubmitting && (
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Social Links Bar */}
      <div className="sticky bottom-0 z-40 bg-programecho backdrop-blur-xl border-t border-white/10 rounded-t-3xl shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:bg-white/20 ${link.color} border border-white/20`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

