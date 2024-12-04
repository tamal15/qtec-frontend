import { useState, useEffect } from 'react';

const Banner = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://webi-bacend.onrender.com/getbanner`);
        const result = await response.json();
        setData(result); // Store the fetched banners
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching banners:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No banners available.</p>
      </div>
    );
  }

  const { media, type, heading, description, buttonText } = data[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Media */}
      {type === 'video' ? (
        <video
          src={media}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-36">{heading}</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">{description}</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out">
          {buttonText}
        </button>
      </div>

      {/* Previous Slide Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Slide Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
