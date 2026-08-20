import { useState, useMemo } from 'react';
import { Search, CheckCircle2, Database, Download } from 'lucide-react';
import './DataExplorer.css';

const sampleSegments = [
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

export default function DataExplorer({ onOpenForm }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVertical, setSelectedVertical] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = useMemo(() => {
    return sampleSegments.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVertical = selectedVertical === 'All' || item.vertical === selectedVertical;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesVertical && matchesCategory;
    });
  }, [searchTerm, selectedVertical, selectedCategory]);

  return (
    <section className="data-explorer section" id="explorer">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Verified <span className="accent-text">B2B Database Catalog</span></h2>
          <p className="section-subtitle">
            Browse human-verified B2B databases in Excel format with company names, contact numbers, email IDs, cities, states, and product details.
          </p>
        </div>

        <div className="explorer-card animate-on-scroll">
          <div className="explorer-controls">
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search database category, exhibition, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="filter-select"
              value={selectedVertical}
              onChange={(e) => setSelectedVertical(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Exhibitions Data">Exhibitions Data (+709)</option>
              <option value="Trades & Industry">Trades & Industry B2B</option>
              <option value="City & State Wise">City & State Wise B2B</option>
              <option value="International">International Importers</option>
              <option value="Professionals">Professionals & Services</option>
              <option value="Super Discount Combos">Super Discount Combos</option>
            </select>

            <select
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Exhibitors">Exhibitors Data</option>
              <option value="Manufacturers">Manufacturers & B2B</option>
              <option value="Regional">City / State Databases</option>
              <option value="Importers">International Buyers</option>
              <option value="Services">Services & Professionals</option>
              <option value="Combo Pack">Super Combo Packs</option>
            </select>
          </div>

          <div className="table-responsive">
            <table className="explorer-table">
              <thead>
                <tr>
                  <th>Database Code & Name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Verified Contact Count</th>
                  <th>Accuracy</th>
                  <th>Geographic Coverage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="segment-name">
                          <Database size={15} style={{ color: 'var(--color-accent)' }} />
                          <div>
                            <span style={{ fontSize: '11px', color: 'var(--color-text-dim)', display: 'block' }}>{item.id}</span>
                            {item.name}
                          </div>
                        </div>
                      </td>
                      <td><span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{item.vertical}</span></td>
                      <td>
                        <span className={`badge-tag ${item.category === 'Exhibitors' ? 'badge-b2b' : item.category === 'Importers' ? 'badge-intent' : 'badge-b2c'}`}>
                          {item.category}
                        </span>
                      </td>
                      <td style={{ fontWeight: 700, color: 'var(--color-white)' }}>{item.reach}</td>
                      <td>
                        <span className="accuracy-pill">
                          <CheckCircle2 size={13} /> {item.accuracy}
                        </span>
                      </td>
                      <td style={{ color: 'var(--color-text-muted)' }}>{item.country}</td>
                      <td>
                        <button className="btn btn-primary table-btn btn-with-tooltip" onClick={onOpenForm}>
                          <span className="btn-tooltip">Get Instant Pricing</span>
                          Order Pack
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-results">
                      No matching database found. <button onClick={() => { setSearchTerm(''); setSelectedVertical('All'); setSelectedCategory('All'); }} style={{ color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Reset filters</button> or <span style={{ color: 'var(--color-accent)', cursor: 'pointer' }} onClick={onOpenForm}>request custom dataset quote</span>.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 'var(--space-lg)', textAlign: 'right', fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)' }}>
            Showing top B2B database inventory. Over 1,000+ custom exhibition lists & trade databases available in Excel format.
          </div>
        </div>
      </div>
    </section>
  );
}
