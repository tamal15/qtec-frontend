import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { registerUser, authError } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
  
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      if (data.password !== data.password2) {
        alert('Your passwords do not match');
        return;
      }
  
      // Register the user
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
      <div>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
          <div className="py-10">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center">
                {/* Image Section */}
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <img
                    data-aos="zoom-in"
                    src="https://i.ibb.co/PYRQwwP/1622955529676.png"
                    alt=""
                    className="h-64 w-72"
                  />
                </div>
  
                {/* Form Section */}
                <div className="md:w-2/3">
                  <div className="bg-blue-900 rounded-lg p-8 text-center text-black">
                    <h2 className="text-2xl font-semibold mb-6">
                      Sign Up to SARONG
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        className="w-3/4 mb-4 p-3 border border-gray-300 rounded-md"
                        {...register("name", { required: true })}
                        placeholder="Enter Full Name"
                      />
                      <input
                        className="w-3/4 mb-4 p-3 border border-gray-300 rounded-md"
                        {...register("email", { required: true })}
                        placeholder="Enter Email"
                      />
                      <div className="relative w-3/4 mb-4">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full p-3 border border-gray-300 rounded-md"
                          {...register("password", { required: true })}
                          placeholder="Enter Password"
                        />
                        <span
                          className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <div className="relative w-3/4 mb-4">
                        <input
                          type={showPassword2 ? "text" : "password"}
                          className="w-full p-3 border border-gray-300 rounded-md"
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
                        className="w-3/4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Sign Up
                      </button>
                    </form>
                    <div className="mt-6">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-300 underline">
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
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  