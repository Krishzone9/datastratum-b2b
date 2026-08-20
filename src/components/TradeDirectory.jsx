import { useState } from 'react';
import {
  Award, Building2, MapPin, Globe, Users, Layers, MoreHorizontal,
  ChevronRight, ArrowRight, CheckCircle2
} from 'lucide-react';
import './TradeDirectory.css';

const directoryData = {
  exhibitions: {
    title: '709+ Exhibitions & Exhibitors Data (All India)',
    description: 'Top exhibitors and exhibition data lists in verified Excel format (2016-2026).',
    icon: Award,
    items: [
      { name: '2,11,500 Exhibitors Data From 709 Exhibitions (2016-2026)', count: '2,11,500+' },
      { name: '1,04,500 Exhibitors From 328 Exhibitions (2021-2026)', count: '1,04,500+' },
      { name: '26,875 Exhibitors (Electrical, Electronics, Power, Solar & Lighting)', count: '26,875+' },
      { name: '3,150 Exhibitors From 14 LED Expo Exhibitions (Delhi & Mumbai)', count: '3,150+' },
      { name: '6,550 Exhibitors From 23 Power, Energy, Solar, Renewable Exhibitions', count: '6,550+' },
      { name: '6,950 Exhibitors From 23 Auto & Automobile Exhibitions', count: '6,950+' },
      { name: '7,880 Exhibitors From 27 E-Vehicle Exhibitions', count: '7,880+' },
      { name: '26,550 Exhibitors (Food, Processing, Dairy, Bakery, Beverages, Hospitality)', count: '26,550+' },
      { name: '17,575 Exhibitors From Last 13 Aahar Exhibitions', count: '17,575+' },
      { name: '23,750 Exhibitors (Industrial, Machinery, Engg., Automation)', count: '23,750+' },
      { name: '21,550 Exhibitors (Packaging, Printing, Paper, Signage, Corrugation)', count: '21,550+' },
      { name: '18,880 Exhibitors (Architect, Construction, Hardware, Interior, Wood, Glass)', count: '18,880+' },
      { name: '1,700 Exhibitors From 8 Gift, Novelty, Handicraft Exhibitions', count: '1,700+' },
      { name: '17,750 Exhibitors (Medical, Pharma, Lab, Wellness Exhibitions)', count: '17,750+' },
      { name: '11,050 Exhibitors (Chemical, Fine Chemical, Petrochemical)', count: '11,050+' },
      { name: '7,150 Exhibitors (Logistic, Warehouses, Cold Storages)', count: '7,150+' },
      { name: '1,800 Exhibitors (Garments, Textile, Hosiery Exhibitions)', count: '1,800+' },
      { name: '2,065 Exhibitors (Safety & Security Exhibitions)', count: '2,065+' },
      { name: '2,975 Exhibitors (Water & Related Products Exhibitions)', count: '2,975+' },
      { name: '16,750 Exhibitors (Plastic, PVC & Polymer Exhibitions)', count: '16,750+' },
    ]
  },
  trades: {
    title: 'Trades & Industry Wise B2B Companies Data',
    description: 'Human-verified trades and industries database lists with 75-80% lead accuracy.',
    icon: Building2,
    items: [
      { name: 'Machinery, Plants & Industrial Tools Companies Data', count: '1,85,000+' },
      { name: 'Used Machinery, Tools & Scrap Companies Data', count: '92,000+' },
      { name: 'Automation & Robotics Companies Data', count: '65,000+' },
      { name: 'Electrical & Electronics Companies Data', count: '2,40,000+' },
      { name: 'Lighting, Solar, Power & Energy Companies Data', count: '1,30,000+' },
      { name: 'Auto & Automobile Companies Data', count: '1,25,000+' },
      { name: 'E-Vehicle & Spares Companies Data', count: '48,000+' },
      { name: 'Sheet Metal Components Manufacturers Data', count: '55,000+' },
      { name: 'Food, Processing, Hospitality, Bakery & Beverages Data', count: '1,95,000+' },
      { name: 'Hospitality Equipments, Materials & Decoratives Data', count: '85,000+' },
      { name: 'Medical, Health, Pharma & Wellness Companies Data', count: '1,60,000+' },
      { name: 'Beauty, Cosmetic & Fitness Companies Data', count: '90,000+' },
      { name: 'Herbal, Ayurvedic, Perfume & Beauty Products Companies', count: '75,000+' },
      { name: 'Chemical, Laboratory & Industrial Gases Data', count: '85,000+' },
      { name: 'Biomass, Pollution Control, Water Treatment & Waste Management', count: '62,000+' },
      { name: 'Printing, Packaging, Paper & Corrugation Companies Data', count: '1,35,000+' },
      { name: 'Plastic, PVC & Polymers Companies Data', count: '98,000+' },
      { name: 'Construction, Hardware, Sanitary & Interior Companies Data', count: '2,10,000+' },
      { name: 'Water Treatment & Purification Plants, RO Companies Data', count: '70,000+' },
      { name: 'Safety & Security Products Companies Data', count: '58,000+' },
      { name: 'Steel, Metal, Minerals & Alloys Companies Data', count: '1,45,000+' },
      { name: 'Consultants & Consultancy Firms (All Types)', count: '1,10,000+' },
      { name: 'Material Handling, Cranes & Lifts Companies Data', count: '42,000+' },
      { name: 'Pipes, Pumps, Motors & Valves Companies Data', count: '95,000+' },
      { name: 'Warehouse, Cold Storage, Logistics & Transporters Data', count: '1,15,000+' },
      { name: 'Gift, Novelties & Handicraft Companies Data', count: '68,000+' },
      { name: 'Home Furnishing Companies Data', count: '54,000+' },
      { name: 'Garments, Hosiery, Fabric & Fashion Companies Data', count: '1,40,000+' },
      { name: 'Leather Products & Materials Companies Data', count: '38,000+' },
      { name: 'Gems, Diamonds & Jewellery Companies Data', count: '72,000+' },
      { name: 'Gas & Petroleum Companies Database', count: '35,000+' },
      { name: 'Glass, Stone, Tiles & Marble Companies Data', count: '82,000+' },
      { name: 'Furniture, Wood, Plywood & Door Companies Data', count: '1,05,000+' },
      { name: 'SME (Small & Medium) Companies Data (All India)', count: '4,50,000+' },
      { name: 'MSME Registered Members Database (All Types)', count: '3,80,000+' },
      { name: 'Manufacturers Data (All Types & Trades)', count: '6,20,000+' },
      { name: 'Exporters & Importers Data (All India)', count: '2,80,000+' },
      { name: 'Corporates & Top LTD Companies Data', count: '1,90,000+' },
      { name: 'Dealers & Distributors Data (All Types)', count: '3,50,000+' },
      { name: 'Pvt. Ltd. Companies Database (All India)', count: '5,10,000+' },
      { name: 'Sports & Toys Companies Data', count: '45,000+' },
      { name: 'Scrap, Waste & Recycling Companies Data', count: '52,000+' },
    ]
  },
  regional: {
    title: 'City & State Wise B2B Companies Data',
    description: 'Target prospects by region with state and city-wise verified B2B contact lists.',
    icon: MapPin,
    items: [
      // North
      { name: 'Delhi / NCR B2B Companies Database', count: '4,50,000+' },
      { name: 'Gurgaon Business Database', count: '1,20,000+' },
      { name: 'Noida & Greater Noida Database', count: '1,10,000+' },
      { name: 'Faridabad & Ballabgarh Business Database', count: '65,000+' },
      { name: 'Panipat, Sonipat, Karnal, Rewari & Bhiwadi Data', count: '85,000+' },
      { name: 'Uttar Pradesh & Uttarakhand Database', count: '3,90,000+' },
      { name: 'Ghaziabad & Meerut Industrial Database', count: '95,000+' },
      { name: 'Kanpur & Lucknow Business Database', count: '1,15,000+' },
      { name: 'Agra, Mathura & Aligarh Companies Data', count: '70,000+' },
      { name: 'Haridwar & Dehradun Companies Database', count: '58,000+' },
      { name: 'Punjab, Haryana & Chandigarh Database', count: '2,80,000+' },
      { name: 'Mohali, Chandigarh & Panchkula Data', count: '90,000+' },
      { name: 'Ludhiana Industrial Database', count: '82,000+' },
      { name: 'Jaipur & Rajasthan Companies Database', count: '1,60,000+' },
      { name: 'All North India States Database Package', count: '12,50,000+' },

      // West & Central
      { name: 'Mumbai, Pune & Maharashtra Database', count: '5,20,000+' },
      { name: 'Mumbai City B2B Database', count: '3,10,000+' },
      { name: 'Pune Industrial & IT Database', count: '1,40,000+' },
      { name: 'Nagpur & Nasik Business Database', count: '75,000+' },
      { name: 'Gujarat State B2B Database', count: '4,10,000+' },
      { name: 'Ahmedabad Business Database', count: '1,80,000+' },
      { name: 'Surat Textile & Diamond Companies Data', count: '1,25,000+' },
      { name: 'Vadodara & Rajkot Industrial Database', count: '98,000+' },
      { name: 'Madhya Pradesh & Chhattisgarh Database', count: '2,10,000+' },
      { name: 'Indore & Bhopal Business Database', count: '95,000+' },
      { name: 'Goa Business & Hospitality Database', count: '42,000+' },
      { name: 'Daman, Diu, Vapi, Ankleshwar & Silvassa Data', count: '68,000+' },
      { name: 'All Western India States Database Package', count: '11,80,000+' },

      // South
      { name: 'Bangalore & Karnataka B2B Database', count: '3,80,000+' },
      { name: 'Bangalore Tech & Industrial Database', count: '2,60,000+' },
      { name: 'Hyderabad & Telangana B2B Database', count: '3,10,000+' },
      { name: 'Chennai, Coimbatore & Tamil Nadu Database', count: '3,60,000+' },
      { name: 'Chennai City B2B Database', count: '1,95,000+' },
      { name: 'Coimbatore & Tirupur Industrial Database', count: '1,10,000+' },
      { name: 'Kochi & Kerala State Business Database', count: '1,45,000+' },
      { name: 'Andhra Pradesh & Vizag Business Database', count: '1,80,000+' },
      { name: 'All South India States Database Package', count: '14,20,000+' },

      // East
      { name: 'Kolkata & West Bengal Business Database', count: '2,90,000+' },
      { name: 'Bihar & Patna Business Database', count: '1,20,000+' },
      { name: 'Jharkhand (Ranchi, Dhanbad, Jamshedpur) Data', count: '95,000+' },
      { name: 'Odisha (Bhubaneswar, Cuttack, Rourkela) Data', count: '1,10,000+' },
      { name: 'All Eastern India States Database Package', count: '6,10,000+' },
    ]
  },
  professionals: {
    title: 'Professionals & Service Providers Database',
    description: 'Direct contacts for verified professionals, institutes, clinics, CAs, and service firms.',
    icon: Users,
    items: [
      { name: 'Hospitals, Clinics & Nursing Homes Database', count: '1,75,000+' },
      { name: 'Pathology Lab & Diagnostic Centres Database', count: '68,000+' },
      { name: 'Medical Stores, Pharmacy & Chemists Database', count: '1,40,000+' },
      { name: 'Hotel, Restaurant, Banquets & Caterers Database', count: '1,90,000+' },
      { name: 'Schools, Colleges & Educational Institutes', count: '1,25,000+' },
      { name: 'Architects & Interior Designing Firms Database', count: '82,000+' },
      { name: 'Chartered Accountant (CA) Firms Database', count: '65,000+' },
      { name: 'Real Estate Builders, Promoters & Developers', count: '1,40,000+' },
      { name: 'Exhibition & Event Organisers Database', count: '28,000+' },
      { name: 'Beauty Parlours, Salons & Spa Database', count: '95,000+' },
      { name: 'Civil & Electrical Contractors Database', count: '1,10,000+' },
      { name: 'Grocery, Kirana & Departmental Stores Database', count: '2,20,000+' },
      { name: 'Tour & Travels Agents Database', count: '88,000+' },
      { name: 'Coaching & Tuition Centers Database', count: '75,000+' },
      { name: 'GYM & Fitness Centers Database', count: '42,000+' },
      { name: 'Printers & Printing Press Database', count: '60,000+' },
      { name: 'Photo Studio & Photographers Database', count: '38,000+' },
    ]
  },
  international: {
    title: 'International Buyers & Sellers (+165 Countries)',
    description: 'Expand export/import trade with verified international buyers and overseas importers.',
    icon: Globe,
    items: [
      { name: 'International Importers & Buyers From 165+ Countries', count: '25,00,000+' },
      { name: 'International Exporters & Sellers From 45 Countries', count: '8,50,000+' },
      { name: 'USA B2B Companies & Importers Database', count: '8,50,000+' },
      { name: 'UK B2B Companies & Importers Database', count: '4,20,000+' },
      { name: 'Australia & New Zealand Importers & Buyers Data', count: '2,60,000+' },
      { name: 'European Countries Importers & Exporters Data', count: '6,90,000+' },
      { name: 'China & Taiwan Importers & Exporters Database', count: '6,80,000+' },
      { name: 'Gulf Countries & UAE Exporters, Importers & Dealers', count: '3,90,000+' },
      { name: 'UAE Exporters, Importers & Manufacturers Data', count: '2,10,000+' },
      { name: 'Bangladesh, Sri Lanka, Nepal & Bhutan Importers', count: '1,80,000+' },
      { name: 'African Countries Importers & Buyers Data', count: '3,40,000+' },
      { name: 'South East Asia (Singapore, Malaysia, Thailand, Vietnam)', count: '4,10,000+' },
      { name: 'Korea, Japan & Russia Importers Database', count: '3,20,000+' },
      { name: 'Latin America, Canada & Mexico Importers Database', count: '3,80,000+' },
      { name: 'Foreign Buyers of Auto, Machinery, Food, Pharma & Electrical', count: '12,00,000+' },
    ]
  },
  combos: {
    title: 'Super Discounted Data Combo Packs',
    description: 'Bulk database packages bundled at super saving discounted prices for maximum value.',
    icon: Layers,
    items: [
      { name: 'Top 10 Super Saving Business 2 Business Data', count: 'Discount Pack' },
      { name: 'Top 40 Types Super Saving Business 2 Business Combo', count: 'Discount Pack' },
      { name: 'Top 80 Types Super Saving Business 2 Business Combo', count: 'Best Seller' },
      { name: 'Top 14 Types International Importers & Exporters Combo', count: 'Discount Pack' },
      { name: 'Top 13 USA B2B Companies Data Combo', count: 'Discount Pack' },
      { name: 'Top 15 UK B2B Companies Data Combo', count: 'Discount Pack' },
      { name: 'Top 10 Australia B2B Companies Data Combo', count: 'Discount Pack' },
      { name: 'Top 21 City / State Wise B2B Companies Data Combo', count: 'Discount Pack' },
      { name: 'Top 12 Retailers, Traders & Suppliers Data Combo', count: 'Discount Pack' },
      { name: 'Top 20 Electrical, Electronics, Lighting & Solar Combo', count: 'Discount Pack' },
      { name: 'Top 22 Machinery, Tools, Engg., Automation Data Combo', count: 'Discount Pack' },
      { name: 'Top 25 Auto & Automobile Companies Data Combo', count: 'Discount Pack' },
      { name: 'Top 16 Construction, Building & Hardware B2B Combo', count: 'Discount Pack' },
      { name: 'Top 25 Food, Processing & Beverages Data Combo', count: 'Discount Pack' },
      { name: 'Top 22 Hospitals, Medical, Clinics & Pharma Data Combo', count: 'Discount Pack' },
      { name: 'Top 20 Packaging, Printing, Paper & Plastic Data Combo', count: 'Discount Pack' },
      { name: 'Top 12 Logistics, Cargo, Transporters & Warehouse Combo', count: 'Discount Pack' },
      { name: 'Top 22 Gift, Novelties, Handicraft & Decoratives Combo', count: 'Discount Pack' },
    ]
  },
  miscellaneous: {
    title: 'Miscellaneous & Niche Trade Databases',
    description: 'Specialized niche databases for unique industry requirement.',
    icon: MoreHorizontal,
    items: [
      { name: 'NGO, Trust & Social Services Database', count: '45,000+' },
      { name: 'Agarbatti & Incense Stick Companies Database', count: '28,000+' },
      { name: 'Rubber Machinery, Products & Spares Data', count: '32,000+' },
      { name: 'Scrap & Waste (Copper, Plastic, Paper, Steel, Metals)', count: '52,000+' },
      { name: 'All India Mines & Mining Companies Database', count: '18,000+' },
      { name: 'Cattle, Dog, Pet & Poultry Feed Database', count: '34,000+' },
      { name: 'GPS, Navigation & Tracking Systems Companies', count: '22,000+' },
      { name: 'Business Finance & Management Tips Database', count: 'Special Pack' },
    ]
  }
};

