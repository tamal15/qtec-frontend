import { useState, useRef, useEffect } from 'react';

const AboutWhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  // Fetch the data from the API
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://webi-bacend.onrender.com/getaboutwhyus');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
        setError('Failed to load data. Please try again later.');
      }
    }
    fetchData();
  }, []);

  // Calculate the height of content for smooth animation
  useEffect(() => {
    const contentHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(contentHeights);
  }, [data]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-light mb-4 border-b-2 pb-2 inline-block">
        Why Us?
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-3 flex justify-between items-center hover:text-red-500"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-medium">{item?.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: activeIndex === index ? `${heights[index]}px` : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out',
              }}
              className="text-gray-600"
            >
              <div className="py-2">
                <p>{item?.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading content...</p>
      )}
    </div>
  );
};

export default AboutWhyUs;
