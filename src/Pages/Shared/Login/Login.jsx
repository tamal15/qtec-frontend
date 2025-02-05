import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcCameraAddon, FcNeutralTrading, FcSearch } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithOwnEmailAndPass } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [ setSuccessMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");


  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // Send OTP to phone number
    const sendOtp = async () => {
      if (!/^\d{11}$/.test(phoneNumber)) {
        alert("Please enter a valid 11-digit Bangladeshi phone number.");
        return;
      }
      try {
        const response = await fetch("https://to-cash-backend.onrender.com/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber }),
        });
        const data = await response.json();
        if (data.success) {
          setOtpSent(true);
          alert("OTP sent successfully!");
        } else {
          alert(data.message || "Failed to send OTP.");
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error sending OTP.",
        });
      }
    };
  
    // Verify OTP
    const verifyOtp = async () => {
      try {
        const response = await fetch("https://to-cash-backend.onrender.com/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, otp }),
        });
        const data = await response.json();
        if (data.success) {
          setOtpVerified(true);
          setSuccessMessage("OTP Verified Successfully!");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message || "Invalid OTP.",
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "Success",
          title: "Verification success",
          text: "update success",
        });
      }
    };


    const resetPassword = async () => {
      if (!otpVerified) {
        Swal.fire("Error!", "Please verify OTP first!", "error");
        return;
      }
      if (!newPassword) {
        Swal.fire("Error!", "Please enter a new password!", "error");
        return;
      }
      try {
        const response = await fetch("https://to-cash-backend.onrender.com/reset-password", {
          method: "PUT", // ✅ Use PUT method for updating password
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, newPassword }),
        });
    
        const data = await response.json();
        if (data.success) {
          Swal.fire("Success!", "Password updated successfully!", "success");
          setResetMode(false);
          setOtpSent(false);
          setOtpVerified(false);
          setNewPassword("");
        } else {
          Swal.fire("Error!", data.message || "Failed to reset password.", "error");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Error resetting password.", "error");
      }
    };
    
    
    
    
  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await loginWithOwnEmailAndPass(data.phoneNumber, data.password, location, navigate);
    } catch (error) {
      setAuthError(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="shadow-lg md:p-20 p-5 bg-white rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Section */}
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SellFlit এ স্বাগতম!</h2>
            <p className="text-gray-600 mb-6">আপনার অ্যাকাউন্টের নিয়ন্ত্রণ নিতে লগ ইন করুন।</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <FcNeutralTrading className="w-8 h-8 mr-4" />
                <p className="text-gray-700 font-medium">দ্রুত আপনার বিজ্ঞাপন পোস্ট করা শুরু করুন।</p>
              </div>
              <div className="flex items-start">
                <FcSearch className="w-8 h-8 mr-4" />
                <p className="text-gray-700 font-medium">পছন্দের বিজ্ঞাপনগুলো ফেভারিট হিসেবে সেভ করুন।</p>
              </div>
              <div className="flex items-start">
                <FcCameraAddon className="w-8 h-8 mr-4" />
                <p className="text-gray-700 font-medium">প্রয়োজনমতো সময়ে বিজ্ঞাপনগুলো দেখুন ও নিয়ন্ত্রণ করুন।</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-r from-[#01c0c9] to-[#007cde] md:p-8 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to SellFlit</h2>

            {/* Show Authentication Error */}
            {authError && (
              <p className="bg-red-500 text-white text-center p-2 rounded-md mb-4">{authError}</p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Phone Number Input */}
              <div>
                <input
                  type="text"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input with Toggle Visibility */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-xl font-medium py-2 rounded-lg transition duration-300 
                bg-white hover:bg-blue-700 text-black"
              >
                Login
              </button>


             

              <div className="mt-3 text-center">
                <p className="text-white">
                  New to SellFlit?{" "}
                  <Link to="/signup" className="text-white underline hover:text-blue-400">
                    Create a free Account
                  </Link>
                </p>
              </div>
            </form>

            <div className="bg-gradient-to-r from-[#01c0c9] to-[#007cde] md:p-8 p-6 rounded-lg w-full max-w-lg -mt-5">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              {/* {resetMode ? "Reset Password" : "Login to SellFlit"} */}
            </h2>

            {resetMode ? (
              <>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                />
                {!otpSent ? (
                  <button onClick={sendOtp} className="w-full py-2 bg-blue-500 text-white rounded-lg">
                    Send OTP
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                    />
                    <button
                      onClick={verifyOtp}
                      className="w-full py-2 bg-green-500 text-white rounded-lg mt-2"
                      disabled={otpVerified}
                    >
                      {otpVerified ? "OTP Verified ✅" : "Verify OTP"}
                    </button>
                    {otpVerified && (
                      <>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter New Password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        <button
                          onClick={resetPassword}
                          className="w-full py-2 bg-blue-700 text-white rounded-lg mt-2"
                        >
                          Update Password
                        </button>
                      </>
                    )}
                  </>
                )}
                {/* <button onClick={() => setResetMode(false)} className="text-white underline mt-4">
                  Back to Login
                </button> */}
              </>
            ) : (
              <button onClick={() => setResetMode(true)} className="w-full py-2 bg-gray-300 text-black rounded-lg">
                Reset Password
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
