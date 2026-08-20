import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Phone, Mail, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenForm }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-wrapper">
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-info">
            <span><ShieldCheck size={14} style={{ color: 'var(--color-accent)' }} /> #1 Verified B2B & Exhibitor Database Provider</span>
            <a href="mailto:krishnewgmail@gmail.com" className="top-bar-link">
              <Mail size={13} /> krishnewgmail@gmail.com
            </a>
          </div>
          <div className="top-bar-info">
            <a href="tel:+919793965272" className="top-bar-link" title="Click to call directly">
              <Phone size={13} /> +91 97939 65272
            </a>
            <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="top-bar-wa-link">
              <MessageCircle size={13} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Discount Ticker Banner */}
      <div className="offer-ticker">
        <span className="blink-badge">SPECIAL OFFER</span>
        ⚡ SPECIAL DISCOUNT: Get Flat 30% Off All B2B & Exhibitors Database Packages — Claim Offer Today!
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon"><Database size={20} /></span>
            Datastratum
          </Link>

          <div className="navbar-links">
            <a href="#explorer" onClick={(e) => { e.preventDefault(); scrollToSection('explorer'); }}>B2B Catalog</a>
            <a href="#value-props" onClick={(e) => { e.preventDefault(); scrollToSection('value-props'); }}>Why Choose Us</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQs</a>
          </div>

          <div className="navbar-cta">
            <button className="btn btn-primary btn-pulse btn-with-tooltip" onClick={onOpenForm}>
              <span className="btn-tooltip">✨ Custom quote in 24 hrs</span>
              Request Database Plan
            </button>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <a href="#explorer" onClick={(e) => { e.preventDefault(); scrollToSection('explorer'); }}>B2B Catalog</a>
        <a href="#value-props" onClick={(e) => { e.preventDefault(); scrollToSection('value-props'); }}>Why Choose Us</a>
        <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQs</a>
        <div className="mobile-contact-actions">
          <a href="tel:+919793965272" className="mobile-call-btn">
            <Phone size={16} /> Call +91 97939 65272
          </a>
          <a href="https://wa.me/919793965272" target="_blank" rel="noopener noreferrer" className="mobile-wa-btn">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
        <button className="btn btn-primary btn-pulse" onClick={() => { setMobileOpen(false); onOpenForm(); }}>
          Request Database Plan
        </button>
      </div>
    </header>
  );
}
