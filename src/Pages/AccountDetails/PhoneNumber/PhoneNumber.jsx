import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { FcSmartphoneTablet } from "react-icons/fc";

const PhoneNumber = () => {
  const { user } = useAuth();
  const userPhone = user?.phoneNumber; // Ensure phone is correctly retrieved

  const [phoneNumber, setPhoneNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User Phone:", userPhone); // Debugging Step 1

    const fetchPhoneNumber = async () => {
      if (!userPhone) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get("https://servers.sellflit.com/getuserdats", {
          params: { phone: userPhone }, // Ensure API receives correct phone
        });

        console.log("API Response:", response.data); // Debugging Step 2

        if (response.data && response.data.phoneNumber) {
          setPhoneNumber(response.data.phoneNumber); // Fix accessing phoneNumber
        } else {
          setPhoneNumber("Not Found");
        }
      } catch (error) {
        console.error("Error fetching phone number:", error);
        setPhoneNumber("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchPhoneNumber();
  }, [userPhone]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="w-full p-4 -mt-20 flex flex-col md:flex-row gap-10">
        <div className="mt-56 md:mt-0">
          <img
            className="w-[420px] h-[300px]"
            src="https://zilbablifestyle.com/wp-content/uploads/2024/05/Contact-us.gif"
            alt="Contact Us"
          />
        </div>

        <div>
          <h1 className="text-3xl font-medium mb-5 md:mt-20">Phone Number</h1>
          <div className="border rounded-lg shadow-sm p-4 bg-white flex">
            <FcSmartphoneTablet className="text-4xl" />
            <h3 className="text-2xl ms-4 font-bold text-blue-600">
              {phoneNumber}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
