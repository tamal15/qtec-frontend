import { useEffect, useState } from "react";

const TestimonialGroup = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/gettestimonialgroup`
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
    <section className="py-12 bg-gray-50">
      <div className="space-y-12 px-6 md:px-12 lg:px-24">
        {data.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              testimonial.reverse ? "lg:flex-row-reverse" : ""
            } items-center gap-8 p-6 bg-white rounded-xl shadow-lg shadow-gray-200`}
          >
            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                {testimonial.title}
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                {testimonial.description}
              </p>
            </div>
            {/* Logo Section */}
            <div className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg p-6 bg-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.title}
                className="object-contain w-full h-full max-h-32"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGroup;
