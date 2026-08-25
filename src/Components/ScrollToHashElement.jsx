import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToHashElement = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Decode the hash in case it contains special characters
      const id = decodeURIComponent(location.hash.slice(1))
      const element = document.getElementById(id)
      if (element) {
        // Delay slightly to allow the DOM/component to finish rendering
        const timer = setTimeout(() => {
          const nav = document.querySelector('nav')
          const navHeight = nav ? nav.offsetHeight : 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight - 20

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
        return () => clearTimeout(timer)
      }
    } else {
      // If no hash, scroll to top (like normal page transitions)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

export default ScrollToHashElement
