import PropTypes from "prop-types";


const DetailsSidebar = ({ data, setSelectedSubCategory, setSelectedDivision }) => {
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
      <h2 className="font-bold text-lg mb-4">Sort by</h2>
      <select className="border border-gray-300 rounded p-2 w-full">
        <option>Date: Newest on top</option>
        <option>Price: High to Low</option>
        <option>Price: Low to High</option>
      </select>

      {/* Category Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Category</h2>
        <ul className="space-y-2 ms-5 ">
          {uniqueCategories.map((category, index) => (
            <li key={index} className="hover:underline cursor-pointer font-normal text-lg">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Subcategory Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Subcategory</h2>
        <ul className="space-y-2">
          {Object.entries(subcategoryCounts).map(([subCategory, count], index) => (
            <li
              key={index}
              className="hover:underline cursor-pointer ms-5"
              onClick={() => setSelectedSubCategory(subCategory)}
            >
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
              className="hover:underline cursor-pointer"
              onClick={() => setSelectedDivision(division)}
            >
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
};

export default DetailsSidebar;
