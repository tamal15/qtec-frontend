import { useState, useEffect } from "react";

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://servers.sellflit.com/getbannerdata`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [data.length]);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto h-64 mb-4">
      {/* Slider Content */}
      <div className="w-full h-full flex items-center justify-center relative">
        {data.length > 0 && (
          <>
            <img
              src={data[currentSlide].image}
              alt={data[currentSlide].title}
              className="h-64 object-cover rounded"
              style={{ width: "95%", marginRight: "5%" }} // Add controlled gap
            />
            <div className="absolute bottom-10 bg-gray-900 bg-opacity-70 text-white p-2 rounded text-center">
              {/* {data[currentSlide].title} */}
            </div>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
