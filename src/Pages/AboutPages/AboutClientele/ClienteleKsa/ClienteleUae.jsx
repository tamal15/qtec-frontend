import { useEffect, useState } from "react";

// Define categories
// const categories = [
//   { key: 'all', label: 'All' },
//   { key: 'construction', label: 'CONSTRUCTION / CONTRACTING / ELECTRO-MECHANICAL' },
//   { key: 'oilGas', label: 'OIL & GAS' },
//   { key: 'manufacturing', label: 'MANUFACTURING / MAINTENANCE' },
//   { key: 'interior', label: 'INTERIOR & FIT-OUT / CONTRACTING' },
//   { key: 'outsourcing', label: 'OUTSOURCING / HOLDING' },
//   { key: 'automotive', label: 'AUTOMOTIVE / AGRICULTURE / SECURITY' },
//   { key: 'retail', label: 'RETAIL/FMCG/HOSPITALITY/CATERING/FACILITY MANAGEMENT' },
// ];

// Sample data for companies with each item belonging to a specific category


const ClienteleUae = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getclientUSE`
        );
        const result = await response.json();
        setDatas(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getcategoryUSE`
        );
        const result = await response.json();
        setCategory(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  const [activeCategory, setActiveCategory] = useState('all');

  // Handle category selection
  const handleCategorySelect = (categoryKey) => {
    setActiveCategory(categoryKey);
  };

  // Filter displayed data based on selected category
  const displayedData = activeCategory === 'all' ? category : category?.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section with Category Tabs */}
      <h2 className="font-medium text-5xl mb-16">UAE</h2>
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {datas.map((category) => (
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
            <img src={company.image} alt={company.name} className="h-24 w-44" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleUae;
