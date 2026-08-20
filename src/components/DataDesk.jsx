import { Target, ArrowRight } from 'lucide-react';
import './DataDesk.css';

export default function DataDesk({ onOpenForm }) {
  return (
    <section className="data-desk section" id="data-desk">
      <div className="container">
        <div className="data-desk-inner animate-on-scroll">
          <div className="data-desk-dots left"></div>
          <div className="data-desk-dots right"></div>
          
          <div className="data-desk-icon">
            <Target size={28} />
          </div>
          <h2>Do you want to target your audience with <span className="accent-text">precision</span>?</h2>
          <p>Get an audience targeting plan delivered to your inbox — tailored to your campaign goals and budget.</p>
          <button className="btn btn-primary btn-lg btn-pulse btn-with-tooltip" onClick={onOpenForm}>
            <span className="btn-tooltip">📩 Delivered to your inbox</span>
            Create My Plan
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
