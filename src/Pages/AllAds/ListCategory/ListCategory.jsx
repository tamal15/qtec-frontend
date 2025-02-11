import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ListCategory = () => {
  const [data, setData] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  // const [divisionCounts, setDivisionCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://servers.sellflit.com/getcategoryparts`);
        const result = await response.json();

        // Calculate category counts
        const categoryCountsTemp = {};
        const divisionCountsTemp = {};

        result.forEach((item) => {
          // Count categories
          categoryCountsTemp[item.category] =
            (categoryCountsTemp[item.category] || 0) + 1;

          // Count divisions
          divisionCountsTemp[item.division] =
            (divisionCountsTemp[item.division] || 0) + 1;
        });

        setData(result);
        setCategoryCounts(categoryCountsTemp);
        // setDivisionCounts(divisionCountsTemp);
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

  // const handleDivisionClick = (division) => {
  //   const filteredData = data.filter((item) => item.division === division);
  //   navigate(`/division/${division}`, { state: { data: filteredData } });
  // };

  return (
    <aside className="bg-white p-4">
      {/* Sort By Section */}
      {/* <h2 className="font-bold text-lg mb-4">Sort by</h2>
      <select className="border border-gray-300 rounded p-2 w-full">
        <option>Date: Newest on top</option>
        <option>Price: High to Low</option>
        <option>Price: Low to High</option>
      </select> */}

      {/* Category Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Category</h2>
        <div className="grid grid-cols-1">
          {Object.keys(categoryCounts).map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="group flex items-center p-6 h-12 rounded-xl transition transform hover:scale-105 cursor-pointer"
            >
              <span className="text-xl text-indigo-600 group-hover:text-indigo-800">
                {data.find((item) => item.category === category)?.icon || "📦"}
              </span>
              <div className="text-left flex">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                  {category}
                </h2>
                <p className="text-sm text-gray-500 ms-1 group-hover:text-gray-700 mt-1">
                  ({categoryCounts[category]})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Division Section */}
      {/* <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">All of Bangladesh</h2>
        <ul className="space-y-2">
          {Object.keys(divisionCounts).map((division, index) => (
            <li
              key={index}
              className="hover:underline cursor-pointer flex ms-5"
              onClick={() => handleDivisionClick(division)}
            >
              <FaAngleDoubleRight className="text-gray-500 mt-1 me-2" />
              {division} ({divisionCounts[division]})
            </li>
          ))}
        </ul>
      </div> */}
    </aside>
  );
};

ListCategory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedSubCategory: PropTypes.func,
  setSelectedDivision: PropTypes.func,
};

export default ListCategory;
