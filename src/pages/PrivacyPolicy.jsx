import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', background: 'var(--gradient-hero)' }}>
      <div className="container container--narrow" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)', fontSize: 'var(--fs-sm)' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="glass-card" style={{ padding: 'var(--space-2xl) var(--space-3xl)' }}>
          <h1 style={{ fontSize: 'var(--fs-3xl)', fontWeight: 800, marginBottom: 'var(--space-2xl)' }}>Privacy Policy</h1>
          
          <div style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--lh-relaxed)', fontSize: 'var(--fs-base)' }}>
            <p style={{ marginBottom: 'var(--space-lg)' }}><strong style={{ color: 'var(--color-text)' }}>Effective Date:</strong> August 1, 2026</p>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>1. Introduction</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Datastratum ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our data marketplace services.
            </p>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>We may collect personal information that you voluntarily provide when using our services, including:</p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)', listStyle: 'disc' }}>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Name and contact information</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Company name and job title</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Email address</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Campaign goals and budget information</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Technical data (IP address, browser type, device information)</li>
            </ul>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>We use the information we collect to:</p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)', listStyle: 'disc' }}>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Provide and maintain our services</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Process and respond to your requests</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Send you marketing communications (with your consent)</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Improve our platform and services</li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Comply with legal obligations</li>
            </ul>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>4. Data Sharing</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our platform, subject to confidentiality agreements.
            </p>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>5. Your Rights</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Under GDPR, CCPA, and other applicable laws, you have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at krishnewgmail@gmail.com.
            </p>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: <a href="mailto:krishnewgmail@gmail.com" style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</a> or call us at <a href="tel:+919793965272" style={{ color: 'var(--color-accent)' }}>+91 97939 65272</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
