import { useEffect, useState } from "react";



const Services = () => {

  const [homeservice, setHomeservice] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/gethomeservice`
        );
        const result = await response.json();
        setHomeservice(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading services...</div>;
  }

  // Check if data is properly fetched
  if (!homeservice) {
    return <div className="text-center text-red-500">No data available.</div>;
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage:`url(${homeservice[0]?.backgroundImage || ''})`, // Replace with the path to your image
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10 z-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
          {homeservice?.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div> {/* Replace with actual icon if needed */}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
