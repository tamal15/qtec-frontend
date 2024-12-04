import { useEffect, useState } from "react";


  const MediaGallery = () => {

    const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getmediagallery`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
    return (
      <div className="min-h-screen py-10  mb-20">
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-10">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {data?.map((image, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={image?.image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MediaGallery;
  