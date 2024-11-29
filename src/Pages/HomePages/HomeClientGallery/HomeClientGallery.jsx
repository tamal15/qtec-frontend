// Import React and necessary dependencies
import { useState } from "react";

// Example logo data organized by category
const clientData = {
  construction: [
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_01.jpg", name: "Saudi Binladin Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_02.jpg", name: "Modern Building Leaders" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_03.jpg", name: "Nesma & Partners" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "Al Bawani" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_10.jpg", name: "Al Seif" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_02.jpg", name: "Alfanar" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_03.jpg", name: "Saudi Binladin Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_02.jpg", name: "Saudi Binladin Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_03.jpg", name: "Saudi Binladin Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_01.jpg", name: "Saudi Binladin Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_02.jpg", name: "Modern Building Leaders" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_03.jpg", name: "Nesma & Partners" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "Al Bawani" },
    // Add more items if needed
  ],
  qsr: [
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "QSR Company 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_11.jpg", name: "QSR Company 2" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "QSR Company 3" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_15.jpg", name: "QSR Company 4" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "QSR Company 5" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "QSR Company 6" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_15.jpg", name: "QSR Company 7" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "QSR Company 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_11.jpg", name: "QSR Company 2" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "QSR Company 3" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_15.jpg", name: "QSR Company 4" },
    // Add more items if needed
  ],
  hospitality: [
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_11.jpg", name: "Hospitality Group 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "Airline Company 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "Entertainment Co." },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_13.jpg", name: "Retail Group" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_11.jpg", name: "Healthcare Company" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "Hotel Group 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "Airline Company 2" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_11.jpg", name: "Hospitality Group 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_05.jpg", name: "Airline Company 1" },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_04.jpg", name: "Entertainment Co." },
    { logoUrl: "https://soundlinesgroup.com/wp-content/uploads/2023/05/QSR-RESTAURANT_13.jpg", name: "Retail Group" },
    // Add more items if needed
  ],
};

const HomeClientGallery = () => {
  const [activeCategory, setActiveCategory] = useState("construction");

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          <span className="text-red-600">06</span> / Clients
        </h2>

        {/* Categories / Tabs */}
        <div className="flex flex-col md:flex-row justify-center space-x-4 text-gray-600 mb-8 text-sm">
          <button
            className={` py-2 ${activeCategory === "construction" ? "text-black font-semibold" : ""}`}
            onClick={() => setActiveCategory("construction")}
          >
            CONSTRUCTION / MEP
          </button>
          <button
  className={`-me-20 py-2 text-sm md:text-base lg:text-lg break-words md:whitespace-nowrap lg:whitespace-nowrap ${activeCategory === "qsr" ? "text-black font-semibold" : ""}`}
  onClick={() => setActiveCategory("qsr")}
>
  QSR/RESTAURANT/CAFE/SWEET/CATERING/FMCG
</button>
<button
  className={`py-2 text-sm md:text-base lg:text-lg break-words md:whitespace-nowrap lg:whitespace-nowrap ${activeCategory === "hospitality" ? "text-black font-semibold" : ""}`}
  onClick={() => setActiveCategory("hospitality")}
>
  HOSPITALITY/AIRLINES/ENTERTAINMENT/RETAIL/HEALTHCARE
</button>


        </div>

        {/* Logo Grid - Displaying 7 columns on large screens */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
          {clientData[activeCategory].map((client, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm flex items-center justify-center h-28 "
            >
              <img src={client.logoUrl} alt={client.name} className="max-w-36 h-24" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="mt-8 px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
          to view more &rarr;
        </button>
      </div>
    </section>
  );
};

export default HomeClientGallery;
