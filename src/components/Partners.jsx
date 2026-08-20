import './Partners.css';

const partners = [
  'Google DV360',
  'The Trade Desk',
  'Meta Ads',
  'Amazon DSP',
  'Xandr',
  'Yahoo DSP',
  'MediaMath',
  'Adobe Advertising',
  'Pubmatic',
  'Index Exchange',
  'Magnite',
  'LiveRamp',
  'Oracle Data',
  'Lotame',
  'Tapad',
  'Adform',
];

export default function Partners() {
  // Duplicate the list for seamless infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="partners section" id="partners">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">We Partner with <span className="accent-text">60+ Platforms</span></h2>
          <p className="section-subtitle">
            Seamless integrations with the world's leading DSPs, SSPs, and data platforms for instant activation.
          </p>
        </div>
      </div>

      <div className="partners-track-wrapper">
        <div className="partners-track">
          {allPartners.map((name, i) => (
            <div className="partner-logo" key={i}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
