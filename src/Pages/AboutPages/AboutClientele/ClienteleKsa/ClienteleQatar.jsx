import { useState } from 'react';

// Sample categories
const categories = [
  { key: 'all', label: 'All' },
  { key: 'construction', label: 'CONSTRUCTION / ELECTRO-MECHANICAL / CONTRACTING' },
  { key: 'fmcg', label: 'FMCG / CATERING / RETAIL / HOTEL' },
  { key: 'maintenance', label: 'MAINTENANCE / MANUFACTURING / LOGISTIC' },
];

// Sample data for companies
const data = [
  { id: 1,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_01.jpg', category: 'construction' },
  { id: 2,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_02.jpg', category: 'construction' },
  { id: 3,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_15.jpg', category: 'fmcg' },
  { id: 4,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_01.jpg', category: 'maintenance' },
  { id: 5,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_02.jpg', category: 'maintenance' },
  { id: 6,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_01.jpg', category: 'fmcg' },
  { id: 7,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_15.jpg', category: 'fmcg' },
  { id: 8,  logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/05/Untitled-4_01.jpg', category: 'fmcg' },

  // Add more companies as needed
];

const ClienteleQatar = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter displayed data based on the selected category
  const displayedData =
    activeCategory === 'all'
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="font-medium text-5xl mb-16">QATAR</h2>
      <div className="flex justify-center flex-wrap space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 text-sm rounded-md transition-all mb-2 duration-300 ${
              activeCategory === category.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-700 hover:text-blue-600'
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

export default ClienteleQatar;
