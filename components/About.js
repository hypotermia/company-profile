export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-img">
          <img src="/office.jpeg" alt="office" />
        </div>

        {/* TEXT */}
        <div className="about-text">
          <span className="about-tag">Tentang Kami</span>

          <h2>
            Partner Digital untuk <br /> Pertumbuhan Bisnis Anda
          </h2>

          <p>
            Kami adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital 
            modern untuk membantu bisnis berkembang lebih cepat, efisien, dan scalable.
          </p>

          <div className="about-list">
            <div className="about-item">✔️ 5+ Tahun Pengalaman</div>
            <div className="about-item">✔️ Tim Profesional & Inovatif</div>
            <div className="about-item">✔️ Fokus pada Kualitas & Scalability</div>
          </div>

          <button className="about-btn">Pelajari Lebih Lanjut</button>
        </div>

      </div>
    </section>
  )
}