import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { FcSmartphoneTablet } from "react-icons/fc";

const PhoneNumber = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [firstPhoneNumber, setFirstPhoneNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirstPhoneNumber = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/addsproducts", {
          params: { email: userEmail },
        });
        if (response.data && response.data.length > 0) {
          // Assuming the phone number is within the first product
          setFirstPhoneNumber(response.data[0].phone);
        } else {
          setFirstPhoneNumber(null);
        }
      } catch (error) {
        console.error("Error fetching phone number:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchFirstPhoneNumber();
    }
  }, [userEmail]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="w-full">
      {!firstPhoneNumber ? (
        <div className="flex flex-col items-center justify-center h-full p-4">
          {/* Image with red slash */}
          <div className="relative mb-4">
            <FcSmartphoneTablet className="text-8xl" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="h-[2px] w-full bg-red-500 rotate-45 origin-center"></div>
            </div>
          </div>

          {/* Text content */}
          <h2 className="text-3xl font-bold">Phone Numbers</h2>
          <p className="text-xl font-bold text-center mt-2">
            There are currently no phone numbers associated with your account.
          </p>
          <p className="text-lg text-center mt-2">
            Phone numbers are unique to your account and will be collected while
            you are posting ads or ordering products on Bikroy.
          </p>
        </div>
      ) : (
        <div className="w-full p-4 -mt-20 flex flex-col md:flex-row gap-10">
            <div className="mt-56 md:mt-0">
            <img className="w-[420px] h-[300px]"  src="https://zilbablifestyle.com/wp-content/uploads/2024/05/Contact-us.gif"/>
            </div>
            
            <div>
            <h1 className="text-3xl font-medium mb-5 md:mt-20">Phone Number</h1>    
          <div className="border rounded-lg shadow-sm p-4 bg-white flex">
          <FcSmartphoneTablet className="text-4xl" />
            <h3 className="text-2xl ms-4 font-bold text-blue-600 ">{firstPhoneNumber}</h3>
          </div>
            </div>
          
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
