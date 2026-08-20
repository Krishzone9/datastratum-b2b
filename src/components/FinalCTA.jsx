import { ArrowRight, Zap, Phone, MessageCircle } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA({ onOpenForm }) {
  return (
    <section className="final-cta section" id="final-cta">
      <div className="container">
        <div className="final-cta-content animate-on-scroll">
          <div className="final-cta-badge">
            <Zap size={12} />
            Instant Delivery in Excel Format
          </div>
          <h2>Ready to scale your <span className="accent-text">B2B sales pipeline</span>?</h2>
          <p>
            Get verified company lists, +709 exhibition exhibitor data, city/state databases, and international buyer contacts with 75-80% lead accuracy.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
            <button className="btn btn-primary btn-lg btn-pulse btn-with-tooltip" onClick={onOpenForm}>
              <span className="btn-tooltip">🎯 Get custom counts & pricing</span>
              Request Database Plan
              <ArrowRight size={18} />
            </button>
            <a href="tel:+919793965272" className="btn btn-secondary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Phone size={18} /> Call +91 97939 65272
            </a>
            <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37, 211, 102, 0.15)', borderColor: 'rgba(37, 211, 102, 0.3)', color: '#25D366' }}>
              <MessageCircle size={18} /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
