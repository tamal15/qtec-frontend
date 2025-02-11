import  { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import useAuth from "../../Hooks/useAuth";

const Setting = () => {
  const { user } = useAuth(); // Get the logged-in user's details
  // const email = user.email;
  const phone = user.phoneNumber;

  const [formData, setFormData] = useState({
    phone: phone,
    name: "",
    email: "",
    district: "",
    upazila: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://servers.sellflit.com/getuserdats", {
          params: { phone }, // Send email as query param
        });

        if (response.data) {
          setFormData({
            phone: response.data.phoneNumber || "",
            name: response.data.displayName || "",
            email: response.data.email || "",
            district: response.data.district || "",
            upazila: response.data.upazila || "",
          });
        } else {
          Swal.fire("Error", "User data not found.", "error");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Swal.fire("Error", "Failed to fetch user data. Please try again later.", "error");
      } finally {
        setLoading(false);
      }
    };

    if (phone) {
      fetchUserData();
    }
  }, [phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("https://servers.sellflit.com/api/update-user", formData);

      // Show success message with SweetAlert
      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      // Show error message with SweetAlert
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "An error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="p-8 flex flex-col lg:flex-row gap-8">
      {/* Left side for heading or description */}
      <div className="w-56 lg:w-1/3  p-6  rounded-lg">
        <h2 className="text-2xl font-bold mb-4 -mt-6 md:mt-0">Settings</h2>
        <p className="text-gray-600">
          Manage your account information, update personal details, All Information set..
        </p>
        <div className="md:mt-8 mt-2">
        <img className="w-[420px] h-[300px]"  src="https://zilbablifestyle.com/wp-content/uploads/2024/05/Contact-us.gif"/>
        </div>
      </div>

      {/* Right side for the form */}
      <div className="w-64 -ms-10 md:ms-0 lg:w-2/3 -mt-10 md:mt-0  bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-bold mb-4">Personal Details</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Enter your district"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Upazila</label>
              <input
                type="text"
                name="upazila"
                value={formData.upazila}
                onChange={handleChange}
                placeholder="Enter your upazila"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full lg:w-auto bg-[#007cde] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Update Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Setting;
