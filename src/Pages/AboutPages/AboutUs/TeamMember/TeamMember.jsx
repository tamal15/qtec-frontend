import { useEffect, useState } from "react";

const TeamMember = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getaboutteam`
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
    <section className="py-12 mb-20">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-red-500">Our Key Members</h2>
        <div className="mt-1 h-1 bg-blue-400 w-16 mx-auto"></div>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
        {data?.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            {/* Circular Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h3 className="mt-4 text-lg font-medium text-gray-800">
              {member.name}
            </h3>
            {/* Role */}
            <p className="mt-2 text-sm text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
