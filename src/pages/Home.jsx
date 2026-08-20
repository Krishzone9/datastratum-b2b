import { useEffect } from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import DataExplorer from '../components/DataExplorer';
import ValueProps from '../components/ValueProps';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home({ onOpenForm }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ paddingTop: '90px' }}>
      <Hero onOpenForm={onOpenForm} />
      <StatsBar />
      <DataExplorer onOpenForm={onOpenForm} />
      <ValueProps />
      <FAQ onOpenForm={onOpenForm} />
      <FinalCTA onOpenForm={onOpenForm} />
    </main>
  );
}
