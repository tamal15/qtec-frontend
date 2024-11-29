import { useEffect, useState } from "react";

const MediaBanner = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/geteventmedia`
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
      <div className="relative w-full h-[85vh] bg-black"> {/* Medium Height */}
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src={data[0]?.media}
        />
  
        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl md:text-5xl font-bold">{data[0]?.title}</h1>
        </div>
      </div>
    );
  };
  
  export default MediaBanner;
  