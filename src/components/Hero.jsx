import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenForm }) {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="dot"></span>
              #1 Verified B2B Database Provider
            </div>
            <h1 className="hero-title">
              Verified <span className="gradient-text">B2B Companies & Exhibitors</span> Database
            </h1>
            <p className="hero-subtitle">
              Access 709+ exhibition lists, All-India trade-wise B2B databases, city & state-wise company contacts, and international buyers directory from 165+ countries in verified Excel format.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg btn-pulse btn-with-tooltip" onClick={onOpenForm}>
                <span className="btn-tooltip">✨ Custom Database Quote in 24 hrs</span>
                Request Database Plan
                <ArrowRight size={18} />
              </button>
              <a href="#explorer" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Browse Catalog
              </a>
            </div>
            <div className="hero-stats-mini">
              <div className="hero-stat-item">
                <div className="hero-stat-number">709+</div>
                <div className="hero-stat-label">Exhibitions</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">75-80%</div>
                <div className="hero-stat-label">Accuracy</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">165+</div>
                <div className="hero-stat-label">Countries</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src="/hero.png" alt="Data professionals collaborating on B2B audience database" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="hero-float-element el-1">
        <Sparkles size={14} style={{ color: 'var(--color-accent)', marginRight: 6 }} />
        Verified Excel Format
      </div>
      <div className="hero-float-element el-2">
        🎯 75-80% Lead Accuracy
      </div>
    </section>
  );
}
