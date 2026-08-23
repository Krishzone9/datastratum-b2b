/**
 * Cloudflare Pages Functions Middleware
 *
 * Runs on every request BEFORE the static asset pipeline.
 * Handles all five agentic readiness audit items:
 *
 * 1. Agent-friendly 404s    — returns HTTP 404 for unknown paths
 * 2. Content without JS     — returns pre-rendered HTML for bot/crawler UAs
 * 3. OpenAPI spec routing   — passes through to static /openapi.json
 * 4. JSON error responses   — structured JSON for /api/* 404s
 * 5. Markdown negotiation   — returns text/markdown with Vary header
 */

// Known SPA routes (client-side pages)
const KNOWN_ROUTES = new Set([
  '/',
  '/request-plan',
  '/privacy-policy',
  '/opt-out',
]);

// Static files served from public/ (no extension check needed for these)
const KNOWN_STATIC = new Set([
  '/openapi.json',
  '/llms.txt',
  '/sitemap.xml',
  '/robots.txt',
  '/favicon.svg',
  '/hero.png',
  '/icons.svg',
]);

// Bot User-Agent patterns (common AI crawlers and search bots)
const BOT_UA_PATTERNS = [
  /bot/i, /crawl/i, /spider/i, /slurp/i, /mediapartners/i,
  /googlebot/i, /bingbot/i, /yandex/i, /baiduspider/i,
  /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,
  /whatsapp/i, /telegrambot/i, /discordbot/i,
  /gpt/i, /chatgpt/i, /anthropic/i, /claude/i, /perplexity/i,
  /cohere/i, /ai2bot/i, /ccbot/i, /bytespider/i,
  /applebot/i, /amazonbot/i, /curl/i, /wget/i, /httpie/i,
  /python-requests/i, /axios/i, /node-fetch/i, /go-http/i,
];

/**
 * Check if the path looks like a static asset (has a file extension).
 */
function isStaticAsset(pathname) {
  // Match paths ending with .ext where ext is 2-10 chars
  return /\.\w{2,10}$/.test(pathname);
}

/**
 * Check if the User-Agent indicates a bot/crawler.
 */
function isBot(userAgent) {
  if (!userAgent) return true; // No UA = treat as bot
  return BOT_UA_PATTERNS.some(pattern => pattern.test(userAgent));
}

/**
 * Generate pre-rendered HTML for the homepage (for bots without JS).
 */
function getPrerenderedHomepage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datastratum – Your Audience Strategy Starts Here | Premium Audience Data Marketplace</title>
  <meta name="description" content="Browse and purchase 60,000+ audience data segments across 180 countries. Precision targeting for advertisers, agencies, and programmatic teams. GDPR/CCPA compliant.">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <style>
    body { font-family: Inter, sans-serif; background: #0A1628; color: #E8EDF3; margin: 0; padding: 0; }
    a { color: #FF6B2C; text-decoration: none; }
    .container { max-width: 960px; margin: 0 auto; padding: 48px 24px; }
    h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.1; color: #fff; margin-bottom: 16px; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 16px; margin-top: 40px; }
    p { color: #8A9BB5; line-height: 1.75; margin-bottom: 16px; }
    .badge { color: #FF6B2C; font-weight: 600; margin-bottom: 8px; }
    ul { color: #8A9BB5; line-height: 2; padding-left: 20px; }
    strong { color: #fff; }
    nav { margin-top: 12px; }
    nav a { color: #8A9BB5; margin-right: 16px; }
    header { background: #0F1F38; padding: 24px; }
    .logo { color: #FF6B2C; font-size: 24px; font-weight: 700; }
    footer { text-align: center; padding: 24px; color: #5A6B82; font-size: 0.875rem; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 40px; }
  </style>
</head>
<body>
  <header>
    <a href="/" class="logo">Datastratum</a>
    <nav>
      <a href="/#explorer">B2B Catalog</a>
      <a href="/request-plan">Request Plan</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/opt-out">Opt-Out</a>
    </nav>
  </header>
  <div class="container">
    <p class="badge">#1 Verified B2B Database Provider</p>
    <h1>Verified B2B Companies & Exhibitors Database</h1>
    <p>Access 709+ exhibition lists, All-India trade-wise B2B databases, city & state-wise company contacts, and international buyers directory from 165+ countries in verified Excel format. Datastratum is India's leading B2B database provider offering human-verified company contact lists with 75–80% lead accuracy. Our databases include company names, direct phone numbers, mobile numbers, email IDs, full addresses, city, state, pincode, and product/service details — all delivered in clean Microsoft Excel (.xlsx) format.</p>

    <h2>Key Statistics</h2>
    <ul>
      <li><strong>709+</strong> Exhibitions Covered</li>
      <li><strong>130,000+</strong> Trusted Business Clients</li>
      <li><strong>165+</strong> Countries of International Importers</li>
      <li><strong>75–80%</strong> Verified Lead Accuracy</li>
      <li><strong>80+</strong> Trade & Industry Categories</li>
      <li><strong>100%</strong> Clean Excel Format Delivery</li>
    </ul>

    <h2>Why Choose Datastratum</h2>
    <ul>
      <li><strong>75–80% Human-Verified Accuracy</strong> — Our team meticulously researches and validates business details so you receive high-converting B2B leads with company names, phone numbers, email IDs, and addresses in Excel format.</li>
      <li><strong>709+ Exhibitions Exhibitors Data</strong> — Get verified exhibitors databases from over 709 major national & international trade shows (2016–2026) across machinery, auto, solar, food, medical, packaging, and building sectors.</li>
      <li><strong>City & Trade Wise Granular Databases</strong> — Target prospects with pinpoint precision using city & state-wise databases (Delhi NCR, Mumbai, Pune, Gujarat, Bangalore, etc.) or specific trade/industry categories.</li>
      <li><strong>165+ Countries International Buyers</strong> — Expand overseas with verified international buyers, importers, exporters, and sellers data across USA, UK, Gulf, Europe, Australia, China, and 165+ global markets.</li>
    </ul>

    <h2>Database Catalog Highlights</h2>
    <ul>
      <li><strong>EXH-101</strong>: 2,11,500 Exhibitors Data From 709 Exhibitions (2016-2026) — All India</li>
      <li><strong>TRD-202</strong>: Electrical & Electronics Companies Database — 2,40,000+ contacts, All India</li>
      <li><strong>CTY-301</strong>: Delhi / NCR B2B Companies Database — 4,50,000+ contacts</li>
      <li><strong>INT-401</strong>: International Importers & Buyers From 165+ Countries — 25,00,000+ contacts</li>
      <li><strong>CMB-601</strong>: Top 80 Types Super Saving B2B Combo — India & Global</li>
    </ul>
    <p>Browse the full catalog via our <a href="/api/catalog">API</a> or <a href="/openapi.json">OpenAPI specification</a>.</p>

    <h2>Contact</h2>
    <p>
      Phone: <a href="tel:+919793965272">+91 97939 65272</a><br>
      WhatsApp: <a href="https://wa.me/919793965272">Chat on WhatsApp</a><br>
      Email: <a href="mailto:krishnewgmail@gmail.com">krishnewgmail@gmail.com</a>
    </p>

    <p style="font-size:0.875rem;margin-top:32px">
      Machine-readable: <a href="/llms.txt">llms.txt</a> · <a href="/openapi.json">openapi.json</a> · <a href="/sitemap.xml">sitemap.xml</a>
    </p>
  </div>
  <footer>© ${new Date().getFullYear()} Datastratum. All rights reserved.</footer>
</body>
</html>`;
}

/**
 * Generate markdown content for the homepage (Accept: text/markdown).
 */
function getHomepageMarkdown() {
  return `# Datastratum – Verified B2B Companies & Exhibitors Database

> #1 Verified B2B Database Provider

Access 709+ exhibition lists, All-India trade-wise B2B databases, city & state-wise company contacts, and international buyers directory from 165+ countries in verified Excel format. Datastratum is India's leading B2B database provider offering human-verified company contact lists with 75–80% lead accuracy. Our databases include company names, direct phone numbers, mobile numbers, email IDs, full addresses, city, state, pincode, and product/service details — all delivered in clean Microsoft Excel (.xlsx) format.

## Key Statistics

- **709+** Exhibitions Covered
- **130,000+** Trusted Business Clients
- **165+** Countries of International Importers
- **75–80%** Verified Lead Accuracy
- **80+** Trade & Industry Categories
- **100%** Clean Excel Format Delivery

## Why Choose Datastratum

- **75–80% Human-Verified Accuracy** — Our team meticulously researches and validates business details so you receive high-converting B2B leads with company names, phone numbers, email IDs, and addresses in Excel format.
- **709+ Exhibitions Exhibitors Data** — Get verified exhibitors databases from over 709 major national & international trade shows (2016–2026) across machinery, auto, solar, food, medical, packaging, and building sectors.
- **City & Trade Wise Granular Databases** — Target prospects with pinpoint precision using city & state-wise databases (Delhi NCR, Mumbai, Pune, Gujarat, Bangalore, etc.) or specific trade/industry categories.
- **165+ Countries International Buyers** — Expand overseas with verified international buyers, importers, exporters, and sellers data across USA, UK, Gulf, Europe, Australia, China, and 165+ global markets.

## Contact

- Phone: [+91 97939 65272](tel:+919793965272)
- WhatsApp: [Chat on WhatsApp](https://wa.me/919793965272)
- Email: [krishnewgmail@gmail.com](mailto:krishnewgmail@gmail.com)

## Links

- [Homepage](https://datastratum-b2b.pages.dev/)
- [B2B Database Catalog](https://datastratum-b2b.pages.dev/#explorer)
- [Request a Database Plan](https://datastratum-b2b.pages.dev/request-plan)
- [API Catalog](https://datastratum-b2b.pages.dev/api/catalog)
- [OpenAPI Specification](https://datastratum-b2b.pages.dev/openapi.json)
- [llms.txt](https://datastratum-b2b.pages.dev/llms.txt)
- [Sitemap](https://datastratum-b2b.pages.dev/sitemap.xml)
- [Privacy Policy](https://datastratum-b2b.pages.dev/privacy-policy)
- [Opt-Out](https://datastratum-b2b.pages.dev/opt-out)
`;
}

/**
 * Generate a markdown 404 body pointing agents at discoverable resources.
 */
function get404Markdown() {
  return `# 404 – Page Not Found

The path you requested does not exist.

## Discover Datastratum

- [Homepage](https://datastratum-b2b.pages.dev/)
- [llms.txt](https://datastratum-b2b.pages.dev/llms.txt) — machine-readable site summary
- [OpenAPI spec](https://datastratum-b2b.pages.dev/openapi.json) — API documentation
- [Sitemap](https://datastratum-b2b.pages.dev/sitemap.xml) — all valid pages
- [API Catalog](https://datastratum-b2b.pages.dev/api/catalog) — database segments as JSON
`;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const accept = request.headers.get('Accept') || '';
  const userAgent = request.headers.get('User-Agent') || '';

  // ------------------------------------------------------------------
  // 1. Let /api/* routes be handled by their own function files.
  //    If they don't exist (no matching function file), return JSON 404.
  // ------------------------------------------------------------------
  if (pathname.startsWith('/api/')) {
    // Only known API routes should be handled by function files.
    // We maintain an explicit whitelist to avoid the SPA catch-all
    // from serving index.html for unknown /api/* paths.
    const KNOWN_API_ROUTES = new Set(['/api/catalog', '/api/leads']);

    if (KNOWN_API_ROUTES.has(pathname)) {
      // Let the matching function file handle it
      return next();
    }

    // Unknown API route — return structured JSON 404
    return new Response(JSON.stringify({
      error: {
        code: 'NOT_FOUND',
        message: `API endpoint ${pathname} does not exist.`,
        resolution: 'Check /openapi.json for available endpoints. Valid routes: GET /api/catalog, POST /api/leads.',
      },
    }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // ------------------------------------------------------------------
  // 2. Let known static files pass through to the asset pipeline.
  // ------------------------------------------------------------------
  if (KNOWN_STATIC.has(pathname) || pathname.startsWith('/assets/')) {
    return next();
  }

  // Files with extensions (e.g. .js, .css, .png) — let static pipeline handle them
  if (isStaticAsset(pathname)) {
    const response = await next();
    // If static asset truly doesn't exist, return 404
    if (response.status === 404) {
      return new Response(get404Markdown(), {
        status: 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    return response;
  }

  // ------------------------------------------------------------------
  // 3. Handle known SPA routes
  // ------------------------------------------------------------------
  if (KNOWN_ROUTES.has(pathname)) {

    // --- Markdown content negotiation (acceptmarkdown.com) ---
    if (accept.includes('text/markdown')) {
      const md = (pathname === '/') ? getHomepageMarkdown() : get404Markdown();
      return new Response(md, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding',
        },
      });
    }

    // --- Bot-aware pre-rendered HTML for the homepage ---
    if (pathname === '/' && isBot(userAgent)) {
      return new Response(getPrerenderedHomepage(), {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding, User-Agent',
        },
      });
    }

    // Regular browser request — let the SPA handle it
    const response = await next();
    // Add Vary header for CDN correctness
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Vary', 'Accept, Accept-Encoding');
    return newResponse;
  }

  // ------------------------------------------------------------------
  // 4. Unknown path → Agent-friendly 404
  // ------------------------------------------------------------------
  // Check if client wants markdown
  if (accept.includes('text/markdown')) {
    return new Response(get404Markdown(), {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept, Accept-Encoding',
      },
    });
  }

  // Check if client wants JSON
  if (accept.includes('application/json')) {
    return new Response(JSON.stringify({
      error: {
        code: 'NOT_FOUND',
        message: `Path ${pathname} does not exist.`,
        resolution: 'See /sitemap.xml for valid pages, /openapi.json for API endpoints, or /llms.txt for a site overview.',
      },
    }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
        'Vary': 'Accept, Accept-Encoding',
      },
    });
  }

  // Default: Return a minimal HTML 404 with pointer to resources
  // Must return HTTP 404 status (not 200 with app shell!)
  return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 – Page Not Found | Datastratum</title>
  <style>
    body { font-family: Inter, sans-serif; background: #0A1628; color: #E8EDF3; margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .c { text-align: center; max-width: 500px; padding: 32px; }
    h1 { font-size: 5rem; font-weight: 900; background: linear-gradient(135deg, #FF6B2C, #FF8A55); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
    h2 { font-size: 1.5rem; font-weight: 700; margin: 8px 0 16px; }
    p { color: #8A9BB5; line-height: 1.75; }
    a { color: #FF6B2C; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .links { margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); }
    .links a { margin: 0 8px; font-size: 0.875rem; color: #8A9BB5; }
    .btn { display: inline-block; margin-top: 24px; padding: 14px 32px; background: linear-gradient(135deg, #FF6B2C, #FF8A55); color: #fff; border-radius: 999px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="c">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <a href="/" class="btn">Back to Home</a>
    <div class="links">
      <p style="font-size:0.8rem;color:#5A6B82;margin-bottom:8px;">Machine-readable resources:</p>
      <a href="/llms.txt">llms.txt</a>
      <a href="/sitemap.xml">sitemap.xml</a>
      <a href="/openapi.json">openapi.json</a>
    </div>
  </div>
</body>
</html>`, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Vary': 'Accept, Accept-Encoding',
    },
  });
}
