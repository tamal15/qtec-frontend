import { useState } from "react";
import Swal from "sweetalert2";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
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
      const response = await fetch("https://webi-bacend.onrender.com/homecontactpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);

        // Clear form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });

        Swal.fire("Success", "Your message has been sent!", "success");
      } else {
        const error = await response.json();
        console.error("Error:", error);
        Swal.fire("Error", `Failed to send your message: ${error.message}`, "error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
    }
  };

  return (
    <section
      className="relative flex items-center bg-cover bg-center h-[600px]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg')",
      }}
    >
      {/* Overlay for a darker effect on background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Form Container aligned to the right */}
      <div className="relative z-10 w-full mr-4 ml-4 max-w-lg md:ml-auto md:mr-8 p-8 bg-white bg-opacity-80 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
          GET IN TOUCH
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Work Phone"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
