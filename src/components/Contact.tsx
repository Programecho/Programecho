import { useState, FormEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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
    { name: 'Phone', href: 'tel:+963958611943', icon: '📱', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/programecho', icon: '💼', color: 'hover:bg-blue-600/20 hover:border-blue-600/50' },
    { name: 'GitHub', href: 'https://github.com/Programecho', icon: '💻', color: 'hover:bg-gray-800/20 hover:border-gray-800/50' },
    { name: 'Email', href: 'mailto:programecho@outlook.com', icon: '✉️', color: 'hover:bg-red-500/20 hover:border-red-500/50' },
  ]

  return (
    <>
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's Build Something
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-slate-900/60 backdrop-blur-xl border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        value={formData.Name}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="Phone"
                        placeholder="Phone Number"
                        value={formData.Phone}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="Message"
                      placeholder="Your Message"
                      value={formData.Message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={5}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-slate-800 ${link.color} transition-all duration-300 group`}
                    >
                      <div className="text-2xl">{link.icon}</div>
                      <div>
                        <div className="text-white font-medium group-hover:text-white">
                          {link.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
