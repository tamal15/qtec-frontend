import { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

  // Handle opening/closing dropdown with a delay
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any pending timeouts
    setIsDropdownOpen(true); // Open dropdown immediately
  };
  const handleMouseEnters = () => {
    clearTimeout(timeoutId); // Clear any pending timeouts
    setIsDropdownOpens(true); // Open dropdown immediately
  };

  const handleMouseLeave = () => {
    // Add a slight delay before closing the dropdown
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust timing to your preference
  };
  const handleMouseLeaves = () => {
    // Add a slight delay before closing the dropdown
    timeoutId = setTimeout(() => {
      setIsDropdownOpens(false);
    }, 200); // Adjust timing to your preference
  };

  const handleNavClick = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false); // Close dropdown when navigating
  };
  const handleNavClicks = () => {
    setIsNavOpen(false);
    setIsDropdownOpens(false); // Close dropdown when navigating
  };

  return (
    <div className="w-full fixed top-0 inset-x-0 m-auto z-[999999]">
      <nav className="flex p-2 justify-between items-center backdrop-blur-sm  backgroundsnavbar  w-full px-4 shadow-lg">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/r2fG5Yj/logo1-removebg.png"
              alt="Logo Image"
              className="w-[80px] h-[70px] text-white"
            />
          </Link>
        </div>

        <div
          className={`md:hidden cursor-pointer ${isNavOpen ? "toggle" : ""}`}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="line1 w-6 h-1 bg-white mb-1"></div>
          <div className="line2 w-6 h-1 bg-white mb-1"></div>
          <div className="line3 w-6 h-1 bg-white"></div>
        </div>

        <ul
          className={`nav-links md:flex md:items-center md:gap-10 md:pt-0 pt-10 absolute md:static smallscreen w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isNavOpen ? "top-20 opacity-100" : "top-[-490px] opacity-0 md:opacity-100 md:top-0"
          }`}
        >
          <li className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0" onClick={() => setIsNavOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          {/* About with hover dropdown */}
          <li
            className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer">About</span>
            <ul
              className={`absolute navbarsidecolor text-white mt-2 py-2 w-40 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >

              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                <Link to="/aboutuspage">AboutUs</Link>
              </li>
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                <Link to="/award">Award</Link>
              </li>
              
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                <Link to="/aboutclientele">Clientele</Link>
              </li>
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                <Link to="/aboutrecruitment">Recruitment</Link>
              </li>
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClick}
              >
                <Link to="/aboutTestimonial">Testimonial</Link>
              </li>
            </ul>
          </li>
          <li className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0" onClick={() => setIsNavOpen(false)}>
            <Link to="/services">Our Services</Link>
          </li>
          <li className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0" onClick={() => setIsNavOpen(false)}>
            <Link to="/career">Career</Link>
          </li>
          <li className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0" onClick={() => setIsNavOpen(false)}>
            <Link to="/blogpage">Blog</Link>
          </li>
          <li
            className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0 relative group"
            onMouseEnter={handleMouseEnters}
            onMouseLeave={handleMouseLeaves}
          >
            <span className="cursor-pointer">Event</span>
            <ul
              className={`absolute navbarsidecolor text-white mt-2 py-2 w-40 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                isDropdownOpens ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClicks}
              >
                <Link to="/eventcare">We Care</Link>
              </li>
              <li
                className="py-1 px-4 hover:bg-gray-700 font-medium transition-colors duration-200 cursor-pointer"
                onClick={handleNavClicks}
              >
                <Link to="/eventmedia">Media</Link>
              </li>
              
             
            </ul>
          </li>
          <li className="font-medium text-2xl md:text-2xl text-white my-2 md:my-0" onClick={() => setIsNavOpen(false)}>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
