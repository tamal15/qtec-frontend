import { useState } from "react";

const categories = [
  { key: 'all', label: 'All' },
  { key: 'construction', label: 'CONSTRUCTION / MEP' },
  { key: 'restaurant', label: 'QSR/RESTAURANT/CAFE/SWEET /CATERING/FMCG' },
  { key: 'hospitality', label: 'HOSPITALITY/AIRLINES/ENTERTAINMENT/RETAIL/HEALTHCARE' },
  { key: 'operations', label: 'OPERATIONS & MAINTENANCE / LOGISTIC/AUTOMOBILE/MANUFACTURING/AGRICULTURE' },
  { key: 'affiliations', label: 'OUR AFFILIATIONS' },
];

// Sample data with each item belonging to a specific category
const data = [
  { id: 1, name: 'Company A', logo: 'https://soundlinesgroup.com/wp-content/uploads/2022/07/Untitled-design-30.jpg', category: 'construction' },
  { id: 2, name: 'Company B', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/1-7.jpg', category: 'restaurant' },
  { id: 3, name: 'Company C', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T133823.897.jpg', category: 'hospitality' },
  { id: 4, name: 'Company D', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T162413.749.jpg', category: 'operations' },
  { id: 5, name: 'Company E', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T162413.749.jpg', category: 'affiliations' },
  { id: 6, name: 'Company F', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T133823.897.jpg', category: 'construction' },
  { id: 7, name: 'Company G', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/1-7.jpg', category: 'restaurant' },
  { id: 8, name: 'Company G', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T162413.749.jpg', category: 'restaurant' },
  { id: 9, name: 'Company G', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/Untitled-design-2023-04-18T133823.897.jpg', category: 'restaurant' },
  { id: 10, name: 'Company G', logo: 'https://soundlinesgroup.com/wp-content/uploads/2023/04/1-7.jpg', category: 'restaurant' },
  // Add more items as needed
];

const ClienteleKsa = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter displayed data based on the active category
  const displayedData = activeCategory === 'all'
    ? data // Show all items if "All" is selected
    : data.filter((item) => item.category === activeCategory); // Filter by category

  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="font-medium text-5xl mb-16">KSA</h2>
      <div className="flex justify-center space-x-1 mb-8 flex-wrap">
        {categories.map((category) => (
       <button
       key={category.key}
       onClick={() => setActiveCategory(category.key)}
       className={`px-4 py-2 text-sm rounded mb-2 ${
         activeCategory === category.key ? 'bg-white' : 'bg-gray-200 text-gray-800'
       } max-w-[18rem] sm:max-w-[16rem] md:max-w-full lg:max-w-full break-words md:whitespace-nowrap lg:whitespace-nowrap`}
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

export default ClienteleKsa;
