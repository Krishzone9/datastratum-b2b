import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, FileSpreadsheet, Globe2, Award } from 'lucide-react';
import './ValueProps.css';

const props = [
  {
    icon: ShieldCheck,
    title: '75-80% Human-Verified Accuracy',
    description: 'Our team meticulously researches and validates business details so you receive high-converting B2B leads with company names, phone numbers, email IDs, and addresses in Excel format.',
  },
  {
    icon: Award,
    title: '+709 Exhibitions Exhibitors Data',
    description: 'Get verified exhibitors databases from over 709 major national & international trade shows (2016-2026) across machinery, auto, solar, food, medical, packaging, and building sectors.',
  },
  {
    icon: FileSpreadsheet,
    title: 'City & Trade Wise Granular Databases',
    description: 'Target prospects with pin-point precision using city & state-wise databases (Delhi NCR, Mumbai, Pune, Gujarat, Bangalore, etc.) or specific trade/industry categories.',
  },
  {
    icon: Globe2,
    title: '165+ Countries International Buyers',
    description: 'Expand overseas with verified international buyers, importers, exporters, and sellers data across USA, UK, Gulf, Europe, Australia, China, and 165+ global markets.',
  },
];

export default function ValueProps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="value-props section" id="value-props" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="accent-text">Datastratum</span></h2>
          <p className="section-subtitle">
            We combine global scale, premium quality, and unmatched support to power your audience strategy.
          </p>
        </div>

        <div className="value-grid">
          {props.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <div
                key={i}
                className={`value-card glass-card animate-on-scroll stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="value-icon">
                  <Icon size={28} />
                </div>
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
