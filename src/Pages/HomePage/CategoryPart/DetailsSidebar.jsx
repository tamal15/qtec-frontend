import PropTypes from "prop-types";
import { FaAngleDoubleRight } from "react-icons/fa";


const DetailsSidebar = ({ data, setSelectedSubCategory, setSelectedDivision , onFilterChange, }) => {
  // Calculate subcategory counts
  const subcategoryCounts = data.reduce((acc, item) => {
    acc[item.subCategory] = (acc[item.subCategory] || 0) + 1;
    return acc;
  }, {});

  // Extract unique categories and divisions from the data
  const uniqueCategories = [...new Set(data.map((item) => item.category))];
  const uniqueDivisions = [...new Set(data.map((item) => item.division))];

  return (
    <aside className="bg-white p-4 ">
      {/* Sort By Section */}
      {/* <h2 className="font-bold text-lg mb-4">Sort by</h2>
      <select className="border border-gray-300 rounded p-2 w-full">
        <option>Date: Newest on top</option>
        <option>Price: High to Low</option>
        <option>Price: Low to High</option>
      </select> */}

{/* condition  */}
      <div>
      <h2 className="font-bold text-lg mb-4 mt-8">Filter by Condition</h2>
      <div className="space-y-2">
        {/* Used Filter */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="used"
            name="condition"
            onChange={() => onFilterChange("used")}
            className="h-5 w-5 border-gray-300 focus:ring-blue-500 text-blue-600 rounded"
          />
          <label htmlFor="used" className="cursor-pointer">
            Used
          </label>
        </div>

        {/* New Filter */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="new"
            name="condition"
            onChange={() => onFilterChange("new")}
            className="h-5 w-5 border-gray-300 focus:ring-green-500 text-green-600 rounded"
          />
          <label htmlFor="new" className="cursor-pointer">
            New
          </label>
        </div>
      </div>
      </div>

      {/* Category Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Category</h2>
        <ul className="space-y-2 ms-5">
  {uniqueCategories.map((category, index) => (
    <li
      key={index}
      className="flex items-center hover:underline cursor-pointer font-normal text-lg space-x-2"
    >
      <FaAngleDoubleRight className="text-gray-500" />
      <span>{category}</span>
      
    </li>
  ))}
</ul>

      </div>

      {/* Subcategory Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4 ">Subcategory</h2>
        <ul className="space-y-2">
          {Object.entries(subcategoryCounts).map(([subCategory, count], index) => (
            <li
              key={index}
              className="hover:underline cursor-pointer ms-5 flex"
              onClick={() => setSelectedSubCategory(subCategory)}
            >
              <FaAngleDoubleRight className="text-gray-500 mt-1 me-2" />
              {subCategory} <span className="text-gray-500">({count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Locations Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">All of Bangladesh</h2>
        <ul className="space-y-2">
          {uniqueDivisions.map((division, index) => (
            <li
              key={index}
              className="hover:underline cursor-pointer flex ms-5"
              onClick={() => setSelectedDivision(division)}
            >
                <FaAngleDoubleRight className="text-gray-500 mt-1 me-2" />
              {division}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

DetailsSidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, 
  setSelectedSubCategory: PropTypes.arrayOf(PropTypes.object).isRequired, 
  setSelectedDivision: PropTypes.arrayOf(PropTypes.object).isRequired, 
  onFilterChange: PropTypes.func.isRequired,
};

export default DetailsSidebar;
