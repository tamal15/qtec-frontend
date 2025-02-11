import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { IoMdCloudUpload } from "react-icons/io";
import { useTranslation } from "react-i18next";

const AddsShow = () => {
  const { user } = useAuth();
  const userPhone = user?.phoneNumber;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://servers.sellflit.com/api/addsproducts", {
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
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div>
            <IoMdCloudUpload className="text-8xl" />
          </div>
          <div>
          <h2 className="text-2xl font-bold">{t("youHaveNoAds")}</h2>
            <p className="text-gray-500 mb-4 text-xl">{t("clickPostAdNow")}</p>
            <Link to="/postadpages">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                {t("postYourAdNow")}
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
              <ProductCard key={product._id} product={product} setProducts={setProducts} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AddsShow;
