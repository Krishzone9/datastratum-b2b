import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Mail, Database, Share2, Send } from 'lucide-react';
import './Omnichannel.css';

const channels = [
  {
    icon: Phone,
    title: 'Tele-Sales & Cold Calling',
    description: 'Verified mobile and direct phone numbers ready for your sales reps and call center team to drive direct conversions.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    description: 'Import mobile numbers directly into WhatsApp bulk marketing software to send product catalogs & offers.',
  },
  {
    icon: Mail,
    title: 'B2B Email Outreach',
    description: 'Clean, verified corporate email IDs formatted for cold email tools, Mailchimp, and cold outreach software.',
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description: 'Standardized Excel / CSV structure for 1-click import into Salesforce, HubSpot, Zoho, and custom CRMs.',
  },
  {
    icon: Share2,
    title: 'LinkedIn & Social Ads',
    description: 'Upload targeted business email lists as custom audiences on LinkedIn Ads, Facebook Ads, and Google Ads.',
  },
  {
    icon: Send,
    title: 'Direct Postal & Courier',
    description: 'Full business physical address, state, city, and pincode details for corporate giftings & B2B direct mailers.',
  },
];

export default function Omnichannel() {
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
    <section className="omnichannel section" id="omnichannel" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Multi-Channel <span className="accent-text">B2B Lead Activation</span></h2>
          <p className="section-subtitle">
            Use your purchased Excel databases seamlessly across tele-calling, WhatsApp marketing, email outreach, CRM import, and digital campaigns.
          </p>
        </div>

        <div className="omni-grid">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <div
                key={i}
                className={`omni-card glass-card animate-on-scroll stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="omni-icon">
                  <Icon size={30} />
                </div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
