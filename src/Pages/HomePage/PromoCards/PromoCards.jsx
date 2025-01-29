import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PromoCards = () => {
      const { t } = useTranslation();
  
  return (
    <div className="max-w-6xl mx-auto mt-16 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* First Card */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://img.icons8.com/color/48/000000/money-bag.png"
            alt="Money Bag Icon"
            className="w-12 h-12"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {t("startEarning")}
          </h3>
          <p className="text-gray-600 mb-4">
          {t("sellSomething")}
          </p>
          <Link to="/uploadcategory">
          <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600">
            + {t("freeAd")}
          </button>
          </Link>
         
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://img.icons8.com/color/48/000000/megaphone.png"
            alt="Megaphone Icon"
            className="w-12 h-12"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {t("boostAd")}
          </h3>
          <p className="text-gray-600 mb-4">
          {t("boostDescription")}
          </p>
          <Link to="/accounts">
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
          {t("learnMore")} 
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
