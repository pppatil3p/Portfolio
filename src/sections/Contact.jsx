"use client"

import { useState } from "react"
import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"

const contactInfo = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "(+91) 9322351023",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "prathmesh3p45@gmail.com",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Address",
    value: "Nagpur,MH-India",
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <SectionWrapper id="contact">
      <div className="grid md:grid-cols-[1fr_300px] gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
          <p className="text-muted mb-8">
           Open to opportunities, collaborations, and freelance work. Let’s build something impactful together.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Firstname"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Lastname"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-muted focus:outline-none focus:border-accent transition-colors"
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="design">UI/UX Design</option>
              <option value="logo">Logo Design</option>
              <option value="seo">SEO</option>
            </select>
            <textarea
              name="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-card/30 border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <Button type="submit" variant="primary" className="w-full md:w-auto">
              Send message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-card/50 border border-border flex items-center justify-center text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                </svg>
              </div>
              <div>
                <p className="text-muted text-sm">{info.label}</p>
                <p className="text-foreground">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
