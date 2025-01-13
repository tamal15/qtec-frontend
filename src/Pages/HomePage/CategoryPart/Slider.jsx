import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://c8.alamy.com/comp/2B1TY57/mobile-phone-smartphone-evolution-concept-flat-style-illustration-the-history-of-gadget-trends-change-cellphone-fashion-and-design-telecommunicat-2B1TY57.jpg",
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/01/historia-moviles-origen-actualidad-2923544.jpg?tf=1200x",
    "https://media.istockphoto.com/id/1218516699/photo/old-and-obsoleted-cellphones-on-a-black-background.jpg?s=612x612&w=is&k=20&c=ADOAnlsLD8enA0pzXwCEw4M4yct5MU7D3Fu4SlT8JFI=",
    "https://img.freepik.com/free-photo/nightlife-people-dancing-club-holding-smartphones-up_23-2149052681.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto h-64 mb-4">
      {/* Slider Images */}
      <div className="w-full h-full flex items-center justify-center relative">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="h-64 object-cover rounded"
          style={{ width: "95%", marginRight: "5%" }} // Add controlled gap
        />
      </div>

      {/* Previous Button */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
      >
        &#9664;
      </button> */}

      {/* Next Button */}
      {/* <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
      >
        &#9654;
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
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
