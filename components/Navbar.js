import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact']

      let current = 'hero'

      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop - 120
          if (window.scrollY >= top) {
            current = id
          }
        }
      })

      setActive(current)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <a href="#hero" className={active === 'hero' ? 'active' : ''}>Home</a>
      <a href="#about" className={active === 'about' ? 'active' : ''}>About</a>
      <a href="#services" className={active === 'services' ? 'active' : ''}>Services</a>
      <a href="#portfolio" className={active === 'portfolio' ? 'active' : ''}>Portfolio</a>
      <a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a>
    </nav>
  )
}