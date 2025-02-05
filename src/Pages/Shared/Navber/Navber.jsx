import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoLogoWechat } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { useTranslationContext } from "../Context/TranslationContext";
import { useTranslation } from "react-i18next";

const Navber = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isDropdownOpens, setIsDropdownOpens] = useState(false);
  const { user } = useAuth();

  // ✅ Ensure user properties exist
  const displayName = user?.displayName || "Guest";
  const phoneNumber = user?.phoneNumber || "No Phone";

  console.log("User Name:", displayName);
  console.log("Phone Number:", phoneNumber);
  
  // Ens
 
  const { switchLanguage } = useTranslationContext(); // Using the custom context function
  const { t, i18n } = useTranslation(); // Using react-i18next hook
  const [language, setLanguage] = useState(i18n.language); // Keep track of the current language

  // Update language state when the language changes
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
 

 

  // Toggle navigation menu (hamburger menu)
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white text-sm py-2 fixed top-0 left-0 right-0 z-[9999]">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/C.O.Overseas?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400"
            >
              <FaFacebookF />
            </a>

            <a href="#" className="text-white hover:text-orange-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center">
              <FiPhone className="mr-1 text-white" />
              +880 1680-564154
            </div>
            {/* <div className="flex items-center">
              <FiMapPin className="mr-1 text-white" />
              Purana Paltan,Dhaka-1200, Dhaka, Bangladesh
            </div> */}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-white hover:text-orange-400"
            >
              <FiMail className="mr-1" /> ethanfaisul@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full inset-x-0 m-auto sticky top-[30px] md:top-[30px] z-[998]">
        <nav className="flex justify-between items-center p-2 backdrop-blur-sm backgroundsnavbar w-full px-4 shadow-lg">
          <div className="flex items-center mt-5 md:mt-0">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/HQ5Q5jf/sellflit.png"
                alt="Logo Image"
                className="w-[70px] md:h-[60px] h-[40px] md:mt-1 text-white"
              />
            </Link>
          </div>

          {/* Center Navigation Links */}
          <ul className={`hidden md:flex md:items-center md:gap-10`}>
            <li className="font-medium text-black text-xl">
              <Link to="/">{t("home")}</Link>
            </li>
          
            {user?.phoneNumber ? (
      <>
        {/* If user is logged in, show Chat and Account */}
        <li className="font-medium text-black text-xl">
          <Link to="/viewchats" className="flex">
            <IoLogoWechat className="text-xl mt-1" />
            <button className="ms-2">{t("chat")}</button>
          </Link>
        </li>

        <li className="font-medium text-black text-xl">
          <Link to="/accounts" className="flex">
            <MdAccountCircle className="text-xl mt-1" />
            <button className="ms-2">{t("account")}</button>
          </Link>
        </li>
      </>
    ) : (
      <>
        {/* If user is not logged in, show only Login */}
        <li className="font-medium text-black text-xl">
          <Link to="/login" className="flex">
            <button className="ms-2">{t("logins")}</button>
          </Link>
        </li>
      </>
    )}
            <li className="font-medium text-black text-xl">
              <Link to="/allads">
              <button className=" ms-1">{t("allAds")}</button>
              </Link>
           
            </li>
            <li className="font-medium text-black text-xl">
            <button className="bg-[#007cde] text-white py-1 px-3 rounded-full" onClick={() => switchLanguage(language === "en" ? "bn" : "en")}>
        {language === "en" ? "বাংলা" : "English"}
      </button>
            </li>
            
          </ul>

          {/* Contact Us Link */}
          <div className="hidden md:block">
            <Link to="/postadpages">
            <button className="bg-[#007cde] text-white px-4 py-2 rounded-full font-bold">{t("postFreeAd")}</button>
            </Link>
          
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className={`md:hidden mt-3 cursor-pointer ${isNavOpen ? "toggle" : ""}`}
            onClick={toggleNav}
          >
            <div className="line1 w-6 h-1 bg-black mb-1"></div>
            <div className="line2 w-6 h-1 bg-black mb-1"></div>
            <div className="line3 w-6 h-1 bg-black"></div>
          </div>

          {/* Mobile Menu */}
          {/* Mobile Menu */}
<ul
  className={`absolute top-20 left-0 w-full bg-white transition-all duration-500 ease-in md:hidden flex flex-col items-center ${
    isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  <li className="font-medium text-black text-xl py-2">
    <Link to="/" onClick={() => setIsNavOpen(false)}>
      {t("home")}
    </Link>
  </li>

  {user?.phoneNumber ? (
    <>
      {/* If user is logged in, show Chat and Account */}
      <li className="font-medium text-black text-xl py-2">
        <Link to="/viewchats" className="flex" onClick={() => setIsNavOpen(false)}>
          <IoLogoWechat className="text-xl mt-1" />
          <button className="ms-2">{t("chat")}</button>
        </Link>
      </li>

      <li className="font-medium text-black text-xl py-2">
        <Link to="/accounts" className="flex" onClick={() => setIsNavOpen(false)}>
          <MdAccountCircle className="text-xl mt-1" />
          <button className="ms-2">{t("account")}</button>
        </Link>
      </li>
    </>
  ) : (
    <>
      {/* If user is not logged in, show only Login */}
      <li className="font-medium text-black text-xl py-2">
        <Link to="/login" className="flex" onClick={() => setIsNavOpen(false)}>
          <button className="ms-2">{t("logins")}</button>
        </Link>
      </li>
    </>
  )}

  <li className="font-medium text-black text-xl py-2">
    <Link to="/allads" onClick={() => setIsNavOpen(false)}>
      <button className="ms-1">{t("allAds")}</button>
    </Link>
  </li>

  <li className="font-medium text-black text-xl py-2">
    <button
      className="bg-[#007cde] text-white py-1 px-3 rounded-full"
      onClick={() => {
        switchLanguage(language === "en" ? "bn" : "en");
        setIsNavOpen(false);
      }}
    >
      {language === "en" ? "বাংলা" : "English"}
    </button>
  </li>

  <div className="md:block py-2">
    <Link to="/postadpages" onClick={() => setIsNavOpen(false)}>
      <button className="bg-[#007cde] text-white px-4 py-2 rounded-full font-bold">
        {t("postFreeAd")}
      </button>
    </Link>
  </div>
</ul>

          
        </nav>
      </div>
    </>
  );
};

export default Navber;
