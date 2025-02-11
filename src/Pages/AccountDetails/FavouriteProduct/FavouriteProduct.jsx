import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ListProduct from "./ListProduct";
import { useTranslation } from "react-i18next";

const FavouriteProduct = () => {
  const { user } = useAuth();
  // const userEmail = user?.email;
  const userPhone = user?.phoneNumber;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://servers.sellflit.com/api/lovelistproduct", {
          params: { phone: userPhone },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userPhone) {
      fetchProducts();
    }
  }, [userPhone]);

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
       <h2 className="text-xl font-bold mb-4">{t("noFavorites")}</h2>
            <p className="text-gray-600 mb-2">{t("clickStarToFavorite")}</p>
            <p className="text-gray-600 mb-4">{t("browseAdsHint")}</p>
            <Link to="/browse">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {t("browseAds")}
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
