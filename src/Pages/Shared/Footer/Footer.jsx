import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiGlobe, FiChevronRight } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              Contact <span className="ml-2 text-blue-500">▲</span>
            </h3>
            <p className="text-sm mb-2 flex items-start">
              <MdLocationOn className=" text-lg" /> 
              <span>
                <strong>Head Quarters:</strong><br />
                <p className='-ms-4'>Kamal Mansion, 4/58 A, Haji N. A. Azmi Marg,<br />
                Colaba, Mumbai, Maharashtra 400005</p>
              </span>
            </p>
            <p className="text-sm mb-2">
              Co. Name – M/S Soundlines<br />
              License no – B-0886/Mum/Per/1000+/5/5396/99<br />
              DOI - 27.10.2000 DOE-26.7.2026
            </p>
            <hr className='mt-16'/>
            <p className="text-sm mb-2 flex items-center mt-12">
              <FiPhone className="mr-2" /> Phone: +91 22 66283333
            </p>
            <p className="text-sm mb-2 flex items-center">
              <FiMail className="mr-2" /> Email: marketing@soundlinesgroup.com
            </p>
            <p className="text-sm flex items-center">
              <FiGlobe className="mr-2" /> Website: soundlinesgroup.com
            </p>
           
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              Important Links <span className="ml-2 text-blue-500">▲</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Candidates Info</a></li>
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Registration Details</a></li>
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Emigrant Details</a></li>
              <li className="flex items-center"><FiChevronRight className="mr-2" /> <a href="#" className="hover:underline">Sitemap</a></li>
            </ul>

            <div className="flex space-x-2 mt-4">
              <a href="#" className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600">
                <FaYoutube />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              Newsletter <span className="ml-2 text-blue-500">▲</span>
            </h3>
            <p className="text-sm mb-4">
              To receive latest news, events & updates about Soundlines Group, sign up to our newsletter.
            </p>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-2 bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none rounded"
              />
              <button className="w-full px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600">
                Send
              </button>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              Certifications <span className="ml-2 text-blue-500">▲</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Replace src with actual certification image URLs */}
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/acs.jpg" alt="Certification 1" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/acs.jpg" alt="Certification 2" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/jas-anz-256x256.jpg" alt="Certification 3" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/jas-anz-256x256.jpg" alt="Certification 4" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/jas-anz-256x256.jpg" alt="Certification 5" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/jas-anz-256x256.jpg" alt="Certification 6" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/jas-anz-256x256.jpg" alt="Certification 7" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/ccl-256x256.jpg" alt="Certification 8" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/ccl-256x256.jpg" alt="Certification 9" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/ccl-256x256.jpg" alt="Certification 10" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/ccl-256x256.jpg" alt="Certification 11" className="w-full" />
              <img src="https://soundlinesgroup.com/wp-content/uploads/2022/12/ccl-256x256.jpg" alt="Certification 12" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
