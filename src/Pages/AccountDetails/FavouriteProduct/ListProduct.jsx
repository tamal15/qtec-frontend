import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ListProduct = ({ product }) => {



  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {/* Top Section */}
      <div className="flex gap-4">
        <img
          src={product.image || "https://via.placeholder.com/150"}
          alt={product.brand}
          className="w-20 h-28 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-600">
            {product.brand} {product.model}{" "}
            <span className="text-gray-500">({product.condition})</span>
          </h3>
          <p className="text-sm text-gray-500">
            {product.district}, {product.upazila}, {product.division || "N/A"}, {product.category || "N/A"}
          </p>
          <p className="text-lg font-bold text-black mt-2">Tk {product.price}</p>
        </div>

        
      </div>
      <div className=" flex justify-end items-end">
      <FaStar className="me-2 text-2xl text-blue-600" />
      <p className="mt-2">  ফেভারিট</p>
      </div>
     

      {/* Divider */}
      {/* <hr className="my-4 border-gray-200" /> */}

      {/* Promotion Section */}

      

    </div>
  );
};

ListProduct.propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired, 
      image: PropTypes.arrayOf(PropTypes.string), 
      brand: PropTypes.string.isRequired, 
      model: PropTypes.string, 
      district: PropTypes.string, 
      upazila: PropTypes.string, 
      condition: PropTypes.string, 
      division: PropTypes.string, 
      category: PropTypes.string, 
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // Price (required)
    }).isRequired,
  };

export default ListProduct;