export default function TradeDirectory({ onOpenForm }) {
  const [activeTab, setActiveTab] = useState('exhibitions');

  const currentCategory = directoryData[activeTab];
  const IconHeader = currentCategory.icon;

  return (
    <section className="trade-directory section" id="directory">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Complete <span className="accent-text">B2B Trade Directory</span></h2>
          <p className="section-subtitle">
            Browse our full catalog of over 100+ verified trade directories, exhibition lists, city databases, and international buyer contacts in Excel format.
          </p>
        </div>

        {/* Directory Tab Controls */}
        <div className="directory-tabs">
          {Object.keys(directoryData).map((key) => {
            const tab = directoryData[key];
            const TabIcon = tab.icon;
            return (
              <button
                key={key}
                className={`directory-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <TabIcon size={16} />
                <span>{tab.title.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Directory Content Card */}
        <div className="directory-card glass-card animate-on-scroll">
          <div className="directory-card-header">
            <div className="directory-header-icon">
              <IconHeader size={26} />
            </div>
            <div>
              <h3>{currentCategory.title}</h3>
              <p>{currentCategory.description}</p>
            </div>
            <button className="btn btn-primary btn-sm ml-auto" onClick={onOpenForm}>
              Request Full List
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="directory-grid">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="directory-item"
                onClick={onOpenForm}
                title="Click to request pricing for this database"
              >
                <div className="item-name">
                  <CheckCircle2 size={15} className="item-check" />
                  <span>{item.name}</span>
                </div>
                <div className="item-badge">{item.count}</div>
              </div>
            ))}
          </div>

          <div className="directory-footer">
            <span>⚡ Standardized Excel Format | 75-80% Verified Accuracy Guarantee</span>
            <button className="btn btn-secondary btn-sm" onClick={onOpenForm}>
              Get Quote for {currentCategory.title.split(' (')[0]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
