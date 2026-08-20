import { useState } from 'react';
import { Plus, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'What details are included in the B2B database Excel files?',
    a: 'Our databases are provided in clean Excel format and contain complete business details: Company/Firm Name, Direct Phone Numbers, Mobile Numbers, Email IDs, Address, City/State, Pincode, and Product/Service details.',
  },
  {
    q: 'What is the accuracy rate of the databases?',
    a: 'Our team collects and verifies business details carefully through market research and verification to maintain a 75-80% accuracy rate across all trade and company lists.',
  },
  {
    q: 'Which exhibition database lists do you provide?',
    a: 'We cover 709+ major national and international exhibitions (2016-2026) including LED Expo, Aahar, Industrial Machinery, Packaging, Auto & E-Vehicles, Medical & Pharma, Solar & Energy, Food & Beverages, and Building Materials.',
  },
  {
    q: 'Can I get city and state-wise company data?',
    a: 'Yes! We provide granular databases filtered by state or city, including Delhi NCR, Gurgaon, Noida, Mumbai, Pune, Gujarat (Ahmedabad, Surat, Vadodara), Bangalore, Chennai, Hyderabad, Kolkata, and All-India packages.',
  },
  {
    q: 'What international buyers and importers databases are available?',
    a: 'We offer verified international importers, buyers, exporters, and manufacturers database lists from 165+ countries including USA, UK, Australia, Gulf/UAE, Europe, China, Taiwan, and South East Asia.',
  },
  {
    q: 'In what file format will I receive the database?',
    a: 'All database packages are delivered in standardized Microsoft Excel (.xlsx) format for easy importing into CRMs, WhatsApp marketing software, calling software, or email systems.',
  },
  {
    q: 'What are Super Discounted Combo Packs?',
    a: 'Super Discounted Combos bundle multiple trade, city, or international database lists together (e.g. Top 40 B2B Combo, Top 80 B2B Combo, 21 State Wise Combo) at heavily discounted prices.',
  },
  {
    q: 'How do I place an order or get custom pricing?',
    a: 'Simply click "Request Database Plan", call us directly at +91 97939 65272, or chat with us instantly on WhatsApp (+91 97939 65272). Our team will share exact counts and pricing.',
  },
];

export default function FAQ({ onOpenForm }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Split into two columns
  const mid = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, mid);
  const rightCol = faqs.slice(mid);

  const renderItem = (faq, globalIndex) => (
    <div
      key={globalIndex}
      className={`faq-item ${openIndex === globalIndex ? 'open' : ''}`}
    >
      <button
        className="faq-question"
        onClick={() => toggle(globalIndex)}
        aria-expanded={openIndex === globalIndex}
      >
        <span className="faq-number">{String(globalIndex + 1).padStart(2, '0')}</span>
        <span className="faq-question-text">{faq.q}</span>
        <span className="faq-toggle">
          <Plus size={16} />
        </span>
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <div className="faq-answer-content">{faq.a}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="accent-text">Questions</span></h2>
          <p className="section-subtitle">
            Everything you need to know about our audience data marketplace and how it can power your campaigns.
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {leftCol.map((faq, i) => renderItem(faq, i))}
          </div>
          <div className="faq-column">
            {rightCol.map((faq, i) => renderItem(faq, i + mid))}
          </div>
        </div>

        <div className="faq-cta">
          <p><strong>Still have questions?</strong> Our data specialists are ready to help.</p>
          <button className="btn btn-primary btn-with-tooltip" onClick={onOpenForm}>
            <span className="btn-tooltip">Get a response within 24 hours</span>
            <HelpCircle size={16} />
            Talk to a Specialist
          </button>
        </div>
      </div>
    </section>
  );
}
