import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const jobs = [
//   {
//     title: "WE ARE HIRING For a leading Support Services Company for their Oil & Gas projects in Qatar",
//     description: "Read More »",
//     image: "https://soundlinesgroup.com/wp-content/uploads/2023/03/For-a-leading-support-services-company-for-their-Oil-Gas-projects-in-Qatar-07.11.2024-768x1086.jpg", // Replace with your image URL
//     status: "SHORTLISTING IN PROGRESS",
//   },
//   {
//     title: "WE ARE HIRING For a leading Facility Maintenance & Catering Company in Qatar Computer Operator ",
//     description: "Read More »",
//     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/For-a-Leading-Facility-maintenance-Catering-company-12.11.2024-1024x1024.jpg", // Replace with your image URL
//     status: "CLIENT INTERVIEW",
//   },
//   {
//     title: "WE ARE HIRING For a Reputed company Electrical Technician and Catering Company  in Qatar",
//     description: "Read More »",
//     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/For-a-Reputed-company-in-Qatar-14.11.jpg", // Replace with your image URL
//     status: "BY SELECTION / FOLLOWED BY CLIENT INTERVIEW",
//   },
//   {
//     title: "WE ARE HIRING For Interiors Construction Project Electrical Technician and Catering Company in KSA",
//     description: "Read More »",
//     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/For-Interiors-Construction-Project_08.11-1.jpg", // Replace with your image URL
//     status: "ATTACHED SUMMARY / EVOLUTION OF ONLINE INTERVIEW",
//   },
//   // Add more job objects with relevant data
// ];

const CareerGlobal = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getcareerglobal`
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
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h2 className="text-center text-4xl font-bold mb-4">Shape the global mobility landscape</h2>
      <p className="text-center mb-8 text-lg font-medium">
        Our world would be better if you could see past obstacles and go straight to solutions. Explore jobs to determine what we can achieve collectively.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((job, index) => (
          <Link
          to={`/globalcareerDetails/${job._id}`}
          key={index}
          className="block hover:shadow-lg transition-shadow duration-300"
        >
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
          >
            <div
              className="h-72 bg-gray-300"
              style={{
                backgroundImage: `url(${job.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-600">{job.title}</h3>
              <p className="text-lg mb-4 text-blue-500 mt-2 inline-block">Read More »</p>
              {/* <p className="text-xs font-bold text-red-600">{job.status}</p> */}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerGlobal;
