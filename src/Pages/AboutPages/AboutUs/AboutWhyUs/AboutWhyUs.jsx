import { useState, useRef, useEffect } from 'react';

const AboutWhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  // Calculate the height of content for smooth animation
  useEffect(() => {
    const contentHeights = contentRefs.current.reduce((acc, el, index) => {
      if (el) {
        acc[index] = el.scrollHeight;
      }
      return acc;
    }, {});
    setHeights(contentHeights);
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { title: 'ONE-STOP SOLUTION', description: 'Wide range of Services, beyond HR & consultancy. Our services enable our clients to focus on their business growth.' },
    { title: 'TRACK RECORD', description: 'Proven success and experience in delivering exceptional services for clients across various sectors.' },
    { title: 'GLOBAL SERVICE REACH', description: 'Comprehensive services that span multiple countries to meet diverse client needs.' },
    { title: 'EXCELLENCE', description: 'Commitment to delivering top-quality service that exceeds client expectations.' },
    { title: 'EXTENSIVE WORLDWIDE NETWORK', description: 'A strong global network that connects resources and expertise efficiently.' },
    { title: 'A STRATEGIC PARTNERSHIP', description: 'Building long-term, mutually beneficial partnerships with our clients.' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-light mb-4 border-b-2 pb-2 inline-block">
        Why Us?
      </h2>
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left py-3 flex justify-between items-center hover:text-red-500"
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
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
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutWhyUs;
