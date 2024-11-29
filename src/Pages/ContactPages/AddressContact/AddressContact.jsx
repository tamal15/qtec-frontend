const AddressContact = () => {
    const contactData = [
      {
        country: "India",
        flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // Replace with your flag URL
        cities: [
          {
            name: "Mumbai",
            email: "marketing@soundlinesgroup.com",
            phone: "+91 22 6628 5500",
            mobile: "+91 9819 012 133",
            address: "404 Kamal Mansion, Haji N.A. Azmi Marg, Colaba, Mumbai - 400 005, India.",
          },
          {
            name: "Delhi",
            email: "marketing@soundlinesgroup.com",
            phone: "+91 22 6628 5500",
            address: "2nd Floor, Building No: 21, Taimoor Nagar, New Friends Colony, New Delhi-110025.",
          },
        ],
      },
      {
        country: "KSA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
        cities: [
          {
            name: "Riyadh",
            email: "ksa@soundlinesgroup.com",
            phone: "+966 11 455 7000",
            address: "2nd Floor, M. Alkhraif, Above Jarir Book Store, PO Box: 27734, Riyadh, KSA.",
          },
          {
            name: "Dammam",
            email: "dammam@soundlinesgroup.com",
            phone: "+966 13 833 7000",
            address: "Office # 101, Raza Alkhair Center Building, Near SABIC Building, Alkhobar.",
          },
          {
            name: "Jeddah",
            email: "jeddah@soundlinesgroup.com",
            phone: "+966 12 667 5520",
            address: "Soundlines Group 7th floor, Dalil Tower, Palestine, Al Rehab, Jeddah 21531.",
          },
        ],
      },
      {
        country: "UAE",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
        cities: [
          {
            name: "Dubai",
            email: "marketing@soundlinesgroup.com",
            phone: "+971 4 450 8990",
            address: "7th Floor, Office No. 707, Sheikh Zayed Road, Dubai (UAE).",
          },
          {
            name: "Abu Dhabi",
            email: "marketing@soundlinesgroup.com",
            phone: "+971 2 622 7888",
            address: "Sheikh Rashid Building, Al Moroor Road, Abu Dhabi (UAE).",
          },
        ],
      },
      {
        country: "Bahrain",
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
        cities: [
          {
            name: "Bahrain",
            email: "bahrain@soundlinesgroup.com",
            phone: "+973 17 266 777",
            address: "Office # 214, Building 1461, Block 1230, PO Box: 721, Kingdom of Bahrain.",
          },
        ],
      },
    ];
  
    return (
      <div className="min-h-screen py-10 ">
        <div className="container mx-auto px-6">
          {contactData.map((country, index) => (
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
  