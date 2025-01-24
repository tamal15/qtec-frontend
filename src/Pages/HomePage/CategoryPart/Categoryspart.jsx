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
    <div className=" p-6 md:px-24 mt-20 bg-gray-50">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
      Browse Items by Category
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Object.keys(categoryCounts).map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category)}
          className="group flex flex-row md:flex-row items-center p-6 bg-white h-32 shadow-lg rounded-xl hover:shadow-xl transition transform hover:scale-105 cursor-pointer border border-gray-200"
        >
          <span className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-800">
            {data.find((item) => item.category === category)?.icon || "📦"}
          </span>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
              {category}
            </h2>
            <p className="text-sm text-gray-500 text-left group-hover:text-gray-700">
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
