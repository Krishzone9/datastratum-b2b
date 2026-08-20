import { PhoneCall, FileSpreadsheet, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import './FloatingWidgets.css';

export default function FloatingWidgets() {
  return (
    <>
      {/* Floating Bottom-Left Action Cluster (WhatsApp & Direct Phone Call) */}
      <div className="floating-actions-cluster">
        {/* WhatsApp Action Button */}
        <a
          href="https://wa.me/919793965272?text=Hello!%20I%20am%20interested%20in%20your%20audience%20data%20plans."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-wa-btn btn-with-tooltip"
          aria-label="Chat on WhatsApp"
        >
          <span className="btn-tooltip" style={{ left: '100%', bottom: '50%', transform: 'translateY(50%) translateX(12px)', whiteSpace: 'nowrap' }}>
            💬 Chat on WhatsApp (+91 97939 65272)
          </span>
          <MessageCircle size={22} />
        </a>

        {/* Direct Call Button */}
        <a
          href="tel:+919793965272"
          className="floating-btn floating-call-btn btn-with-tooltip"
          aria-label="Call +91 97939 65272 Directly"
        >
          <span className="btn-tooltip" style={{ left: '100%', bottom: '50%', transform: 'translateY(50%) translateX(12px)', whiteSpace: 'nowrap' }}>
            📞 Direct Call (+91 97939 65272)
          </span>
          <PhoneCall size={22} />
        </a>
      </div>
    </>
  );
}
