import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadFormModal from './components/LeadFormModal';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import RequestPlan from './pages/RequestPlan';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OptOut from './pages/OptOut';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [formOpen, setFormOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [formOpen]);

  return (
    <>
      <ScrollToTop />
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onOpenForm={() => setFormOpen(true)} />} />
        <Route path="/request-plan" element={<RequestPlan />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/opt-out" element={<OptOut />} />
      </Routes>
      <Footer />
      <FloatingWidgets onOpenForm={() => setFormOpen(true)} />
      <LeadFormModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
