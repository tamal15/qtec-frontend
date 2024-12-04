import { useEffect, useState } from "react";

const HomeAbout = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/gethomeabout`
        );
        const result = await response.json();
        setDatas(result);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Left side - Text Section */}
        <div className="max-w-lg flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold">
            <span className="text-red-600">01</span> / ABOUT US
          </h1>
          <p style={{fontFamily:"Montserrat, Sans-serif"}} className="text-gray-700 mt-6 text-xl leading-relaxed">
            {datas[0]?.description}
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition">
            READ MORE »
          </button>
        </div>

        {/* Right side - Stats Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-12 flex-1">
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold"> {datas[0]?.numberYear}</p>
            <p className="text-gray-600 mt-2 text-2xl">{datas[0]?.yearTitle}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold">{datas[0]?.numberLocation}</p>
            <p className="text-gray-600 mt-2 text-2xl">{datas[0]?.locationTitle}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold">{datas[0]?.numberClient}</p>
            <p className="text-gray-600 mt-2 text-2xl">{datas[0]?.clientTitle}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold">{datas[0]?.numberCandidate}</p>
            <p className="text-gray-600 mt-2 text-2xl">{datas[0]?.candidateTitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
