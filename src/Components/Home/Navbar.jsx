import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa'

const Logo = '/assets/Home/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav
      className={`
        fixed z-50
        transition-all duration-500 ease-out
        ${isScrolled ? 'top-3 left-0 w-full' : 'top-0 left-0 w-full'}
      `}
    >
      {/* Navbar Wrapper */}
      <div
        className={`
          mx-auto
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? 'max-w-7xl px-4 sm:px-6'
              : 'max-w-none px-0'
          }
        `}
      >
        {/* Navbar */}
        <div
          className={`
            flex items-center justify-between
            transition-all duration-500 ease-out

            ${
              isScrolled
                ? `
                  bg-white/20
                  backdrop-blur-xl
                  rounded-full
                  border border-white/30
                  shadow-lg
                  px-8
                  py-4
                `
                : `
                  bg-white/10
                  backdrop-blur-md
                  rounded-none
                  border-b border-white/20
                  shadow-sm
                  px-8 lg:px-12
                  py-4
                `
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="TechCombo Logo"
              className="
                h-12
                w-auto
                object-contain
                brightness-75
                contrast-125
                drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]
                transition-all
                duration-500
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                  text-sm
                  font-semibold
                  text-slate-900
                  hover:text-blue-600
                  transition-colors
                  duration-200
                  whitespace-nowrap
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get In Touch Button */}
          <Link
            to="/contact"
            className="
              hidden lg:flex
              items-center
              gap-2
              bg-[#202124]
              text-white
              px-6
              py-3
              rounded-full
              text-sm
              font-semibold
              hover:bg-green-600
              hover:scale-105
              transition-all
              duration-200
            "
          >
          
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              text-slate-900
              text-xl
              p-2
            "
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              lg:hidden
              mt-3
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              shadow-xl
              border border-white/40
              p-5
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-slate-900
                    font-medium
                    hover:bg-white/50
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Get In Touch */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-3
                  bg-green-600
                  text-white
                  px-5
                  py-3
                  rounded-full
                  font-semibold
                "
              >
               
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar