import { useEffect, useRef, useState } from 'react';
import {
  Briefcase, Building, Globe2, MapPin, Award, Layers,
  Wrench, Zap, Car, Utensils, HeartPulse, HardHat,
  Package, Truck, Users, Tag, ShieldCheck, Cpu, Factory, Anchor
} from 'lucide-react';
import './Verticals.css';

const verticals = [
  { icon: Award, label: '+709 Exhibitions Exhibitors' },
  { icon: Factory, label: 'Manufacturers & Industrial' },
  { icon: Briefcase, label: 'All India B2B Companies' },
  { icon: MapPin, label: 'City & State Wise B2B' },
  { icon: Globe2, label: 'International Buyers (+165 Countries)' },
  { icon: Layers, label: 'Super Discounted Data Combos' },
  { icon: Anchor, label: 'Exporters & Importers' },
  { icon: Building, label: 'Corporates & Pvt Ltd Companies' },
  { icon: ShieldCheck, label: 'SME & MSME Companies' },
  { icon: Wrench, label: 'Machinery, Plants & Tools' },
  { icon: Zap, label: 'Electrical, Electronics & Solar' },
  { icon: Car, label: 'Auto & Automobile Companies' },
  { icon: Utensils, label: 'Food, Processing & Hospitality' },
  { icon: HeartPulse, label: 'Medical, Pharma & Health' },
  { icon: HardHat, label: 'Construction & Building Material' },
  { icon: Package, label: 'Printing, Packaging & Plastic' },
  { icon: Users, label: 'Professionals & Service Providers' },
  { icon: Truck, label: 'Warehouse, Logistics & Cargo' },
  { icon: Cpu, label: 'Automation & Sheet Metal' },
  { icon: Tag, label: 'Dealers, Distributors & Retailers' },
];

export default function Verticals() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="verticals section" id="verticals" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Verified Data Across <span className="accent-text">20+ Key Categories</span></h2>
          <p className="section-subtitle">
            Explore human-verified, updated B2B companies, exhibition lists, trade-wise databases, and international buyer contacts in Excel format.
          </p>
        </div>

        <div className="verticals-grid">
          {verticals.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`vertical-item animate-on-scroll ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.04 * i}s` }}
              >
                <div className="vertical-icon">
                  <Icon size={22} />
                </div>
                <div className="vertical-label">{v.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
