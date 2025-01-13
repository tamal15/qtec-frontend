import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categoryspart = () => {
  const [data, setData] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/getcategoryparts`);
        const result = await response.json();

        // Calculate category counts
        const counts = {};
        result.forEach((item) => {
          counts[item.category] = (counts[item.category] || 0) + 1;
        });

        setData(result);
        setCategoryCounts(counts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    const filteredData = data.filter((item) => item.category === category);
    navigate(`/category/${category}`, { state: { data: filteredData } });
  };

  return (
    <div className="min-h-screen  p-4 md:px-20 mt-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Browse items by category
      </h1>
      <div className="grid grid-cols-1 h-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(categoryCounts).map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="flex items-center p-4 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-lg hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition cursor-pointer"
          >
            <span className="text-3xl mr-4">
              {data.find((item) => item.category === category)?.icon || "📦"}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {category}
              </h2>
              <p className="text-sm text-gray-500">
                {categoryCounts[category]} ads
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoryspart;
