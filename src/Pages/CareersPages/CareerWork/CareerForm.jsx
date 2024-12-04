import { useState } from "react";
import Swal from "sweetalert2";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://webi-bacend.onrender.com/postscareersdatas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
  
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          link: "",
        });
  
        Swal.fire("Done!", "Your data has been submitted.", "success");
      } else {
        const error = await response.json();
        console.error("Error:", error);
        Swal.fire("Error", `Submission failed: ${error.message}`, "error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Share Your CV for Exciting Opportunities!
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            placeholder="Your Mobile Number"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Resume Link <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            placeholder="Your Resume Link"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
