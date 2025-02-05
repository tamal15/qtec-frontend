import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const ProductCard = ({ product ,setProducts}) => {
  const navigate = useNavigate();

 

  const handleBoostClick = () => {
    // Navigate to the boost page and pass the product ID
    navigate(`/boost-ad/${product._id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Immediately remove from UI before API call
        setProducts((prevProducts) => prevProducts.filter((p) => p._id !== id));

        axios
          .delete(`https://to-cash-backend.onrender.com/categoriespartsdelete/${id}`)
          .then((response) => {
            if (response.status === 204) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Something went wrong. Try again.", "error");

            // If API call fails, restore the product back
            setProducts((prevProducts) => [...prevProducts, product]);
          });
      }
    });
  };
  
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {/* Top Section */}
      <div className="flex gap-4">
        <img
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.brand}
          className="w-20 md:h-20 h-44 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-600">
            {product.title} 
            {/* {product.model}{" "} */}
            {/* <span className="text-gray-500">({product.condition})</span> */}
          </h3>
          <p className="text-sm text-gray-500">
             {product.division || "N/A"}, {product.category || "N/A"}
          </p>
          <h6 className="text-sm text-gray-500 bg-gray-200 p-2 me-40 rounded-md">
             {product.productStatus || "N/A"}
          </h6>
          <p className="text-lg font-bold text-black mb-2 mt-2">Tk {product.price}</p>

          {product.boostingDetails?.packageName && (
      <span className="text-sm font-semibold  mt-3 text-blue-500 bg-gray-100 px-3 py-1 rounded-md">
        {product.boostingDetails.packageName}
      </span>
    )}
          
        </div>
        
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2 mt-4">
         <NavLink
                                to={`/editproductcard/${product._id}`}
                                style={{
                                  textDecoration: "none",
                                  marginRight: "-10px",
                                }}
                              >
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#01c0c9] text-white text-xl duration-300 active:scale-90">
                                  <FaPencilAlt />
                                </button>
                              </NavLink>
        <button
                                onClick={() => handleDelete(product?._id)}
                                className="w-10 h-10 ml-4 rounded-full flex items-center justify-center bg-[#007cde] text-white text-xl duration-300 active:scale-90"
                              >
                                <MdOutlineDeleteOutline />
                              </button>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Promotion Section */}
      
      {product.productStatus === "approved" && (
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
      className="py-2 px-4 bg-[#007cde] me-5 mt-3 md:me-0 md:mt-0 text-white rounded-lg hover:bg-green-600 flex items-center justify-center"
    >
      <span className="mr-2">⬆️</span> Boost this ad
    </button>
  </div>
</div>
)}
    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired, // Product ID (required)
      images: PropTypes.arrayOf(PropTypes.string), // Array of image URLs
      brand: PropTypes.string.isRequired, // Product brand (required)
      productStatus: PropTypes.string.isRequired, // Product brand (required)
      model: PropTypes.string, // Product model
      title:PropTypes.string,
      condition: PropTypes.string, // Product condition (e.g., "Used", "New")
      division: PropTypes.string, // Division/Region
      category: PropTypes.string, // Product category
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // Price (required)
      boostingDetails: PropTypes.shape({
        packageName: PropTypes.string, // Package name for boosted ads
        amount: PropTypes.number, // Boosting amount
        // boostingDays: PropTypes.number, 
        // boostingDate: PropTypes.string, 
        // boostingTime: PropTypes.string, 
        // bkashNumber: PropTypes.string,
        // boostedAt: PropTypes.string, 
      }),
    
    }).isRequired,
    setProducts: PropTypes.func.isRequired,
    
  };

export default ProductCard;
