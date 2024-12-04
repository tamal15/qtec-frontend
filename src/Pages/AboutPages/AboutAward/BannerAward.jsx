import { useEffect, useState } from "react";

const BannerAward = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getawardbannerss`
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
    <div className="relative w-full h-screen bg-black">
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
        <h1 className="text-white text-4xl md:text-6xl font-bold">{data[0]?.title}</h1>
      </div>
    </div>
  );
};

export default BannerAward;
