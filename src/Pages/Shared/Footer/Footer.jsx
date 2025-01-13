import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 md:px-24 mt-10 md:mt-0">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">More from Bikroy</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Sell Fast
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Membership
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Banner Ads
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Boost Ad
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Help & Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Stay safe
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">About Bikroy</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Terms and Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Blog & Guides</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  CarsGuide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  BikesGuide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  PropertyGuide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  Official Blog
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Download our app</h3>
            <div className="space-y-2">
              <Link href="#">
                <img
                  src="https://i.ibb.co.com/W2ZVDQQ/google-play.png"
                  alt="Google Play"
                  className="w-32"
                />
              </Link>
              <Link href="#">
                <img src="https://i.ibb.co.com/5sXXSvq/app.png" alt="App Store" className="w-32" />
              </Link>
            </div>
            <h3 className="text-gray-800 font-bold mt-6">Other countries</h3>
            <a
              href="#"
              className="flex items-center mt-2 hover:text-gray-800 space-x-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/2560px-Flag_of_Sri_Lanka.svg.png"
                alt="Sri Lanka"
                className="w-6 h-6 rounded-xl"
              />
              <span>Sri Lanka</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          {/* Left Side Text */}
          <div className="text-sm text-gray-500">
            © 2025. All rights reserved. Component It
          </div>

          {/* Right Side Image */}
          <div>
            <img
              src="https://i.ibb.co.com/ctzhvV3/cash-icon-removebg-preview.png"
              alt="Bikroy Logo"
              className="w-20 md:w-24 h-16 me-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
