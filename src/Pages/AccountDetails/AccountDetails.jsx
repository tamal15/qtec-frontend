import { useState } from "react";
import {
  FaAd,
  FaUser,
  FaSearch,
  FaStar,
  FaCog,
  FaPhone,
  FaAngleDoubleRight,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import { IoMdCloudUpload } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import AddsShow from "./AddsShow/AddsShow";
import SearchList from "./SearchList/SearchList";
import FavouriteProduct from "./FavouriteProduct/FavouriteProduct";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Setting from "./Setting/Setting";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import useAuth from "../Hooks/useAuth";

// FaBriefcase
const AccountDetails = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("myAds"));
  const { userLogOut } = useAuth();

  const tabs = [
    { name: t("myAds"), icon: <FaAd /> }, // Translated "My Ads"
    { name: t("myMembership"), icon: <FaUser /> }, // Translated "My Membership"
    { name: t("savedSearches"), icon: <FaSearch /> }, // Default if translation is missing
    { name: t("favourite"), icon: <FaStar /> },
    { name: t("settings"), icon: <FaCog /> },
    { name: t("phoneNumber"), icon: <FaPhone /> },
    { name: "Log out", icon: <FaStar /> },
    // { name: 'Jobs', icon: <FaBriefcase /> },
    // { name: 'My profile', icon: <FaUser /> },
    // { name: 'Profile database', icon: <FaUser /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case t("myAds"):
        return (
          <div className="w-full">
            <AddsShow />
          </div>
        );
      case t("myMembership"):
        return (
          <div className="flex md:px-16 flex-col md:flex-row gap-10 items-center justify-center h-full">
            <div>
              <MdCardMembership className="text-8xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t("becomeMember")}</h2>
              <p className="text-gray-500 mb-4 text-xl">
                {t("membershipDescription")}
              </p>
              <Link to="/contactus">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  {t("contactUs")}
                </button>
              </Link>
            </div>
          </div>
        );
      case t("savedSearches"):
        return (
          <div className="text-center p-8 w-full">
            <SearchList />
          </div>
        );
      case t("favourite"):
        return (
          <div className="w-full">
            <FavouriteProduct />
          </div>
        );
      case t("settings"):
        return (
          <div className="w-full">
            <Setting />
          </div>
        );

      case t("phoneNumber"):
        return (
          <div className="w-full">
            <PhoneNumber />
          </div>
        );
      case t("Log out"):
        return (
          <div className="w-full text-center">
            <NavLink
              className="fw-bold text-6xl"
              to={"/"}
              style={({ isActive }) => ({
                color: isActive ? "black" : "black",
              })}
            >
              <li
                onClick={userLogOut}
                className="text-[#007cde] flex ms-5 items-center justify-center text-6xl font-bold"
                style={{  }}
              >
                <FaSignOutAlt className="me-1 mt-2  " /> Log Out
              </li>
            </NavLink>
          </div>
        );

      case "Jobs":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">Jobs</h2>
            <p className="text-gray-500 mb-4 text-center">
              Manage job postings and applications here.
            </p>
          </div>
        );
      case "My profile":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">My Profile</h2>
            <p className="text-gray-500 mb-4 text-center">
              View and edit your profile information here.
            </p>
          </div>
        );
      case "Profile database":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-bold">Profile Database</h2>
            <p className="text-gray-500 mb-4 text-center">
              Manage your profile database and associated details.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-4 md:mt-10 mt-20">
      {/* Sidebar */}
      <ScrollToTop />
      <div className="bg-gray-100 w-full md:w-1/4 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="flex items-center justify-between gap-2 cursor-pointer py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <div
                className={`flex items-center gap-2 flex-grow ${
                  activeTab === tab.name
                    ? "bg-gray-300 font-bold"
                    : "hover:bg-gray-200"
                } rounded-lg py-2 -mt-2 px-4`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.icon}
                {tab.name}
              </div>
              <FaAngleDoubleRight className="text-gray-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountDetails;
