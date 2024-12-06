import { useEffect, useState } from "react";

const AddressContact = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getcontactaddresspart`
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
      <div className="min-h-screen py-10 ">
        <div className="container mx-auto px-6">
          {data?.map((country, index) => (
            <div key={index} className="mb-10">
              {/* Country Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={country.flag}
                  alt={`${country.country} Flag`}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <h2 className="text-2xl font-bold text-gray-700">{country.country}</h2>
              </div>
  
              {/* City Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {country.cities.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{city.name}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> {city.email}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Phone:</strong> {city.phone}
                    </p>
                    {city.mobile && (
                      <p className="text-gray-600 mb-2">
                        <strong>Mobile:</strong> {city.mobile}
                      </p>
                    )}
                    <p className="text-gray-600">
                      <strong>Address:</strong> {city.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AddressContact;
  