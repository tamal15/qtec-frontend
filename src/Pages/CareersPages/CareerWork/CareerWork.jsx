import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CareerWork = () => {
  // Sample job data
  // const jobs = [
  //   {
  //     title: 'WE ARE HIRING For Precast Factory in leading Fire Saudi Arabia',
  //     description: 'CLIENT INTERVIEW: Mumbai, Chennai, Baroda',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2024/01/For-Precast-Factory-In-Saudi-Arabia-08.11.2024-240x300.jpg', // Replace with actual image paths
  //   },
  //   {
  //     title: 'WE ARE HIRING For Azizi group of company for their MEP division in Dubai',
  //     description: 'CLIENT INTERVIEW SOON',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2024/01/For-a-leading-Azizi-group-of-company-for-their-MEP-09.11.2024-240x300.jpg',
  //   },
  //   {
  //     title: 'WE ARE HIRING For an Oil & Gas pipeline project in Saudi Arabia',
  //     description: 'CLIENT INTERVIEW SHORTLY',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2024/01/For-an-Oil-Gas-pipeline-project-in-Saudi-Arabia-02-12.11.2024-240x300.jpg',
  //   },
  //   {
  //     title: 'WE ARE HIRING For an Oil & Gas pipeline project in Saudi Arabia',
  //     description: 'CLIENT INTERVIEW SHORTLY',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2022/12/For-an-Oil-Gas-pipeline-project-in-Saudi-Arabia-12.11.2024-240x300.jpg',
  //   },
  //   {
  //     title: 'WE ARE HIRING For a Leading Facility Maintenance & Catering company',
  //     description: 'AVAILABLE POSITIONS',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2022/12/Leading-facility-maintenance-Catering-company-12.11.2024.jpg',
  //   },
  //   {
  //     title: 'WE ARE HIRING Leading Oil & Gas Maintenance Company for  KOC Project in Kuwait',
  //     description: 'CLIENT INTERVIEW',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2022/12/Leading-facility-maintenance-Catering-company-12.11.2024.jpg',
  //   },
  //   {
  //     title: 'URGENTLY REQUIRED For a Leading Fire Fighting Company in Qatar',
  //     description: 'POSITIONS AVAILABLE',
  //     moreInfo: 'Read More »',
  //     image: 'https://soundlinesgroup.com/wp-content/uploads/2022/12/Leading-facility-maintenance-Catering-company-12.11.2024.jpg',
  //   },
  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getcareerwork`
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
    <div className="px-4 py-8 ">
      <h1 className="text-center text-4xl font-bold mb-4">
        Find International work opportunities around the globe
      </h1>
      <p className="text-center mb-6 text-lg font-medium">
        Find your fit from the current international employment opportunities for blue-collar & white-collar job seekers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((job, index) => (
            <Link
            to={`/careerDetails/${job._id}`}
            key={index}
            className="block hover:shadow-lg transition-shadow duration-300"
          >
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
           <div
  className="h-64 bg-gray-300 mb-4 rounded overflow-hidden transform transition duration-300 hover:scale-105"
  style={{
    backgroundImage: `url(${job.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>

            <h3 className="text-lg font-semibold text-gray-500">{job.title}</h3>
            {/* <p className="text-sm text-gray-700">{job.description}</p> */}
            <a href="#" className="text-blue-500 mt-2 inline-block">Read More »</a>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerWork;
