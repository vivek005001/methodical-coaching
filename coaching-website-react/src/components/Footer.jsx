import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <img src="/logo.jpeg" alt="Methodical Coaching" className="logo-icon" />
            <span className="logo-text">Methodical <em>Coaching</em></span>
          </a>
          <p>A trusted name in quality education since 2000. Every child has a lot of potential — we push them in the right direction.</p>
        </div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            {['about', 'features', 'courses', 'contact'].map(id => (
              <li key={id}><a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>F-20-21, Silver Point,<br />Bhatar Road, Surat</p>
          <a href="tel:8347678914">📞 83476 78914</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Methodical Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
}
