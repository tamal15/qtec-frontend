// Import React and any necessary dependencies

import { useEffect, useState } from "react";

// Example testimonial data
// const testimonials = [
//     {
//       logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/01/1-300x169.jpg", // Replace with actual logo image path
//       text: "SBG is pleased to have an admirable Business partner like 'Soundlines HR Consultancy' and wish them all the success in their future endeavors.",
//       company: "SAUDI BINLADIN GROUP",
//     },
//     {
//       logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/01/2-300x169.jpg", // Replace with actual logo image path
//       text: "Soundlines has the ability to follow cases for all their deployed candidates in all the regions so that they can solve problems and social issues.",
//       company: "NADEC",
//     },
//     {
//       logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/01/3-300x169.jpg", // Replace with actual logo image path
//       text: "We look forward to working with Soundlines in the years ahead and would not hesitate in recommending their name to any organization.",
//       company: "ALFANAR",
//     },
//     {
//       logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/01/4-300x169.jpg", // Replace with actual logo image path
//       text: "Soundlines Group deserves this testimonial, and we are very happy to provide it. Our relationship will also continue to grow and provide mutually beneficial outcomes.",
//       company: "TARWEEJ",
//     },
//   ];
  
  const HomeTestimonial = () => {

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            `http://localhost:5000/gethometestimonial`
          );
          const result = await response.json();
          setData(result);
          // setLoading(false);
        } catch (error) {
          console.error(error);
          // setLoading(false);
        }
      }
      fetchData();
    }, []);
    return (
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Side - Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">05</span> / CLIENT TESTIMONIALS
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Soundlines acts as a strategic overseas recruitment partner for clients by offering a complete workforce solution to find and supply the human resources needed to complete projects effectively. Our geographical reach and talent pool are unrivalled in the international manpower supply industry, with over 1000+ employees in over 24 offices worldwide and a candidate database with several thousands of profiles.
            </p>
            <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
              All Testimonials &rarr;
            </button>
          </div>
  
          {/* Right Side - Testimonial Cards */}
          <div className="lg:w-1/2 grid gap-6 grid-cols-1 md:grid-cols-2">
            {data.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center "
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.company}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <p className="text-gray-300 text-sm mb-4">{testimonial.text}</p>
                <h3 className="text-lg font-semibold text-white">{testimonial.company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeTestimonial;
  