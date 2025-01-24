import { useState } from "react";
import SingleProductDetails from "./SingleProductDetails";
import PropTypes from "prop-types";
import { TbCoinTakaFilled } from "react-icons/tb";

const DetailsProduct = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;

  // Filter data to include only approved products
  const approvedProducts = data.filter(
    (product) => product.productStatus === "approved"
  );

  // Sort products based on package priority and maintain serial order for no-package items
  const sortedProducts = approvedProducts.sort((a, b) => {
    const packageOrder = {
      "Top Ad": 1,
      "Bump Up": 2,
      "Urgent": 3,
    };

    // Assign package priority or Infinity for products without a package
    const packageA = packageOrder[a.boostingDetails?.packageName] || Infinity;
    const packageB = packageOrder[b.boostingDetails?.packageName] || Infinity;

    // First, sort by package priority
    if (packageA !== packageB) {
      return packageA - packageB;
    }

    // If both products have no package, maintain their serial order
    if (packageA === Infinity && packageB === Infinity) {
      return approvedProducts.indexOf(a) - approvedProducts.indexOf(b);
    }

    // If same package, sort by boosting time (most recent first)
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

    return boostingEndTimeB - boostingEndTimeA; // More recent boosting comes first
  });

   // Pagination logic
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
 

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  

  const getPackageSymbol = (packageName) => {
    switch (packageName) {
      case "Top Ad":
        return "⬆️"; // Top Ad Symbol
      case "Bump Up":
        return "🔝"; // Bump Up Symbol
      case "Urgent":
        return "⚠️"; // Urgent Symbol
      default:
        return ""; // No Package Symbol
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Mobiles and Accessories for Sale in Bangladesh
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            // style={{ background: "rgba(255, 203, 95, .05)" }}
            className="flex flex-col items-start p-4  border rounded hover:shadow-lg bg-white shadow-[0_2px_18px_rgba(0,0,0,0.15)]"
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
            <TbCoinTakaFilled className="text-xl mt-1" /> <p className="ms-1">{product.price}</p>
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
