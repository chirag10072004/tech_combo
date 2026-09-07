import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

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
  ] 

  return (
    <nav
      className={`
        fixed z-50
        transition-all duration-500 ease-out
        ${isScrolled ? 'top-3 left-0 w-full' : 'top-0 left-0 w-full'}
      `}
    >
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
                transition-all
                duration-500
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative
                  py-2
                  text-sm
                  font-semibold
                  whitespace-nowrap
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? 'text-green-600'
                      : 'text-slate-900 hover:text-green-600'
                  }

                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:bg-green-600
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="
              hidden lg:flex
              items-center
              justify-center
              bg-blue-600
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
            Contact Us
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
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    px-4
                    py-3
                    rounded-xl
                    font-medium
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? 'text-green-600 bg-green-50'
                        : 'text-slate-900 hover:bg-white/50'
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Contact Us */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  mt-3
                  bg-green-600
                  text-white
                  px-5
                  py-3
                  rounded-full
                  font-semibold
                "
              >
                Contact Us
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar