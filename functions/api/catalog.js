/**
 * GET /api/catalog
 *
 * Returns the B2B database catalog as structured JSON.
 * Supports optional query parameters: vertical, category, search.
 */

const segments = [
  // Exhibitions & Exhibitors Data
  { id: 'EXH-101', name: '2,11,500 Exhibitors Data From 709 Exhibitions (2016-2026)', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '2,11,500+', accuracy: '80%', country: 'All India' },
  { id: 'EXH-102', name: '1,04,500 Exhibitors From 328 Exhibitions (2021-2026)', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '1,04,500+', accuracy: '80%', country: 'All India' },
  { id: 'EXH-103', name: '26,875 Exhibitors (Electrical, Electronics, Power & Solar Exhibitions)', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '26,875+', accuracy: '80%', country: 'All India' },
  { id: 'EXH-104', name: '26,550 Exhibitors (Food, Processing, Dairy, Bakery & Hospitality)', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '26,550+', accuracy: '80%', country: 'All India' },
  { id: 'EXH-105', name: '23,750 Exhibitors (Industrial, Machinery, Engg., Automation)', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '23,750+', accuracy: '80%', country: 'All India' },
  { id: 'EXH-106', name: '17,575 Exhibitors From Last 13 Aahar Exhibitions', vertical: 'Exhibitions Data', category: 'Exhibitors', reach: '17,575+', accuracy: '80%', country: 'All India' },

  // Trades & Industry Wise Data
  { id: 'TRD-201', name: 'Machinery, Plants, Tools & Spares Companies Database', vertical: 'Trades & Industry', category: 'Manufacturers', reach: '1,85,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-202', name: 'Electrical & Electronics Companies Database', vertical: 'Trades & Industry', category: 'Manufacturers', reach: '2,40,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-203', name: 'Lighting, Solar, Power & Energy Companies Database', vertical: 'Trades & Industry', category: 'B2B', reach: '1,30,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-204', name: 'Auto, Automobile & E-Vehicle Spares Companies Database', vertical: 'Trades & Industry', category: 'B2B', reach: '1,25,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-205', name: 'Food Processing, Hospitality, Bakery & Beverages Database', vertical: 'Trades & Industry', category: 'B2B', reach: '1,95,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-206', name: 'Medical, Health, Pharma & Wellness Companies Database', vertical: 'Trades & Industry', category: 'B2B', reach: '1,60,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-207', name: 'Printing, Packaging, Paper & Corrugation Companies Database', vertical: 'Trades & Industry', category: 'B2B', reach: '1,35,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-208', name: 'Construction, Hardware, Sanitary & Building Materials Database', vertical: 'Trades & Industry', category: 'B2B', reach: '2,10,000+', accuracy: '80%', country: 'All India' },
  { id: 'TRD-209', name: 'Plastic, PVC & Polymers Companies Database', vertical: 'Trades & Industry', category: 'B2B', reach: '98,000+', accuracy: '80%', country: 'All India' },

  // City & State Wise Data
  { id: 'CTY-301', name: 'Delhi / NCR B2B Companies Database (Gurgaon, Noida, Faridabad)', vertical: 'City & State Wise', category: 'Regional', reach: '4,50,000+', accuracy: '80%', country: 'North India' },
  { id: 'CTY-302', name: 'Mumbai, Pune & Maharashtra B2B Companies Database', vertical: 'City & State Wise', category: 'Regional', reach: '5,20,000+', accuracy: '80%', country: 'Western India' },
  { id: 'CTY-303', name: 'Bangalore & Karnataka B2B Companies Database', vertical: 'City & State Wise', category: 'Regional', reach: '3,80,000+', accuracy: '80%', country: 'South India' },
  { id: 'CTY-304', name: 'Gujarat B2B Companies Database (Ahmedabad, Surat, Vadodara, Rajkot)', vertical: 'City & State Wise', category: 'Regional', reach: '4,10,000+', accuracy: '80%', country: 'Western India' },
  { id: 'CTY-305', name: 'Kolkata & West Bengal B2B Companies Database', vertical: 'City & State Wise', category: 'Regional', reach: '2,90,000+', accuracy: '80%', country: 'Eastern India' },

  // International Buyers & Importers
  { id: 'INT-401', name: 'International Importers & Buyers From 165+ Countries', vertical: 'International', category: 'Importers', reach: '25,00,000+', accuracy: '80%', country: 'Global (165+ Countries)' },
  { id: 'INT-402', name: 'USA B2B Companies & Importers Database', vertical: 'International', category: 'Importers', reach: '8,50,000+', accuracy: '80%', country: 'USA' },
  { id: 'INT-403', name: 'UK B2B Companies Database', vertical: 'International', category: 'Importers', reach: '4,20,000+', accuracy: '80%', country: 'UK' },
  { id: 'INT-404', name: 'Gulf Countries & UAE Exporters, Importers & Distributors', vertical: 'International', category: 'Importers', reach: '3,90,000+', accuracy: '80%', country: 'UAE & Gulf' },

  // Professionals & Services
  { id: 'PRF-501', name: 'Hospitals, Pathology Labs & Medical Stores Database', vertical: 'Professionals', category: 'Services', reach: '1,75,000+', accuracy: '80%', country: 'All India' },
  { id: 'PRF-502', name: 'Architects & Interior Designing Firms Database', vertical: 'Professionals', category: 'Services', reach: '82,000+', accuracy: '80%', country: 'All India' },
  { id: 'PRF-503', name: 'Chartered Accountant (CA) Firms Database', vertical: 'Professionals', category: 'Services', reach: '65,000+', accuracy: '80%', country: 'All India' },
  { id: 'PRF-504', name: 'Real Estate Builders, Promoters & Developers Database', vertical: 'Professionals', category: 'Services', reach: '1,40,000+', accuracy: '80%', country: 'All India' },

  // Super Discounted Combo Packs
  { id: 'CMB-601', name: 'Top 80 Types Super Saving B2B Companies Data Combo', vertical: 'Super Discount Combos', category: 'Combo Pack', reach: 'All India', accuracy: '80%', country: 'India & Global' },
  { id: 'CMB-602', name: 'Top 40 Types Super Saving Business 2 Business Combo', vertical: 'Super Discount Combos', category: 'Combo Pack', reach: 'All India', accuracy: '80%', country: 'India' },
  { id: 'CMB-603', name: 'Top 14 International Importers & Exporters Combo Pack', vertical: 'Super Discount Combos', category: 'Combo Pack', reach: '165+ Countries', accuracy: '80%', country: 'Global' },
  { id: 'CMB-604', name: 'Top 21 City / State Wise B2B Companies Data Combo', vertical: 'Super Discount Combos', category: 'Combo Pack', reach: 'All States', accuracy: '80%', country: 'India' },
];

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const vertical = url.searchParams.get('vertical');
  const category = url.searchParams.get('category');
  const search = url.searchParams.get('search');

  let results = segments;

  if (vertical) {
    results = results.filter(s => s.vertical.toLowerCase() === vertical.toLowerCase());
  }

  if (category) {
    results = results.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.id.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q)
    );
  }

  return new Response(JSON.stringify({ count: results.length, segments: results }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

// Return structured JSON for unsupported methods
export async function onRequest({ request }) {
  if (request.method === 'GET') return; // handled by onRequestGet
  return new Response(JSON.stringify({
    error: {
      code: 'METHOD_NOT_ALLOWED',
      message: `Method ${request.method} is not allowed on /api/catalog. Use GET.`,
      resolution: 'Send a GET request. See /openapi.json for the full API specification.',
    },
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
      'Allow': 'GET',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
