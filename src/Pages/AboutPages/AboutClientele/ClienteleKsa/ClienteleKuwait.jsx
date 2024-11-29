import { useState } from "react";

// Sample data with company logos
const companies = [
  { id: 1,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_01-1.gif", category: "All" },
  { id: 2,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_09.gif", category: "All" },
  { id: 3,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_01-1.gif", category: "All" },
  { id: 4,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_09.gif", category: "All" },
  { id: 5,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_01-1.gif", category: "All" },
  { id: 6, logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_09.gif", category: "All" },
  { id: 7,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_01-1.gif", category: "All" },
  { id: 8,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_09.gif", category: "All" },
  { id: 9,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_01-1.gif", category: "All" },
  { id: 10,  logo: "https://soundlinesgroup.com/wp-content/uploads/2023/05/01_09.gif", category: "All" },
  // Add more companies with appropriate categories as needed
];

const ClienteleKuwait = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered companies based on active category
  const filteredCompanies = activeCategory === "All"
    ? companies
    : companies.filter(company => company.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="font-medium text-5xl mb-16">KUWAIT / BAHRAIN</h2>

      
      {/* Categories Header */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`text-lg font-semibold px-4 py-2 rounded-md ${activeCategory === "All" ? " text-black" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition duration-300`}
        >
          All
        </button>
      </div>

      {/* Company Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredCompanies.map((company) => (
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

export default ClienteleKuwait;
