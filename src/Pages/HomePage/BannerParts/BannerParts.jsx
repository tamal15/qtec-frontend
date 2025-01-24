const BannerParts = () => {
    return (
      <div style={{background:"linear-gradient(to bottom, #01c0c9, #01c0c9, #007cde)"}} className=" text-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section: Text and Search Bar */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mt-16 mb-4">#1 Community-Backed Product Success</h1>
            <p className="text-lg sm:text-xl font-medium mb-8">From People Like You</p>
  
            {/* Search Bar */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search for a Category or Product"
                className="w-full px-6 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="absolute right-1 top-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.9-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Right Section: Illustration */}
          <div className="flex justify-center items-center relative">
            {/* Background Elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#01c0c9] rounded-full blur-2xl opacity-30"></div>
  
            {/* Image */}
            <img
              src="https://i.ibb.co.com/4KpcbnT/component-it.webp"
              alt="Illustration"
              className="w-full h-[430px] max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default BannerParts;