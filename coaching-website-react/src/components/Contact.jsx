import { useState } from 'react';
import './Contact.css';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const infoItems = [
  {
    icon: '📍',
    label: 'Address',
    content: 'F-20-21, Silver Point,\nOpp. Vidhya Bharti School,\nBhatar Char Rasta, Bhatar Road,\nSurat, Gujarat',
  },
  { icon: '📞', label: 'Phone', content: '83476 78914', isPhone: true },
  { icon: '🕐', label: 'Timings', content: '4:00 PM - 7:00 PM\nMonday – Saturday' },
  { icon: '📝', label: 'Admission Note', content: 'Students must appear for an aptitude test. Fee payable at registration.' },
];

export default function Contact() {
  const headerRef = useScrollAnimate();
  const infoRef = useScrollAnimate();
  const formRef = useScrollAnimate();

  const [form, setForm] = useState({ name: '', phone: '', class: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert('Please fill in your name and phone number.');
    
    const message = `*New Admission Enquiry*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Class:* ${form.class || 'Not specified'}\n*Course:* ${form.course || 'Not specified'}\n*Message:* ${form.message || 'None'}`;
    const whatsappNumber = '918347678914';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setForm({ name: '', phone: '', class: '', course: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header animate-hidden" ref={headerRef}>
          <span className="section-tag">Get In Touch</span>
          <h2>Contact <span className="gradient-text">Us</span></h2>
          <p>Ready to start your journey? Reach out to us — we'd love to help you or your child reach their full potential.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info animate-hidden" ref={infoRef} style={{ '--delay': '0.1s' }}>
            <h3>Visit Us</h3>
            {infoItems.map(item => (
              <div className="info-item" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  {item.isPhone
                    ? <p><a href={`tel:${item.content.replace(/\s/g, '')}`}>{item.content}</a></p>
                    : <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <form
            className="contact-form animate-hidden"
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ '--delay': '0.2s' }}
            noValidate
          >
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="class">Class / Grade</label>
                <select id="class" name="class" value={form.class} onChange={handleChange}>
                  <option value="">Select class</option>
                  {['VI','VII','VIII','IX','X','XI','XII'].map(c => (
                    <option key={c}>Class {c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Interest</label>
              <select id="course" name="course" value={form.course} onChange={handleChange}>
                <option value="">Select a course</option>
                <option>Private Tuition Classes</option>
                <option>Pre-Foundation Programme</option>
                <option>Personal Coaching</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Any questions or additional information…" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            {submitted && (
              <div className="form-success">✅ Thank you! We'll contact you soon.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
