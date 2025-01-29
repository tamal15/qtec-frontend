import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const ContactUs = () => {
  return (
    <div className=" py-12">
      <ScrollToTop/>
      <div className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_rgba(0,0,0,0.15)] rounded-lg p-6">
        <div className="flex flex-col items-center text-center">
          <div className=" mb-4">
            <img
              src="https://img.freepik.com/premium-vector/cartoon-people-sitting-table-with-laptops-one-them-has-man-it_1187092-50536.jpg" // Replace this with your email illustration
              alt="Contact Illustration"
              className="w-[350px] h-[220px]"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 mt-2">Contact us</h2>
          <p className="text-gray-600 mb-6 px-20 ">
            Check out our <Link to="#" className="text-blue-500 ">FAQs</Link> and <Link to="#" className="text-blue-500 ">Stay Safe</Link> sections to see if your question has already been answered. If not, please get in touch with us, and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-center mb-4">
            You can also call or email us
          </h3>
          <p className="text-center text-gray-500 mb-8">
            Every day from 10:00 AM to 8:00 PM
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-green-500 text-2xl mb-2">
                <i className="fas fa-phone"></i>
              </div>
             <div className="flex">
             <FaPhone className="mt-2 text-xl"/>
             <p className="text-lg font-semibold ms-2">Call us</p>
             </div>
              <p className="text-gray-600 mt-2">0 1680-564154</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-green-500 text-2xl mb-2">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="flex">
              <FaLocationDot className="mt-1 text-xl"/>
              <p className="text-lg font-semibold ms-2">Address</p>
              </div>
              <p className="text-gray-600">
                Floor-11, MS Center, Plot 8, Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka-1212
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-green-500 text-2xl mb-2">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="flex">
              <MdEmail className="mt-1 text-xl"/>
              <p className="text-lg font-semibold ms-2">Email us</p>
              </div>
              <p className="text-gray-600">ethanfaisul@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
