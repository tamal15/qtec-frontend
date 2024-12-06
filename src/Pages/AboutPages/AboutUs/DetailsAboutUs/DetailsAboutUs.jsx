import { useEffect, useState } from "react";

const DetailsAboutUs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getdetailssaboutpart`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(data)
    return (
      <div className="container mx-auto p-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">About us</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-4"></div>
        </div>
  
        {/* Content Section */}
        <div className="text-gray-700">
          <p className="mb-4">
           {data[0]?.text} <span className="text-red-500 font-semibold">{data[0]?.highlightedText1}</span>.
          </p>
          <p className="mb-6">
          {data[0]?.text}r <span className="text-red-500 font-semibold">
            </span>, {data[0]?.highlightedText2}
          </p>
  
          {/* List Section */}
          <h3 className="font-semibold mb-3">{data[0]?.listTitle}</h3>
          <ol className="list-decimal ml-6">
          {data[0]?.list?.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ol>
        </div>
      </div>
    );
  };
  
  export default DetailsAboutUs;
  