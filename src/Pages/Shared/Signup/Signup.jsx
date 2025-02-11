import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { FcCameraAddon, FcNeutralTrading, FcSearch } from "react-icons/fc";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const {  authError } = useAuth();
  // const location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit } = useForm();

  // Send OTP to phone number
  const sendOtp = async () => {
    if (!/^\d{11}$/.test(phoneNumber)) {
      alert("Please enter a valid 11-digit Bangladeshi phone number.");
      return;
    }
    try {
      const response = await fetch("https://servers.sellflit.com/send-otp", {
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
      const response = await fetch("https://servers.sellflit.com/verify-otp", {
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
        icon: "error",
        title: "Verification Failed",
        text: "Error verifying OTP.",
      });
    }
  };

  // Submit Registration Data
  const onSubmit = async (data) => {
    if (!otpVerified) {
      Swal.fire({
        icon: "warning",
        title: "Attention!",
        text: "Please verify OTP first!",
      });
      
      return;
    }
  
    // if (data.password !== data.password2) {
    //   alert("Your passwords do not match");
    //   return;
    // }
  
    try {
      // Send registration data
      const response = await fetch("https://servers.sellflit.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  displayName: data.name, password:data.password, phoneNumber }),
      });
  
      const result = await response.json();
  
      if (!result.success) {
        alert(result.message); // Show error if phone number is already registered
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User registered successfully!",
        });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Registration failed.",
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="shadow-[0_2px_18px_rgba(0,0,0,0.15)] md:p-10 p-3">
        <div className="flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SellFlit এ স্বাগতম!</h2>
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

          {/* Signup Form */}
          <div className="md:w-1/2 rounded-xl p-9 bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up to SellFlit</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register("name", { required: true })}
                placeholder="Enter Full Name"
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
             

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 11-digit phone number"
                  maxLength={11}
                />
              </div>

              {otpSent && (
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter OTP"
                    maxLength={6}
                  />
                </div>
              )}

              {!otpSent ? (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="w-full py-3 bg-white font-medium text-black rounded-md hover:bg-blue-700"
                >
                  Send OTP
                </button>
              ) : (
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="w-full py-3 bg-blue-700 text-white rounded-md hover:bg-green-700"
                  disabled={otpVerified}
                >
                  {otpVerified ? "OTP Verified ✅" : "Verify OTP"}
                </button>
              )}

              {successMessage && (
                <p className="mt-4 text-white font-semibold">{successMessage}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gray-300 text-black font-medium rounded-md hover:bg-blue-700 transition duration-300"
                disabled={!otpVerified}
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-white hover:underline">Login here</Link>
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
