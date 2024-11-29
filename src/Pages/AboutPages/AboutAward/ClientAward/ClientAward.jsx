
// Updated data with actual image URLs
const awardsData = [
  {
    region: "KSA",
    awards: [
      {
        title: "Mando",
        description: "Mando Giving Award to Soundlines Group for Excellent Service",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
      {
        title: "Seder Group",
        description: "Seder Group Giving Award to Soundlines Group for Efficient Work",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png" // Replace with actual image paths
      },
      {
        title: "Little Caesars",
        description: "Little Caesars Giving Award to Soundlines Group for Timely Commitments",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
    ],
  },
  {
    region: "Qatar",
    awards: [
      {
        title: "Abdulrahman Abdulaziz Al Thani Business Services",
        description: "Award for Timely Commitments",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
      {
        title: "Al Bader Construction and Steel Works WLL",
        description: "Award for Excellent Service",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
      {
        title: "Almufath Group",
        description: "Award for On-Time Manpower Recruitment",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
    ],
  },
  {
    region: "UAE",
    awards: [
      {
        title: "Closaill",
        description: "Award for Excellent Service",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
      {
        title: "Control & Applications",
        description: "Award for Efficient Work",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
      {
        title: "Sia Landscaping",
        description: "Award for Timely Deployment",
        image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-40.png"
      },
    ],
  },
];

const ClientAward = () => {
  return (
    <div className="container mx-auto p-6">
      {awardsData.map((regionData, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Awards from clients ({regionData.region})
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regionData.awards.map((award, idx) => (
              <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border"
            >
              <div className="overflow-hidden rounded-md mb-4 w-full h-64">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg">{award.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{award.description}</p>
            </div>
            
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
              VIEW MORE ➔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientAward;
