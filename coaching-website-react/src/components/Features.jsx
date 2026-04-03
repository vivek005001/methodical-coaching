import './Features.css';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const features = [
  { num: '01', title: 'One-to-One Teaching', desc: 'Individual guidance and problem-solving instruction tailored to each student\'s pace.' },
  { num: '02', title: 'Self-Reasoning Method', desc: 'Achieve self-reasoning power through our unique Question-Answer approach.' },
  { num: '03', title: 'Exam Preparation', desc: 'Preparation for all tests, school exams, and competitive entrance examinations.' },
  { num: '04', title: 'Chapter Notes', desc: 'Extra questions and detailed chapter notes provided for subject coverage.' },
  { num: '05', title: 'Writing & MCQ Practice', desc: 'Special emphasis on writing practice and objective-type question preparation.' },
  { num: '06', title: 'Personality Development', desc: 'We build character and make students logically strong for a bright future.' },
  { num: '07', title: 'Foundation Training', desc: 'Foundation training for IIT, NEET, and top boarding school entrances.' },
  { num: '08', title: 'Verbal & Logical Reasoning', desc: 'Verbal, non-verbal, logical, and analytical reasoning practice for all exams.' },
];

function FeatureItem({ feature, delay }) {
  const ref = useScrollAnimate();
  return (
    <div className="feature-item animate-hidden" ref={ref} style={{ '--delay': `${delay}s` }}>
      <div className="feature-num">{feature.num}</div>
      <h4>{feature.title}</h4>
      <p>{feature.desc}</p>
    </div>
  );
}

export default function Features() {
  const headerRef = useScrollAnimate();
  const imgRef = useScrollAnimate();

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header animate-hidden" ref={headerRef}>
          <span className="section-tag">Why Choose Us</span>
          <h2>Key <span className="gradient-text">Features</span></h2>
          <p>Everything we do is designed to give students the best possible advantage in their academic journey.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <FeatureItem key={f.num} feature={f} delay={i * 0.05 + 0.05} />
          ))}
        </div>
        <div className="features-image-block animate-hidden" ref={imgRef}>
          <img src="/features_icons.png" alt="Coaching features overview" />
        </div>
      </div>
    </section>
  );
}
