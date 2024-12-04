import { useEffect, useState } from "react";

const AwardStatus = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getawardstatus`
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
      className="relative flex items-center justify-center bg-cover bg-center h-[400px] md:h-[400px] bg-fixed"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg')`, // Replace with actual image URL or path
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 flex justify-around w-full max-w-5xl text-center text-white px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-red-500">{data[0]?.number1}</h2>
          <p className="text-lg md:text-xl">{data[0]?.title1}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-red-500">{data[0]?.number2}</h2>
          <p className="text-lg md:text-xl">{data[0]?.title2}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-red-500">{data[0]?.number3}</h2>
          <p className="text-lg md:text-xl">{data[0]?.title3}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardStatus;
