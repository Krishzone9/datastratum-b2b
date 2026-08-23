import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found" id="not-found">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist or has been moved.
          Try browsing our B2B database catalog or head back to the homepage.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            Back to Home
          </Link>
          <a
            href="/#explorer"
            className="btn btn-secondary btn-lg"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#explorer';
            }}
          >
            <Search size={18} />
            Browse Catalog
          </a>
        </div>
        <div className="not-found-links">
          <p>Looking for machine-readable resources?</p>
          <a href="/llms.txt">llms.txt</a>
          <a href="/sitemap.xml">sitemap.xml</a>
          <a href="/openapi.json">openapi.json</a>
        </div>
      </div>
    </section>
  );
}
