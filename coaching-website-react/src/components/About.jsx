import './About.css';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const cards = [
  { icon: '🎯', title: 'Our Mission', desc: 'To provide every student with focused, one-on-one guidance that builds not just academic knowledge but self-reasoning power and personality.' },
  { icon: '📺', title: 'Audio-Visual Teaching', desc: 'We use modern audio-visual methods for easy understanding of even the most complex subjects, making learning engaging and effective.' },
  { icon: '📋', title: 'Continuous Evaluation', desc: 'Regular tests after every unit/chapter, written tests at chapter completion, and maximum objective practice ensure thorough preparation.' },
  { icon: '🏆', title: 'Small Batch Size', desc: 'Very few students per batch ensures every child receives individual attention and their learning pace is respected and nurtured.' },
];

const terms = [
  'Registration fee ₹300 payable at the time of registration',
  'Students must appear for an aptitude test to confirm admission',
  '2nd term fees to be paid by 15th September',
  '10th & 12th class portion completed by October',
  'Late fee of ₹500 will be charged • All fees are non-refundable',
  'Regular attendance is compulsory',
];

export default function About() {
  const headerRef = useScrollAnimate();
  const termsRef = useScrollAnimate();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header animate-hidden" ref={headerRef}>
          <span className="section-tag">Who We Are</span>
          <h2>A Trusted Name in <span className="gradient-text">Quality Education</span></h2>
          <p>Located at F-20-21, Silver Point, Bhatar Road, Surat — we are a premier coaching institute dedicated to unlocking every child's true potential through methodical, personalized teaching.</p>
        </div>
        <div className="about-grid">
          {cards.map((c, i) => (
            <AboutCard key={c.title} card={c} delay={i * 0.1 + 0.1} />
          ))}
        </div>
        <div className="terms-strip animate-hidden" ref={termsRef}>
          <h4>Terms &amp; Conditions</h4>
          <ul>
            {terms.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ card, delay }) {
  const ref = useScrollAnimate();
  return (
    <div className="about-card animate-hidden" ref={ref} style={{ '--delay': `${delay}s` }}>
      <div className="about-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  );
}
