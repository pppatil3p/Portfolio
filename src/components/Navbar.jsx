"use client"

import { useState } from "react"
import Button from "./Button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-foreground">
          PPPatil<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm transition-colors duration-300 ${
                  activeLink === link.name
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <Button variant="outline">Hire me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name)
                    setMobileMenuOpen(false)
                  }}
                  className={`block text-sm ${activeLink === link.name ? "text-accent" : "text-muted"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button variant="outline" className="w-full bg-transparent">
                Hire me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
