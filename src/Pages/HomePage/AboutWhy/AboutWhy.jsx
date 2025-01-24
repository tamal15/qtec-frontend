import { useState, useRef, useEffect } from 'react';

const AboutWhy = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data] = useState([
    {
      title: "ONE-STOP SOLUTION",
      description: "Providing a comprehensive range of services tailored to client needs."
    },
    {
      title: "TRACK RECORD",
      description: "Proven history of successful projects across various industries."
    },
    {
      title: "GLOBAL SERVICE REACH",
      description: "Extending services worldwide with localized expertise."
    },
    {
      title: "EXCELLENCE",
      description: "Commitment to delivering top-quality service that exceeds client expectations."
    },
    {
      title: "EXTENSIVE WORLDWIDE NETWORK",
      description: "Connected through a robust global network of partners and professionals."
    },
    {
      title: "A STRATEGIC PARTNERSHIP",
      description: "Dedicated to fostering long-term, mutually beneficial partnerships."
    }
  ]);
  const contentRefs = useRef([]);

  // Calculate the height of content for smooth animation
  const [heights, setHeights] = useState([]);
  useEffect(() => {
    const contentHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(contentHeights);
  }, [data]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      <h2 className="text-3xl font-light mb-4 border-b-2 pb-2 inline-block">
        Why Us?
      </h2>
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

export default AboutWhy;
