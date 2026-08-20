import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldOff } from 'lucide-react';

export default function OptOut() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)', background: 'var(--gradient-hero)' }}>
      <div className="container container--narrow" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)', fontSize: 'var(--fs-sm)' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="glass-card" style={{ padding: 'var(--space-2xl) var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <div style={{
              width: 64, height: 64, margin: '0 auto var(--space-lg)', background: 'rgba(255,107,44,0.1)',
              border: '1px solid rgba(255,107,44,0.2)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)'
            }}>
              <ShieldOff size={28} />
            </div>
            <h1 style={{ fontSize: 'var(--fs-3xl)', fontWeight: 800, marginBottom: 'var(--space-md)' }}>Ad Choices / Do Not Sell</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-base)', maxWidth: 500, margin: '0 auto' }}>
              We respect your privacy choices. Use the options below to manage your data preferences.
            </p>
          </div>

          <div style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--lh-relaxed)' }}>
            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>Your Privacy Rights</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Under the California Consumer Privacy Act (CCPA) and similar state laws, you have the right to opt out of the sale or sharing of your personal information for targeted advertising purposes.
            </p>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>How to Opt Out</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>You can exercise your opt-out rights in the following ways:</p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)', listStyle: 'disc' }}>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Email us at: <a href="mailto:krishnewgmail@gmail.com" style={{ color: 'var(--color-accent)' }}>krishnewgmail@gmail.com</a></li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Call us directly at: <a href="tel:+919793965272" style={{ color: 'var(--color-accent)' }}>+91 97939 65272</a></li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Use the Global Privacy Control (GPC) signal in your browser</li>
            </ul>

            <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-white)', margin: 'var(--space-2xl) 0 var(--space-md)' }}>Industry Opt-Out Tools</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>You can also use the following industry tools to manage your ad preferences:</p>
            <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)', listStyle: 'disc' }}>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Digital Advertising Alliance (DAA): <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>optout.aboutads.info</a></li>
              <li style={{ marginBottom: 'var(--space-sm)' }}>Network Advertising Initiative (NAI): <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>optout.networkadvertising.org</a></li>
            </ul>

            <p style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-lg)', background: 'rgba(255,107,44,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,107,44,0.1)' }}>
              <strong style={{ color: 'var(--color-accent)' }}>Note:</strong> We will process your request within 15 business days. Opting out will not affect data previously collected or data necessary for our legitimate business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
