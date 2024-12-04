import { useEffect, useState } from "react";



const BoardMember = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getaboutboardmember`
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
    <div className="max-w-7xl mx-auto p-6 mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-red-500 italic">Our experts</h2>
        <h1 className="text-4xl font-light mb-2">Board Members</h1>
        <hr className="w-24 mx-auto border-t-2 border-blue-400" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMember;
