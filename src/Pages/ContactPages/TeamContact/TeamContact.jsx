import { useEffect, useState } from "react";

const TeamContact = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getcontactteam`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
    // const teamData = [
    //   {
    //     name: "Sanjay Devkota",
    //     country: "Nepal",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/img47.jpg",
    //   },
    //   {
    //     name: "Altaaf Ahmad Warsi",
    //     country: "Bangladesh",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Untitled-design-18.jpg",
    //   },
    //   {
    //     name: "Erwin R. Relox",
    //     country: "Philippines",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Erwin-R.-Relox-Philippines.jpg",
    //   },
    //   {
    //     name: "Hemant Sapumohotti",
    //     country: "Sri Lanka",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Erwin-R.-Relox-Philippines.jpg",
    //   },
    //   {
    //     name: "Winnie Banura",
    //     country: "Uganda",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Erwin-R.-Relox-Philippines.jpg",
    //   },
    //   {
    //     name: "Thomas Kwodwo Kyci",
    //     country: "Ghana",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Erwin-R.-Relox-Philippines.jpg",
    //   },
    //   {
    //     name: "Waleed Abdeen",
    //     country: "Egypt",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Erwin-R.-Relox-Philippines.jpg",
    //   },
    //   {
    //     name: "Esther Kamau",
    //     country: "Kenya",
    //     flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    //     email: "marketing@soundlinesgroup.com",
    //     image: "https://soundlinesgroup.com/wp-content/uploads/2022/12/Mr.-Hemantha-Sapumohotti-sri-lanka.jpg",
    //   },
    // ];
  
    return (
      <div className="min-h-screen py-10 mb-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20">
          <h2 className="text-center text-4xl font-bold text-gray-700 mb-10">Team Contacts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data?.map((teamMember, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md p-6 text-center"
              >
                {/* Member Image */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-300 mb-4 flex items-center justify-center">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Member Details */}
                <h3 className="text-lg font-semibold text-gray-800">{teamMember.name}</h3>
                <div className="flex items-center justify-center space-x-2 my-2">
                  <img
                    src={teamMember.flag}
                    alt={teamMember.country}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm text-gray-600">{teamMember.country}</span>
                </div>
                <p className="text-sm text-gray-500 -ms-3">{teamMember.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamContact;
  