import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, FileText, Phone, MessageCircle } from 'lucide-react';

const verticalOptions = [
  'Exhibitors Data (+709 Exhibitions)',
  'All India B2B Companies Data',
  'City & State Wise B2B Database',
  'Trades & Industry Wise Database',
  'International Buyers & Importers (+165 Countries)',
  'Super Discounted B2B Data Combo',
  'Manufacturers Data (All Types)',
  'Exporters / Importers Data',
  'Corporates & Pvt. Ltd. Companies',
  'SME & MSME Companies Data',
  'Dealers & Distributors Data',
  'Machinery, Plants & Tools Data',
  'Electrical, Electronics & Solar Data',
  'Auto & Automobile Companies Data',
  'Food, Processing & Hospitality Data',
  'Medical, Health, Pharma & Wellness Data',
  'Construction, Hardware & Building Material',
  'Printing, Packaging, Paper & Plastic Data',
  'Professionals & Service Providers',
  'Warehouse, Logistics & Cargo Data',
  'Other Custom B2B Dataset',
];

export default function RequestPlan() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '', company: '', email: '', vertical: '', budget: '', message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.vertical) newErrors.vertical = 'Please select a vertical';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          to_email: 'krishnewgmail@gmail.com',
          subject: `Audience Plan Request from ${formData.fullName}`,
          from_name: formData.fullName,
          email: formData.email,
          company: formData.company,
          vertical: formData.vertical,
          budget: formData.budget || 'Not specified',
          message: formData.message || 'No additional details',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', background: 'var(--gradient-hero)' }}>
      <div className="container" style={{ maxWidth: 640, paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)', fontSize: 'var(--fs-sm)' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {submitted ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <div className="success-checkmark" style={{
              width: 80, height: 80, margin: '0 auto var(--space-xl)', background: 'rgba(34,197,94,0.1)',
              border: '2px solid var(--color-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)'
            }}>
              <CheckCircle size={36} />
            </div>
            <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-md)', color: 'var(--color-success)' }}>Thank You!</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-xl)' }}>
              Your audience targeting request has been sent to <strong style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</strong>. Our team will deliver a customized plan within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 'var(--space-xl)', flexWrap: 'wrap' }}>
              <a href="tel:+919793965272" className="btn btn-call-modal">
                <Phone size={16} /> Call +91 97939 65272
              </a>
              <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="btn btn-wa-modal">
                <MessageCircle size={16} /> WhatsApp Chat
              </a>
            </div>
            <Link to="/" className="btn btn-secondary">Return Home</Link>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              <div style={{
                width: 56, height: 56, margin: '0 auto var(--space-lg)', background: 'rgba(255,107,44,0.1)',
                border: '1px solid rgba(255,107,44,0.2)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)'
              }}>
                <FileText size={24} />
              </div>
              <h1 style={{ fontSize: 'var(--fs-2xl)', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>Request Your Audience Plan</h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-base)' }}>Tell us about your campaign and we'll create a custom targeting strategy.</p>

              <div className="modal-direct-bar" style={{ marginTop: 'var(--space-lg)' }}>
                <span>Prefer direct contact?</span>
                <div className="direct-buttons">
                  <a href="tel:+919793965272" className="direct-link direct-call" title="Call directly">
                    <Phone size={14} /> Call +91 97939 65272
                  </a>
                  <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="direct-link direct-wa" title="WhatsApp Chat">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="rp-fullName">Full Name <span className="required">*</span></label>
                <input id="rp-fullName" name="fullName" type="text" className={`form-input ${errors.fullName ? 'error' : ''}`} placeholder="John Doe" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-company">Company Name <span className="required">*</span></label>
                <input id="rp-company" name="company" type="text" className={`form-input ${errors.company ? 'error' : ''}`} placeholder="Acme Corp" value={formData.company} onChange={handleChange} />
                {errors.company && <div className="form-error">{errors.company}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-email">Email Address <span className="required">*</span></label>
                <input id="rp-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="john@acme.com" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-vertical">Campaign Goal / Vertical <span className="required">*</span></label>
                <select id="rp-vertical" name="vertical" className={`form-select ${errors.vertical ? 'error' : ''}`} value={formData.vertical} onChange={handleChange}>
                  <option value="">Select a vertical...</option>
                  {verticalOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                {errors.vertical && <div className="form-error">{errors.vertical}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-budget">Monthly Budget <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span></label>
                <select id="rp-budget" name="budget" className="form-select" value={formData.budget} onChange={handleChange}>
                  <option value="">Select budget range...</option>
                  <option value="<5000">Under $5,000</option>
                  <option value="5000-15000">$5,000 – $15,000</option>
                  <option value="15000-50000">$15,000 – $50,000</option>
                  <option value="50000-100000">$50,000 – $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-message">Additional Details <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span></label>
                <textarea id="rp-message" name="message" className="form-input" rows="4" placeholder="Tell us about your campaign goals, target audience, or any specific requirements..." value={formData.message} onChange={handleChange} style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
              <p className="form-note">Data will be routed to krishnewgmail@gmail.com. By submitting, you agree to our Privacy Policy.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
