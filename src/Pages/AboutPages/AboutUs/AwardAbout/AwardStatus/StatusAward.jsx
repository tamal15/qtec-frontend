
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StatusAward = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getawardstatus`
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  

 

  return (
    <>
      {loading || (
        <section>
       
          <div className="container mx-auto px-4 sm:px-8 overflow-x-scroll">
            <div className="py-8">
              <div className="flex items-center gap-5 my-5">
                <h2 className="text-lg md:text-2xl font-semibold leading-tight">
                  Award Features Part
                </h2>
              </div>
              <div className="min-w-[400px] md:min-w-[650px]">
                <div className="flex flexcol md:flex-row gap2 md:gap-0 items-center justify-around bg[#F3F4F6] py-3 my-3 rounded-md">
                
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    Title
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    number
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    title2
                    </p>  
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    number2
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    title3
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    number3
                    </p>
                  </div>
                 
                  
                  <p className="w-[32%] text-white flex justify-center">
                    <p className="w-max text-center px-3 py-1 rounded-full font-semibold bg-primary">
                      Action
                    </p>
                  </p>
                </div>
              
                  <div className="">
                  <div
                    
                    className="flex flexcol md:flex-row items-center justify-around shadow shadow-[#007cde] py-3 my-3 rounded-md min-w-[900px] md:min-w-[850px]"
                  >
                    
                  
                    
                    <p className="w-[32%] text-center">
                      {data[0]?.title1}
                    </p>
                   
                    <p className="w-[32%] text-center">
                      {data[0]?.number1}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.title2}
                    </p>
                    <p className="w-[22%] text-center">
                      {data[0]?.number2}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.title3}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.number3}
                    </p>
                   
                  
                    <div className="w-[62%] flex items-center justify-center">
                      <NavLink
                        to={`/dashboard/editawardsstatus/${data[0]?._id}`}
                        style={{
                          textDecoration: "none",
                          marginRight: "-10px",
                        }}
                      >
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#01c0c9] text-white text-xl duration-300 active:scale-90">
                          <FaPencilAlt />
                        </button>
                      </NavLink>
                     
                    </div>
                  </div>
                  </div>
              
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StatusAward;
