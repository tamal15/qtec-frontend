import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { FcCameraAddon, FcNeutralTrading, FcSearch } from "react-icons/fc";

const Login = () => {
  const { loginWithOwnEmailAndPass, authError, sendPasswordReset } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (resetEmail) {
      const response = await sendPasswordReset(resetEmail);
      setResetMessage(response.message);
      if (response.success) {
        setResetEmail("");
      }
    } else {
      setResetMessage("Please enter your email.");
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginWithOwnEmailAndPass(data.email, data.password, location, navigate);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className=" shadow-[0_2px_18px_rgba(0,0,0,0.15)] md:p-20 p-3">
        <div className="flex  flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Section */}
          {/* <div className="flex-shrink-0">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/PYRQwwP/1622955529676.png"
              alt="Login Illustration"
              width={360}
              height={340}
            />
          </div> */}

          <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SellFlit এ  স্বাগতম!</h2>
  <p className="text-gray-600 mb-6">আপনার অ্যাকাউন্টের নিয়ন্ত্রণ নিতে লগ ইন করুন।</p>
  
  <div className="space-y-6">
    <div className="flex items-start">
    <FcNeutralTrading className="w-10 h-10 mr-4"/>
      <p className="text-gray-700 font-medium">দ্রুত আপনার বিজ্ঞাপন পোস্ট করা শুরু করুন।</p>
    </div>
    <div className="flex items-start">
    <FcSearch className="w-10 h-10 mr-4"/>
      <p className="text-gray-700 font-medium">পছন্দের বিজ্ঞাপনগুলো ফেভারিট হিসেবে সেভ করুন।</p>
    </div>
    <div className="flex items-start">
    <FcCameraAddon className="w-10 h-10 mr-4"/>
      <p className="text-gray-700 font-medium">প্রয়োজনমতো সময়ে বিজ্ঞাপনগুলো দেখুন ও নিয়ন্ত্রণ করুন।</p>
    </div>
  </div>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-r from-[#01c0c9] to-[#007cde]   md:p-8 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to SellFlit</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Email"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Enter Password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white hover:bg-blue-700 text-xl font-medium text-black py-2 rounded-lg transition duration-300"
              >
                Login
              </button>

              <div className="mt-3 text-center">
                <p>
                  New to SellFlit?{" "}
                  <Link to="/signup">
                    <span className="text-white underline hover:text-blue-400">
                      Create a free Account
                    </span>
                  </Link>
                </p>
                <p
                  className="text-white underline hover:text-blue-400 cursor-pointer mt-2"
                  onClick={() => setShowResetForm(!showResetForm)}
                >
                  Forget Password?
                </p>
              </div>
            </form>

            {/* Password Reset Section */}
            {showResetForm && (
              <div className="bg-gray-100 text-black p-4 rounded-lg mt-4">
                <h4 className="text-lg font-bold mb-2">Reset Password</h4>
                <div className="mb-3">
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300 mb-2"
                  onClick={handleResetPassword}
                >
                  Reset Email
                </button>
                {resetMessage && (
                  <div
                    className={`${
                      resetMessage.includes("success")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } p-2 rounded-lg text-center`}
                  >
                    {resetMessage}
                  </div>
                )}
                <button
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-300"
                  onClick={() => setShowResetForm(false)}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Error Alert */}
            {authError && (
              <div
                className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                role="alert"
              >
                {authError}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
