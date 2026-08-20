import { useState } from 'react';
import { X, Send, CheckCircle, FileText, Phone, MessageCircle } from 'lucide-react';
import './LeadFormModal.css';

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

export default function LeadFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    vertical: '',
    budget: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.vertical) newErrors.vertical = 'Please select a vertical';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form submission to krishnewgmail@gmail.com using FormSubmit endpoint
      await fetch('https://formsubmit.co/ajax/krishnewgmail@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `⚡ New B2B Database Lead from ${formData.fullName} (${formData.company})`,
          _template: 'table',
          'Full Name': formData.fullName,
          'Company Name': formData.company,
          'Email Address': formData.email,
          'Selected B2B Category': formData.vertical,
          'Budget Range': formData.budget || 'Not specified',
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

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({ fullName: '', company: '', email: '', vertical: '', budget: '' });
    setErrors({});
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-card">
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <X size={18} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-checkmark">
              <CheckCircle size={36} />
            </div>
            <h2>Request Submitted!</h2>
            <p>
              Your plan request has been routed directly to our specialist at{' '}
              <strong style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</strong>.
              We will contact you within 24 hours.
            </p>
            <div className="modal-quick-actions">
              <a href="tel:+919793965272" className="btn btn-call-modal">
                <Phone size={16} /> Call +91 97939 65272
              </a>
              <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="btn btn-wa-modal">
                <MessageCircle size={16} /> WhatsApp Chat
              </a>
            </div>
            <button className="btn btn-secondary" onClick={handleClose} style={{ marginTop: 'var(--space-md)' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-icon">
                <FileText size={24} />
              </div>
              <h2>Request Your Custom Plan</h2>
              <p>Fill in your details to receive a custom plan directly from our team.</p>
            </div>

            {/* Quick Contact Direct Options Bar */}
            <div className="modal-direct-bar">
              <span>Need immediate assistance?</span>
              <div className="direct-buttons">
                <a href="tel:+919793965272" className="direct-link direct-call" title="Call directly">
                  <Phone size={14} /> Call +91 97939 65272
                </a>
                <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="direct-link direct-wa" title="WhatsApp Chat">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="company">
                  Company Name <span className="required">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={`form-input ${errors.company ? 'error' : ''}`}
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && <div className="form-error">{errors.company}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="john@acme.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="vertical">
                  Campaign Goal / Vertical <span className="required">*</span>
                </label>
                <select
                  id="vertical"
                  name="vertical"
                  className={`form-select ${errors.vertical ? 'error' : ''}`}
                  value={formData.vertical}
                  onChange={handleChange}
                >
                  <option value="">Select a vertical...</option>
                  {verticalOptions.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                {errors.vertical && <div className="form-error">{errors.vertical}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget">
                  Monthly Budget <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range...</option>
                  <option value="<5000">Under $5,000</option>
                  <option value="5000-15000">$5,000 – $15,000</option>
                  <option value="15000-50000">$15,000 – $50,000</option>
                  <option value="50000-100000">$50,000 – $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={isSubmitting}>
                <Send size={16} />
                {isSubmitting ? 'Sending Request...' : 'Submit Request'}
              </button>

              <p className="form-note">
                Data will be routed to krishnewgmail@gmail.com. 
                By submitting, you agree to our Privacy Policy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
