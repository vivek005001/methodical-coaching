import './Hero.css';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const stats = [
  { num: '20+', label: 'Years Experience' },
  { num: 'VI–XII', label: 'Classes Covered' },
  { num: '1:1', label: 'Personal Attention' },
];

export default function Hero() {
  const contentRef = useScrollAnimate();
  const imageRef = useScrollAnimate('fade-left');

  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="container hero-inner">
        <div className="hero-content animate-hidden" ref={contentRef}>
          <span className="badge">✦ 20+ Years of Successful Teaching</span>
          <h1>Turn Your Dreams<br /><span className="gradient-text">Into Reality</span></h1>
          <p className="hero-subtitle">
            A golden tradition of faith &amp; success. You have the talent — we give you the platform to conclude its worth to its peak.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <>
                {i > 0 && <div key={`div-${i}`} className="stat-divider" />}
                <div key={s.label} className="stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="hero-image animate-hidden fade-left" ref={imageRef}>
          <div className="hero-img-wrapper">
            <img src="/hero_coaching.png" alt="Teacher coaching students in a modern classroom" />
          </div>
        </div>
      </div>
    </section>
  );
}
