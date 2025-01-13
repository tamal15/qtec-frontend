import { useState } from "react";
import SingleProductDetails from "./SingleProductDetails";
import PropTypes from "prop-types";

const DetailsProduct = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Mobiles and Accessories for Sale in Bangladesh
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((product) => (
          <div
            key={product._id}
            style={{background:"rgba(255, 203, 95, .05)"}}
            className="flex flex-col items-start  p-4 border-[#ffcb5f] border rounded hover:shadow-lg"
          >
            <img
              src={product.images[0]}
              alt={product.model}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{product.model}</h3>
            <p className="text-gray-500 mb-1">Division: {product.division}</p>
            <p className="text-gray-600 mb-1">Category: {product.category}</p>
            <p className="font-semibold text-blue-600 mb-4">Price: {product.price}</p>
            <button
              onClick={() => handleViewDetails(product)}
              className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <SingleProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

DetailsProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, 
};

export default DetailsProduct;
