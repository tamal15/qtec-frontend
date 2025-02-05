import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <footer className="bg-gray-100 text-gray-600 py-8 md:px-24 mt-10 md:mt-0">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">
              {t("moreFromBikroy")}
            </h3>
            <ul>
              <li className="mb-2">
                <Link to="/sellfast" className="hover:text-gray-800">
                  {t("sellFast")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/membership" className="hover:text-gray-800">
                  {t("membership")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/addsbanners" className="hover:text-gray-800">
                  {t("bannerAds")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/boostadds" className="hover:text-gray-800">
                  {t("boostAd")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">
              {t("helpAndSupport")}
            </h3>
            <ul>
              <li className="mb-2">
                <Link to="/aboutwhy" className="hover:text-gray-800">
                  {t("faq")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-800">
                  {t("staySafe")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus" className="hover:text-gray-800">
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">
              {t("aboutBikroy")}
            </h3>
            <ul>
              <li className="mb-2">
                <Link to="/aboutsparts" className="hover:text-gray-800">
                  {t("aboutUs")}
                </Link>
              </li>
              {/* <li className="mb-2">
                <Link to="#" className="hover:text-gray-800">
                  {t("careers")}
                </Link>
              </li> */}
              <li className="mb-2">
                <Link to="/termcondition" className="hover:text-gray-800">
                  {t("termsAndConditions")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacypolicy" className="hover:text-gray-800">
                  {t("privacyPolicy")}
                </Link>
              </li>
              {/* <li className="mb-2">
                <Link to="#" className="hover:text-gray-800">
                  {t("sitemap")}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">{t("blogGuides")}</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {t("carsGuide")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {t("bikesGuide")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {t("propertyGuide")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {t("officialBlog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">
              {t("downloadOurApp")}
            </h3>
            <div className="space-y-2 md:space-y-1 flex md:flex-col flex-row">
              <Link to="#">
                <img
                  src="https://i.ibb.co.com/WvC84wXt/googleplay-new.png"
                  alt={t("googlePlay")}
                  className="w-32 h-8 md:h-10"
                />
              </Link>
              <Link to="#">
                <img
                  src="https://i.ibb.co.com/8LJ4900J/appstore.png"
                  alt={t("appStore")}
                  className="w-32 -mt-4 md:-mt-2 h-12 md:h-16"
                />
              </Link>
            </div>
            <h3 className="text-gray-800 font-bold mt-6">
              {t("otherCountries")}
            </h3>
            <a
              href="#"
              className="flex items-center mt-2 hover:text-gray-800 space-x-2"
            >
              <img
                src="https://i.ibb.co.com/bNts58y/Flag-of-Bangladesh-svg.png"
                alt="Sri Lanka"
                className="w-6 h-6 rounded-xl"
              />
              <span>{t("Bangladesh")}</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          {/* Left Side Text */}
          <div className="text-sm text-gray-500">
            © 2025. {t("allRightsReserved")} Component It
          </div>

          {/* Right Side Image */}
          <div>
            <img
              src="https://i.ibb.co.com/HQ5Q5jf/sellflit.png"
              alt="Sellflit Logo"
              className="w-20 md:w-24 h-16 me-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
