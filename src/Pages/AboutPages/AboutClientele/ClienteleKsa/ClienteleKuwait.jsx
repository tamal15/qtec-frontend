import { useEffect, useState } from "react";

// Sample data with company logos


const ClienteleKuwait = () => {

  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getcategorysdataskuwaits`
        );
        const result = await response.json();
        setCategory(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered companies based on active category
  const filteredCompanies = activeCategory === "All"
    ? category
    : category?.filter(company => company.category === activeCategory);

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
            <img src={company.image} alt={company.name} className="h-24 w-44" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleKuwait;
