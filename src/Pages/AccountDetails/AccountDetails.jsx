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
  FaBars,
} from "react-icons/fa";
import { Link, Navigate, NavLink } from "react-router-dom";
import { MdCardMembership } from "react-icons/md";
import AddsShow from "./AddsShow/AddsShow";
import SearchList from "./SearchList/SearchList";
import FavouriteProduct from "./FavouriteProduct/FavouriteProduct";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Setting from "./Setting/Setting";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import useAuth from "../Hooks/useAuth";

const AccountDetails = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("myAds"));
  const { userLogOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const tabs = [
    { name: t("myAds"), icon: <FaAd /> },
    { name: t("myMembership"), icon: <FaUser /> },
    { name: t("savedSearches"), icon: <FaSearch /> },
    { name: t("favourite"), icon: <FaStar /> },
    { name: t("settings"), icon: <FaCog /> },
    { name: t("phoneNumber"), icon: <FaPhone /> },
    { name: "Log out", icon: <FaSignOutAlt /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case t("myAds"): return <AddsShow />;
      case t("myMembership"): return (
        <div className="flex md:px-16 flex-col md:flex-row gap-10 items-center justify-center h-full">
          <MdCardMembership className="text-8xl" />
          <div>
            <h2 className="text-2xl font-bold">{t("becomeMember")}</h2>
            <p className="text-gray-500 mb-4 text-xl">{t("membershipDescription")}</p>
            <Link to="/contactus">
              <button className="bg-green-500 text-white px-4 py-2 rounded">{t("contactUs")}</button>
            </Link>
          </div>
        </div>
      );
      case t("savedSearches"): return <SearchList />;
      case t("favourite"): return <FavouriteProduct />;
      case t("settings"): return <Setting />;
      case t("phoneNumber"): return <PhoneNumber />;
      case "Log out":
        return (
          <div className="text-center">
            <NavLink to="/" onClick={() => userLogOut(Navigate)} className="text-[#007cde] text-6xl font-bold flex items-center justify-center">
              <FaSignOutAlt className="me-1 mt-2" /> Log Out
            </NavLink>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-4 md:mt-10 mt-20">
      <ScrollToTop />
      {/* Mobile Sidebar Toggle */}
      <button className="md:hidden mb-4 text-blue-400" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars className="text-2xl" />
      </button>
      
      {/* Sidebar */}
      <div className={`bg-gray-100 w-full md:w-1/4 p-4 rounded-lg shadow md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.name} className="flex items-center justify-between gap-2 cursor-pointer py-2 px-4 rounded-lg transition-colors duration-200">
              <div
                className={`flex items-center gap-2 flex-grow ${activeTab === tab.name ? "bg-gray-300 font-bold" : "hover:bg-gray-200"} rounded-lg py-2 -mt-2 px-4`}
                onClick={() => { setActiveTab(tab.name); setIsSidebarOpen(false); }}
              >
                {tab.icon} {tab.name}
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
