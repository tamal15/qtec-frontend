import { useState } from "react";
import SingleProductDetails from "./SingleProductDetails";
import PropTypes from "prop-types";

const DetailsProduct = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter data to include only approved products
  const approvedProducts = data.filter(
    (product) => product.productStatus === "approved"
  );

  // Sort products based on the following criteria:
  const sortedProducts = approvedProducts.sort((a, b) => {
    const isTopAdA = a.boostingDetails?.packageName === "Top Ad";
    const isTopAdB = b.boostingDetails?.packageName === "Top Ad";

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

    if (isTopAdA && isTopAdB) {
      return boostingEndTimeB - boostingEndTimeA;
    }

    if (isTopAdA) return -1;
    if (isTopAdB) return 1;

    if (boostingEndTimeA && boostingEndTimeB) {
      return boostingEndTimeB - boostingEndTimeA;
    }

    if (boostingEndTimeA) return -1;
    if (boostingEndTimeB) return 1;

    return 0;
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const getPackageSymbol = (packageName) => {
    switch (packageName) {
      case "Top Ad":
        return "⬆️"; // Top Ad Symbol
      case "Boost Up":
        return "🔝"; // Boost Up Symbol
      default:
        return ""; // No Package Symbol
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Mobiles and Accessories for Sale in Bangladesh
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {sortedProducts.map((product) => (
          <div
            key={product._id}
            style={{ background: "rgba(255, 203, 95, .05)" }}
            className="flex flex-col items-start p-4 border-[#ffcb5f] border rounded hover:shadow-lg"
          >
            <img
              src={product.images[0] || "https://via.placeholder.com/150"}
              alt={product.model}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{product.model}</h3>
            <p className="text-gray-500 mb-1">Division: {product.division}</p>
            <p className="text-gray-600 mb-1">Category: {product.category}</p>
            <p className="font-semibold text-blue-600 mb-4">
              Price: {product.price}
            </p>
            <div className="flex justify-between items-center w-full mb-4">
              <span className="text-lg">
                {getPackageSymbol(product.boostingDetails?.packageName)}
              </span>
              <button
                onClick={() => handleViewDetails(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
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
