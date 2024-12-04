import { useEffect, useState } from "react";

  
const EventCareBanner = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/geteventwecare`
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
      <div
        className="relative w-full h-[300px] md:h-[300px] lg:h-[380px] bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `url(${data[0]?.image})`,
        }}
      >
        {/* Overlay for a darker effect over the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Centered Text */}
        <div className="relative z-10 text-white text-center px-4 mt-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{data[0]?.title}</h1>
        </div>
      </div>
    );
  };
  
  export default EventCareBanner;
  