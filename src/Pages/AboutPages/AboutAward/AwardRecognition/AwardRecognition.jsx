import { useEffect, useState } from "react";


const quote = {
  text: "Excellence is never an accident; it is the result of high intention, sincere effort, intelligent direction, skillful execution, and the vision to see obstacles as opportunities.",
};

const AwardRecognition = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getawardcard`
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
    <div className="container mx-auto p-6 space-y-16">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col lg:flex-row items-center lg:space-x-8 ${
            item.alignText === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.altText}
            className="w-full lg:w-[500px] h-[300px] mb-4 lg:mb-0 rounded-lg shadow-md"
          />
          <div
            className={`flex flex-col items-center text-center lg:items-${
              item.alignText === "right" ? "end" : "start"
            } lg:text-${item.alignText} lg:w-1/2 space-y-2 `}
          >
            <p
              className="text-gray-600 text-lg font-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "28px",
                fontWeight: 200,
                lineHeight: "37px",
                letterSpacing: "5.1px",
              }}
            >
              {item.title}
            </p>
            <div className="h-px w-24 bg-red-500"></div>
          </div>
        </div>
      ))}

      <div className="bg-gray-100 py-12 rounded-lg shadow-md">
        <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
          <div className="text-5xl text-blue-400 mb-4">“</div>
          <blockquote className="italic text-gray-500 text-lg mx-auto">
            {quote.text}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AwardRecognition;
