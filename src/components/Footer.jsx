import { Link } from 'react-router-dom';
import { Database, ExternalLink, Mail, Globe, Phone, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <span className="logo-icon"><Database size={20} /></span>
              Datastratum
            </Link>
            <p>
              The leading B2B database provider company offering human-verified 
              All-India company lists, +709 exhibition exhibitor data, trade-wise 
              databases, city/state directories, and international buyer contacts 
              in Excel format with 75-80% lead accuracy.
            </p>
          </div>

          <div className="footer-column">
            <h4>Direct Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+919793965272" className="footer-contact-link">
                  <Phone size={15} style={{ color: 'var(--color-accent)' }} /> +91 97939 65272
                </a>
              </li>
              <li>
                <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="footer-contact-link wa-link">
                  <MessageCircle size={15} style={{ color: '#25D366' }} /> WhatsApp Chat
                </a>
              </li>
              <li>
                <a href="mailto:krishnewgmail@gmail.com" className="footer-contact-link">
                  <Mail size={15} style={{ color: 'var(--color-accent)' }} /> krishnewgmail@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#explorer">B2B Catalog</a></li>
              <li><a href="#value-props">Why Choose Us</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/opt-out">Ad Choices / Do Not Sell</Link></li>
              <li><a href="#">Data Subject Rights</a></li>
              <li><a href="#">Imprint</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Datastratum. All rights reserved.</p>
          <div className="footer-socials">
            <a href="tel:+919793965272" aria-label="Direct Phone Call" title="Call +91 97939 65272"><Phone size={16} /></a>
            <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp Chat"><MessageCircle size={16} /></a>
            <a href="mailto:krishnewgmail@gmail.com" aria-label="Email" title="Email Us"><Mail size={16} /></a>
            <a href="#" aria-label="LinkedIn"><ExternalLink size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
