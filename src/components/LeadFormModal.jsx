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
    phone: '',
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
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number with country code is required';
    } else if (!/^\+?[0-9\s-]{7,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number with country code (e.g. +91 97939 65272)';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.vertical) newErrors.vertical = 'Please select a vertical/category';
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
          _subject: `⚡ New B2B Database Lead from ${formData.fullName} (${formData.phone})`,
          _template: 'table',
          'Full Name': formData.fullName,
          'Phone Number (with Country Code)': formData.phone,
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
    setFormData({ fullName: '', phone: '', company: '', email: '', vertical: '', budget: '' });
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
              Your plan request has been sent to our team at{' '}
              <strong style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</strong>.
              We will contact you via WhatsApp / Call / Email within 24 hours.
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
              <h2>Request Your Database Quote</h2>
              <p>Fill in your contact details to receive verified sample counts and pricing.</p>
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
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone Number (with Country Code) <span className="required">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+91 97939 65272 (Enter with Country Code)"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
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
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="company">
                  Company / Business Name <span className="required">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={`form-input ${errors.company ? 'error' : ''}`}
                  placeholder="e.g. Apex Industrial Supplies"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && <div className="form-error">{errors.company}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="vertical">
                  Target B2B Database Category <span className="required">*</span>
                </label>
                <select
                  id="vertical"
                  name="vertical"
                  className={`form-select ${errors.vertical ? 'error' : ''}`}
                  value={formData.vertical}
                  onChange={handleChange}
                >
                  <option value="">Select a database category...</option>
                  {verticalOptions.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                {errors.vertical && <div className="form-error">{errors.vertical}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget">
                  Estimated Requirement / Budget <span style={{ color: 'var(--color-text-dim)' }}>(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range...</option>
                  <option value="Single State/City Pack">Single State / City Pack</option>
                  <option value="Single Trade / Industry Pack">Single Trade / Industry Pack</option>
                  <option value="Exhibition Wise Data (+709)">Exhibitions Wise Data (+709)</option>
                  <option value="All India B2B Database">All India B2B Database</option>
                  <option value="International Buyers Pack">International Buyers Pack</option>
                  <option value="Super Discount Combo Pack">Super Discount Combo Pack</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={isSubmitting}>
                <Send size={16} />
                {isSubmitting ? 'Sending Request...' : 'Submit Database Request'}
              </button>

              <p className="form-note">
                Directly sent to krishnewgmail@gmail.com. We respect your privacy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
