import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Swal from 'sweetalert2';

const MultiStepModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    organization: '',
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://webi-bacend.onrender.com/postdatarecruitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const result = await response.json();
      console.log("Data submitted successfully:", result);
      Swal.fire("done!", "Your file has been deleted.", "success");
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg mx-4 p-6 rounded shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose} // Ensure this function is called correctly
          className="absolute top-2 right-2 text-black bg-gray-300 rounded-full p-1 hover:bg-gray-400"
        >
          &times;
        </button>
        
        <h2 className="text-center text-xl font-semibold mb-4">Were only a few clicks away!</h2>
        <p className="text-center mb-6">
          If youre looking for a job <span className="font-semibold cursor-pointer text-red-500">click here</span>
        </p>

        {/* Step Indicators */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  s === step ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
                } border`}
              >
                {s}
              </div>
              {s < 4 && <div className={`h-1 w-8 bg-${s <= step ? 'red-500' : 'gray-300'} mx-2`} />}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        {step === 1 && (
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Name"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Email"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2">Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Number"
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <label className="block mb-2">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Organization"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
MultiStepModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const ServiceManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getservicemanagement`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center p-4">
      {/* Main Section */}
      <div
        className="relative max-w-6xl h-80 w-full bg-cover bg-center shadow-md rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${data[0]?.image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content Section */}
        <div className="relative flex flex-col lg:flex-row h-full">
          {/* Left Side with Image */}
          <div className="flex-1"></div>

          {/* Right Side with Text Overlay */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="text-white bg-white bg-opacity-70 p-6 rounded-md shadow-lg text-center lg:text-left max-w-md">
              <h2 className="text-2xl font-bold text-black">{data[0]?.title}</h2>
              <p className="text-sm text-black mt-2">
              {data[0]?.description}
              </p>
              <button
                onClick={handleModalToggle}
                className="mt-4 px-4 py-2 bg-black text-white rounded"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && <MultiStepModal onClose={handleModalToggle} />}
    </div>
  );
};

export default ServiceManagement;
