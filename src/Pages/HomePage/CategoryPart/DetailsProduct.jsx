import { useState } from "react";
import SingleProductDetails from "./SingleProductDetails";
import PropTypes from "prop-types";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const DetailsProduct = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsPerPage = 30;
  const {user}=useAuth();
  const email=user.email;

  // Filter data to include only approved products
  const approvedProducts = data.filter(
    (product) => product.productStatus === "approved"
  );

  // Search logic for brand or subcategory
  const filteredProducts = approvedProducts.filter((product) => {
    const brandMatch = product.brand
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const subCategoryMatch = product.subCategory
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return brandMatch || subCategoryMatch;
  });

  // Sort products based on package priority and maintain serial order for no-package items
  const sortedProducts = filteredProducts.sort((a, b) => {
    const packageOrder = {
      "Top Ad": 1,
      "Bump Up": 2,
      "Urgent": 3,
    };

    const packageA = packageOrder[a.boostingDetails?.packageName] || Infinity;
    const packageB = packageOrder[b.boostingDetails?.packageName] || Infinity;

    if (packageA !== packageB) {
      return packageA - packageB;
    }

    if (packageA === Infinity && packageB === Infinity) {
      return filteredProducts.indexOf(a) - filteredProducts.indexOf(b);
    }

    const boostingEndTimeA = a.boostingDetails
      ? new Date(
          a.boostingDetails.boostingDate + "T" + a.boostingDetails.boostingTime
        ).getTime()
      : 0;

    const boostingEndTimeB = b.boostingDetails
      ? new Date(
          b.boostingDetails.boostingDate + "T" + b.boostingDetails.boostingTime
        ).getTime()
      : 0;

    return boostingEndTimeB - boostingEndTimeA;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const getPackageSymbol = (packageName) => {
    switch (packageName) {
      case "Top Ad":
        return "⬆️";
      case "Bump Up":
        return "🔝";
      case "Urgent":
        return "⚠️";
      default:
        return "";
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSaveSearch = () => {
    setIsModalOpen(true);
  };
  const handleSaveSearchToDatabase = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/save-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm,email }),
      });

      if (response.ok) {
        alert("Search term saved successfully!");
        setIsModalOpen(false); // Close the modal
      } else {
        alert("Failed to save search term. Please try again.");
      }
    } catch (error) {
      console.error("Error saving search term:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-left">
      <span className="text-[#007cde]">{data[0]?.category }</span> পণ্য বিক্রি করুন সহজে এবং দ্রুত, এখনই শুরু করুন!
 
</h2>


       {/* Search Section */}
 {/* Search Section */}
 <div className="flex items-center justify-between mb-20 mt-16">
        {/* Left Text */}
        <div className="text-lg font-semibold text-gray-700"></div>

        {/* Right Search Field */}
        <div className="relative w-full md:w-3/5">
          <input
            type="text"
            placeholder="Search by Brand or Subcategory"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-blue-400 rounded-full p-4 w-full pr-14 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md text-lg h-14"
          />
          <FaSearch className="absolute right-5 top-2/4 transform -translate-y-2/4 text-blue-500 text-xl" />
          <button
            onClick={handleSaveSearch}
            className="absolute mt-16 right-[-10px] top-2/4 transform -translate-y-2/4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
          >
            Save Search
          </button>
        </div>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-start p-4 border rounded hover:shadow-lg bg-white shadow-[0_2px_18px_rgba(0,0,0,0.15)]"
          >
            <img
              src={product.images[0] || "https://via.placeholder.com/150"}
              alt={product.model}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold text-blue-600">
              {product.brand} {product.model}{" "}
              <span className="text-gray-500">({product.condition})</span>
            </h3>
            <p className="text-lg text-gray-500 ">
              {product.division || "N/A"}, {product.category || "N/A"}
            </p>
            <p className="font-semibold text-blue-600 mb-4 flex">
              <TbCoinTakaFilled className="text-xl mt-1" />{" "}
              <p className="ms-1">{product.price}</p>
            </p>
            <div className="flex justify-between items-center w-full mb-4">
              <span className="text-lg">
                {getPackageSymbol(product.boostingDetails?.packageName)}
              </span>
              <button
                onClick={() => handleViewDetails(product)}
                className="bg-[#007cde] text-white px-4 py-2 rounded font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

        {/* Modal */}
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">
              আপনার সার্চটি সেভ করুন
            </h3>
            <p className="mb-4">আপনার সার্চ টার্মটি সংরক্ষণ করতে ক্লিক করুন।</p>
            <button
              onClick={handleSaveSearchToDatabase}
              className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600"
            >
              সেভ করুন
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="ml-4 bg-gray-300 text-gray-700 px-6 py-2 rounded shadow-md hover:bg-gray-400"
            >
              বাতিল করুন
            </button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <SingleProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

DetailsProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsProduct;
