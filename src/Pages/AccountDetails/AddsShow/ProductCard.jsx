import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBoostClick = () => {
    // Navigate to the boost page and pass the product ID
    navigate(`/boost-ad/${product._id}`);
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {/* Top Section */}
      <div className="flex gap-4">
        <img
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.brand}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-600">
            {product.brand} {product.model}{" "}
            <span className="text-gray-500">({product.condition})</span>
          </h3>
          <p className="text-sm text-gray-500">
            6 days, {product.division || "N/A"}, {product.category || "N/A"}
          </p>
          <p className="text-lg font-bold text-black mt-2">Tk {product.price}</p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 text-center bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Edit
        </button>
        <button className="px-4 py-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Promotion Section */}
      <div className="flex md:flex-row  flex-col justify-between items-center">
  <div>
    <p className="text-sm text-gray-400">
      Reach up to <span className="font-semibold">10x more people</span> by promoting your ad.
    </p>
    <div className="flex gap-2 mt-2">
      <span className="text-yellow-500 text-xl">🔼</span>
      <span className="text-red-500 text-xl">🏅</span>
      <span className="text-green-500 text-xl">✅</span>
    </div>
  </div>
  <div className="ml-auto">
    <button
      onClick={handleBoostClick}
      className="py-2 px-4 bg-[#007cde] text-white rounded-lg hover:bg-green-600 flex items-center justify-center"
    >
      <span className="mr-2">⬆️</span> Boost this ad
    </button>
  </div>
</div>

    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired, // Product ID (required)
      images: PropTypes.arrayOf(PropTypes.string), // Array of image URLs
      brand: PropTypes.string.isRequired, // Product brand (required)
      model: PropTypes.string, // Product model
      condition: PropTypes.string, // Product condition (e.g., "Used", "New")
      division: PropTypes.string, // Division/Region
      category: PropTypes.string, // Product category
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // Price (required)
    }).isRequired,
  };

export default ProductCard;
