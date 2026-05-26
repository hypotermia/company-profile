import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(null)

  const projects = [
    { img: 'bg.jpeg', title: 'Website Company', desc: 'Web Development' },
    { img: 'bg.jpeg', title: 'Mobile App', desc: 'Android & iOS' },
    { img: 'bg.jpeg', title: 'Dashboard', desc: 'Admin Panel' },
    { img: 'bg.jpeg', title: 'UI/UX Design', desc: 'Modern Interface' },
    { img: 'bg.jpeg', title: 'Website Company', desc: 'Web Development' },
    { img: 'bg.jpeg', title: 'Mobile App', desc: 'Android & iOS' },
    { img: 'bg.jpeg', title: 'Dashboard', desc: 'Admin Panel' },
    { img: 'bg.jpeg', title: 'UI/UX Design', desc: 'Modern Interface' }
  ]

  // 👉 ESC untuk close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setCurrentIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // 👉 SWIPE LOGIC
  let touchStartX = 0

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    let touchEndX = e.changedTouches[0].clientX

    if (touchStartX - touchEndX > 50) {
      nextSlide()
    }

    if (touchEndX - touchStartX > 50) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-grid">
        {projects.map((item, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)}>
            <img src={item.img} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {currentIndex !== null && (
        <div className="modal" onClick={() => setCurrentIndex(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={projects[currentIndex].img} />
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].desc}</p>

            {/* BUTTON NAV */}
            <div className="modal-nav">
              <button onClick={prevSlide}>⟵</button>
              <button onClick={nextSlide}>⟶</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}