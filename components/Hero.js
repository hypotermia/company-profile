// components/Hero.js
import { useEffect, useState } from 'react'

export default function Hero() {
  const images = [
    '/img/home1.jpeg',
    '/img/home2.jpeg',
    '/img/home3.jpeg'
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">

      {/* Background */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="fade-up">
          Transform Your Business with Digital Solutions
        </h1>
        <p className="fade-up delay">
          Kami membantu bisnis berkembang melalui teknologi modern
        </p>

        <div className="hero-btn fade-up delay2">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      {/* Indicator */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  )
}