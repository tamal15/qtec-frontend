import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ListProduct from "./ListProduct";

const FavouriteProduct = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/lovelistproduct", {
          params: { email: userEmail },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchProducts();
    }
  }, [userEmail]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="w-full">
      {products.length === 0 ? (
        <div className="text-center p-8 flex  flex-col md:flex-row gap-10">
        <div>
          <FaStar className='text-8xl'/>
        </div>
       <div>
         <h2 className="text-xl font-bold mb-4">You havent marked any ads as favorite yet.</h2>
        <p className="text-gray-600 mb-2">
          Click on the star symbol on any ad to save it as a favorite.
        </p>
        <p className="text-gray-600 mb-4">
          Start to browse ads to find ads you would like to favorite.
        </p>
        <Link to="/browse">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Browse ads
          </button>
        </Link>
       </div>
      </div>
      ) : (
        <>
          <h1 className="text-xl font-semibold mb-4 md:px-20">
            Published ads <span className="text-green-500">({products.length})</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 md:px-20">
            {products.map((product) => (
              <ListProduct key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavouriteProduct;
