import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ToggleDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4 ms-4">
        {t("aboutBikroyTitle")}
      </h1>
      <div className="p-4 rounded">
        {!isExpanded ? (
          <>
            <p className="text-gray-700">
              {t("aboutBikroyShortDesc")}
            </p>
            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={toggleDescription}
            >
              {t("showMore")} ▼
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-4">
              {t("aboutBikroyFullDesc")}
            </p>
            <h2 className="text-xl font-semibold mb-2">
              {t("buySellRentJobsTitle")}
            </h2>
            <p className="text-gray-700 mb-4">
              {t("buySellRentJobsDesc")}
            </p>
            <p className="text-gray-700 mb-4">
              {t("easyShoppingTitle")}
            </p>
            <p className="text-gray-700 mb-4">
              {t("businessMembershipTitle")}
            </p>
            <h2 className="text-xl font-semibold mb-2">
              {t("benefitsTitle")}
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>{t("fastEasyExperience")}</li>
              <li>{t("postAdsFree")}</li>
              <li>{t("safeSecureShopping")}</li>
            </ul>
            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={toggleDescription}
            >
              {t("showLess")} ▲
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToggleDescription;
