import { useState, useEffect } from "react";

const LocationSelector = () => {
  const [categories, setCategories] = useState([]); // State to hold categories data
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [subcategories, setSubcategories] = useState([]); // State for subcategories
  const [selectedSubcategory, setSelectedSubcategory] = useState(""); // State for selected subcategory

  // Load JSON data dynamically using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/service.json"); // Adjust the path to your JSON file
        const data = await response.json();
        setCategories(data.categories); // Set categories data
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle Category Change
  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);

    const category = categories.find((cat) => cat.name === categoryName);
    setSubcategories(category ? category.subcategories : []);
    setSelectedSubcategory("");
  };

  // Handle Subcategory Change
  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Category Selector</h1>

      {/* Category Selector */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2 w-full"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Selector */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Subcategory:</label>
        <select
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="border rounded p-2 w-full"
          disabled={!subcategories.length}
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>

      {/* Display Selection */}
      {selectedSubcategory && (
        <div className="mt-4">
          <h2 className="text-lg font-medium">
            Selected Subcategory: {selectedSubcategory}
          </h2>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
