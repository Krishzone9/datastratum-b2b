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
    fullName: '', phone: '', company: '', email: '', vertical: '', budget: '', message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number with country code is required';
    } else if (!/^\+?[0-9\s-]{7,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number with country code (e.g. +91 97939 65272)';
    }
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
      await fetch('https://formsubmit.co/ajax/krishnewgmail@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `⚡ New B2B Database Lead from ${formData.fullName} (${formData.phone})`,
          _template: 'table',
          'Full Name': formData.fullName,
          'Phone Number (with Country Code)': formData.phone,
          'Company Name': formData.company,
          'Email Address': formData.email,
          'Selected B2B Category': formData.vertical,
          'Budget Range': formData.budget || 'Not specified',
          'Additional Requirements': formData.message || 'No additional details',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.log('Submission handled:', err);
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
              Your database quote request has been sent to <strong style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</strong>. Our team will contact you via Phone/WhatsApp within 24 hours.
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
              <h1 style={{ fontSize: 'var(--fs-2xl)', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>Request Database Plan & Pricing</h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-base)' }}>Get customized count, sample columns, and quotation delivered directly.</p>

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
                <input id="rp-fullName" name="fullName" type="text" className={`form-input ${errors.fullName ? 'error' : ''}`} placeholder="Rahul Sharma" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-phone">Phone Number (with Country Code) <span className="required">*</span></label>
                <input id="rp-phone" name="phone" type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="+91 97939 65272 (Enter with Country Code)" value={formData.phone} onChange={handleChange} />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-email">Email Address <span className="required">*</span></label>
                <input id="rp-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="rahul@company.com" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-company">Company / Business Name <span className="required">*</span></label>
                <input id="rp-company" name="company" type="text" className={`form-input ${errors.company ? 'error' : ''}`} placeholder="Apex Corp" value={formData.company} onChange={handleChange} />
                {errors.company && <div className="form-error">{errors.company}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-vertical">Database Category <span className="required">*</span></label>
                <select id="rp-vertical" name="vertical" className={`form-select ${errors.vertical ? 'error' : ''}`} value={formData.vertical} onChange={handleChange}>
                  <option value="">Select a vertical...</option>
                  {verticalOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                {errors.vertical && <div className="form-error">{errors.vertical}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-budget">Package Preference <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span></label>
                <select id="rp-budget" name="budget" className="form-select" value={formData.budget} onChange={handleChange}>
                  <option value="">Select package...</option>
                  <option value="Single State/City Pack">Single State / City Pack</option>
                  <option value="Single Trade / Industry Pack">Single Trade / Industry Pack</option>
                  <option value="Exhibition Wise Data (+709)">Exhibition Wise Data (+709)</option>
                  <option value="All India B2B Database">All India B2B Database</option>
                  <option value="International Buyers Pack">International Buyers Pack</option>
                  <option value="Super Discount Combo Pack">Super Discount Combo Pack</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="rp-message">Additional Requirements / Query <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span></label>
                <textarea id="rp-message" name="message" className="form-input" rows="3" placeholder="Tell us specific cities, states, trades or requirements..." value={formData.message} onChange={handleChange} style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? 'Sending Request...' : 'Submit Database Request'}
              </button>
              <p className="form-note">Data will be routed to krishnewgmail@gmail.com. We respect your privacy.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
