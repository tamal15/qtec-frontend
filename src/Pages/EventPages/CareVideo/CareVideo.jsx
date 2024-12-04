import { useEffect, useState } from "react";

const CareVideo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/geteventvideo`
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
    <div className="bg-white py-5 px-4 mb-24">
      <h2 className="text-center text-5xl  text-black mb-12 font-bold">We Care</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((video, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <video
              src={video.videoSrc}
              controls
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareVideo;
