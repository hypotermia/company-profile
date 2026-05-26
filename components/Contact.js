export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">

        {/* LEFT - INFO */}
        <div className="contact-info">
          <span className="contact-tag">Contact Us</span>
          <h2>Hubungi Kami</h2>
          <p>
            Kami siap membantu kebutuhan digital bisnis Anda. 
            Hubungi kami untuk konsultasi gratis.
          </p>

          <div className="contact-detail">
            <p>📍 Jakarta, Indonesia</p>
            <p>📧 info@company.com</p>
            <p>📞 +62 812 3456 7890</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="contact-form-box">
          <input type="text" placeholder="Nama" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Pesan"></textarea>
          <button>Kirim Pesan</button>
        </div>

      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}