const CareerForm = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          action="#"
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
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Your Mobile Number"
              required
            />
          </div>
  
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume in PDF, Word <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="resume"
              className="w-full mt-1 px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              accept=".pdf,.doc,.docx"
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
  