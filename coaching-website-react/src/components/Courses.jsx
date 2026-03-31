import './Courses.css';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const courses = [
  {
    featured: true,
    badge: 'Most Popular',
    badgeClass: '',
    icon: '📚',
    title: 'Private Tuition Classes',
    subtitle: 'Std VI to XII · CBSE · ICSE · GBSE · English Medium',
    items: [
      'School syllabus & foundation coaching',
      'Pre Medical, Pre Engineering, Competitive Exams',
      'Audio-visual teaching methods',
      'Personal attention guaranteed',
      'Suitable timings for every student',
    ],
    btnClass: 'btn-primary',
  },
  {
    badge: 'Newly Started',
    badgeClass: 'new',
    icon: '🔬',
    title: 'Pre-Foundation Programme',
    subtitle: 'Class VI to XII · Competitive Focus',
    items: [
      'Pre Medical (AIPMT / GujCET)',
      'Pre Engineering (JEE)',
      'Olympiad Preparation',
      'NTSE & KVPY',
      'Top Boarding School Entrances',
      'All Competitive Examinations',
    ],
    btnClass: 'btn-outline',
  },
  {
    icon: '✏️',
    title: 'Personal Coaching',
    subtitle: 'Std VI to XII · All Boards · English Medium',
    items: [
      'CBSE · ICSE · GBSE curriculum',
      'Maths & Grammar emphasis',
      'Verbal & English grammar practice',
      'Private tuitions – no run classes',
      'Logical & analytical reasoning',
      'Flexible scheduling',
    ],
    btnClass: 'btn-outline',
  },
];

function CourseCard({ course, delay }) {
  const ref = useScrollAnimate();
  return (
    <div
      className={`course-card animate-hidden ${course.featured ? 'featured' : ''}`}
      ref={ref}
      style={{ '--delay': `${delay}s` }}
    >
      {course.badge && (
        <div className={`course-badge ${course.badgeClass || ''}`}>{course.badge}</div>
      )}
      <div className="course-icon">{course.icon}</div>
      <h3>{course.title}</h3>
      <p className="course-subtitle">{course.subtitle}</p>
      <ul className="course-list">
        {course.items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <a href="#contact" className={`btn ${course.btnClass}`}>Enquire Now</a>
    </div>
  );
}

export default function Courses() {
  const headerRef = useScrollAnimate();
  const bannerRef = useScrollAnimate();

  return (
    <section className="courses section" id="courses">
      <div className="container">
        <div className="section-header animate-hidden" ref={headerRef}>
          <span className="section-tag">Programs We Offer</span>
          <h2>Our <span className="gradient-text">Courses</span></h2>
          <p>Comprehensive programs designed to take students from fundamentals to the top competitive examinations.</p>
        </div>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <CourseCard key={c.title} course={c} delay={i * 0.1 + 0.1} />
          ))}
        </div>
        <div className="admission-banner animate-hidden" ref={bannerRef}>
          <div className="admission-text">
            <h3>🎓 Admissions Open!</h3>
            <p>Std VI to XII • All competitive exams • For admission, students must appear for an aptitude test</p>
          </div>
          <a href="#contact" className="btn btn-white">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
