import { useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const AllNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-500 text-white py-4 px-6  ">
      <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center">
        {/* Logo and All ads + Bangla section */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            ☰
          </button>
          <div className="text-2xl font-bold flex items-center">
           <Link className="flex" to="/">
           <span className="mr-1"><img className="w-12 h-12" src="https://i.ibb.co.com/ctzhvV3/cash-icon-removebg-preview.png"></img></span> 
           <span className="mt-2">To-Cash</span></Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 ml-4">
            <button className="bg-transparent text-white ms-5">All ads</button>
            <button className="bg-gray-800 text-white py-1 px-3 rounded-full">বাংলা</button>
          </div>
        </div>

        {/* Chat, Account, and Post Ad buttons */}
        <div className="flex items-center space-x-2">
          <button className="md:hidden text-white text-xl"><IoLogoWechat className="text-xl mt-1"/></button>
          <button className="md:hidden text-white text-xl"><MdAccountCircle className="text-xl mt-1"/></button>
          <div className="hidden md:flex items-center space-x-6">
         <div className="flex">
         <Link to="/viewchats" className="flex">
         <IoLogoWechat className="text-xl mt-1"/>
         <button className="bg-transparent text-white ms-2">Chat</button></Link>
         </div>
         <div>
        <Link to="/accounts" className="flex">
        <MdAccountCircle className="text-xl mt-1"/>
        <button className="bg-transparent text-white ms-2">Account</button></Link>
         </div>
            <button className="bg-yellow-400 text-teal-900 px-4 py-2 rounded-full font-bold">POST FREE AD</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto mt-6 md:mt-16 px-4 lg:px-16 md:hidden">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              className="w-full py-3 px-4 rounded-full shadow-md focus:outline-none"
              placeholder="What are you looking for?"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-teal-900 p-2 rounded-full shadow-md">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="w-3/4 max-w-sm bg-gray-900 text-white h-full shadow-md p-6 flex flex-col space-y-4">
            <button onClick={toggleMenu} className="text-right text-xl mb-4">&times;</button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🏷</span>
                <span>All ads in Bikroy</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>👤</span>
                <span>Account</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span>
                <span>Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>🛡️</span>
                <span>Stay safe</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>❓</span>
                <span>FAQ</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <span>💸</span>
                <span>How to sell fast?</span>
              </a>
            </nav>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-full mt-auto">বাংলা</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AllNavber;
