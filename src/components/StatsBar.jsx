import { useEffect, useRef, useState } from 'react';
import { Award, Globe, Layers, CheckCircle2, Building2, FileSpreadsheet } from 'lucide-react';
import './StatsBar.css';

const stats = [
  { icon: Award, value: 709, suffix: '+', label: 'Exhibitions Covered', display: '709+' },
  { icon: Building2, value: 130000, suffix: '+', label: 'Trusted Business Clients', display: '130,000+' },
  { icon: Globe, value: 165, suffix: '+', label: 'Countries Importers', display: '165+' },
  { icon: CheckCircle2, value: 80, suffix: '%', label: 'Verified Lead Accuracy', display: '75-80%' },
  { icon: Layers, value: 80, suffix: '+', label: 'Trade & Industry Categories', display: '80+' },
  { icon: FileSpreadsheet, value: 100, suffix: '%', label: 'Clean Excel Format', display: '100%' },
];

function AnimatedNumber({ value, suffix, display, isVisible }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(intervalRef.current);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(intervalRef.current);
  }, [isVisible, value]);

  if (!isVisible) return <span>0</span>;

  // Format number
  const formatted = value >= 1000 
    ? count.toLocaleString()
    : count.toString();

  return <span>{formatted}{suffix}</span>;
}

export default function StatsBar() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={sectionRef} id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`stat-card animate-on-scroll stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="stat-icon">
                  <Icon size={22} />
                </div>
                <div className="stat-number">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    display={stat.display}
                    isVisible={isVisible}
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
