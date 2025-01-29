import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { FcCameraAddon, FcNeutralTrading, FcSearch } from "react-icons/fc";

const Signup = () => {
  const { registerUser, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your passwords do not match");
      return;
    }

    registerUser(data.email, data.password, data.name, location, navigate);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="  shadow-[0_2px_18px_rgba(0,0,0,0.15)] md:p-10 p-3">
        <div className="flex flex-col md:flex-row items-center justify-center  rounded-lg overflow-hidden">
          {/* Image Section */}
          {/* <div className="md:w-1/2 p-6 flex justify-center ">
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/PYRQwwP/1622955529676.png"
              alt="Signup Illustration"
              className="h-64 w-72 object-contain"
            />
          </div> */}

           <div className="p-5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">SellFlit এ  স্বাগতম!</h2>
            <p className="text-gray-600 mb-6">আপনার অ্যাকাউন্ট তৈরি করুন এবং নিচের সুবিধাগুলো উপভোগ করুন।</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
              <FcNeutralTrading className="w-10 h-10 mr-4"/>
                <p className="text-gray-700 font-medium">আপনার পণ্য বা সেবার বিজ্ঞাপন দ্রুত এবং সহজেই পোস্ট করুন।</p>
              </div>
              <div className="flex items-start">
              <FcSearch className="w-10 h-10 mr-4"/>
                <p className="text-gray-700 font-medium">আপনার পছন্দের বিজ্ঞাপনগুলো ফেভারিট হিসেবে সংরক্ষণ করুন।</p>
              </div>
              <div className="flex items-start">
              <FcCameraAddon className="w-10 h-10 mr-4"/>
                <p className="text-gray-700 font-medium">প্রয়োজনমতো সময়ে বিজ্ঞাপনগুলো দেখুন ও নিয়ন্ত্রণ করুন।</p>
              </div>
            </div>
                    </div>

          {/* Form Section */}
          <div className="md:w-1/2 rounded-xl p-9 bg-gradient-to-r from-[#01c0c9] to-[#007cde]  text-white">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Sign Up to SellFlit
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("name", { required: true })}
                placeholder="Enter Full Name"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("email", { required: true })}
                placeholder="Enter Email"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", { required: true })}
                  placeholder="Enter Password"
                />
                <span
                  className="absolute top-3  right-3 text-black cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  {...register("password2", { required: true })}
                  placeholder="Re-enter Password"
                />
                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={togglePassword2Visibility}
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-white text-black font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white">
                Already have an account? {" "}
                <Link to="/login" className="text-white hover:underline">
                  Login here
                </Link>
              </p>
            </div>

            {authError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
                {authError}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
