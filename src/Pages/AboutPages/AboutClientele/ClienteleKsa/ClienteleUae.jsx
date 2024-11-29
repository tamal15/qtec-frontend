import { useState } from "react";

// Define categories
const categories = [
  { key: 'all', label: 'All' },
  { key: 'construction', label: 'CONSTRUCTION / CONTRACTING / ELECTRO-MECHANICAL' },
  { key: 'oilGas', label: 'OIL & GAS' },
  { key: 'manufacturing', label: 'MANUFACTURING / MAINTENANCE' },
  { key: 'interior', label: 'INTERIOR & FIT-OUT / CONTRACTING' },
  { key: 'outsourcing', label: 'OUTSOURCING / HOLDING' },
  { key: 'automotive', label: 'AUTOMOTIVE / AGRICULTURE / SECURITY' },
  { key: 'retail', label: 'RETAIL/FMCG/HOSPITALITY/CATERING/FACILITY MANAGEMENT' },
];

// Sample data for companies with each item belonging to a specific category
const data = [
  { id: 1,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_01-5.jpg', category: 'construction' },
  { id: 2,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_04-5.jpg', category: 'construction' },
  { id: 3,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_02-5.jpg', category: 'oilGas' },
  { id: 4, logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_01-5.jpg', category: 'manufacturing' },
  { id: 5, logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_02-5.jpg', category: 'interior' },
  { id: 6, logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_01-5.jpg', category: 'outsourcing' },
  { id: 7, logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_04-5.jpg', category: 'automotive' },
  { id: 8, logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Logo_01-5.jpg', category: 'retail' },
  // Add more companies as per your need
];

const ClienteleUae = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle category selection
  const handleCategorySelect = (categoryKey) => {
    setActiveCategory(categoryKey);
  };

  // Filter displayed data based on selected category
  const displayedData = activeCategory === 'all' ? data : data.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section with Category Tabs */}
      <h2 className="font-medium text-5xl mb-16">UAE</h2>
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => handleCategorySelect(category.key)}
            className={`px-4 py-2 text-sm rounded-md transition-all mb-2 duration-300 max-w-[17rem] sm:max-w-[16rem] md:max-w-full lg:max-w-full break-words md:whitespace-nowrap lg:whitespace-nowrap ${
              activeCategory === category.key
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {displayedData.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-center border p-2 rounded-lg shadow-sm bg-white"
          >
            <img src={company.logo} alt={company.name} className="h-24 w-44" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleUae;
