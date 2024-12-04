
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ManagementService = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getservicemanagement`
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
       

          {/* 2nd part start  */}

          <div className="container mx-auto px-4 sm:px-8 overflow-x-scroll">
            <div className="py-8">
              <div className="flex items-center gap-5 my-5">
                <h2 className="text-lg md:text-2xl font-semibold leading-tight">
                  Service Admin Part
                </h2>
                {/* <AddAward /> */}
              </div>
              <div className="min-w-[400px] md:min-w-[650px]">
                <div className="flex flexcol md:flex-row gap2 md:gap-0 items-center justify-around bg[#F3F4F6] py-3 my-3 rounded-md">
                  <div className="w-[32%] -ms-2">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                       title
                    </p>
                  </div>
                  <div className="w-[32%] -ms-2">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                       Description
                    </p>
                  </div>
                 
                  <div className="w-[32%] ms-5">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    image
                    </p>
                  </div>
                  <p className="w-[32%] text-[#007cde] flex justify-center">
                    <p className="bg-[#007cde] md:w-[30%] w-[50%] text-center text-white px-3 py-1 rounded-full font-semibold">
                      Action
                    </p>
                  </p>
                </div>
                {data?.map((d, i) => (
                  <div
                    key={i}
                    className="flex flexcol md:flex-row items-center justify-around shadow shadow-[#007cde] py-3 my-3 rounded-md"
                  >
                    
                    <p className="w-[32%] text-center">
                      {d.title}
                    </p>
                    <p className="w-[32%] text-center">
                      {d.description}
                    </p>
                   
                   

                    
      <div className="w-[32%] flex items-center justify-center -ms-6">
        <img 
          className="h-24 w-24" 
          src={d?.image} 
          alt="Banner" 
        />
      </div>
    
                  
                    <div className="w-[32%] flex items-center justify-center">
                      <NavLink
                        to={`/dashboard/editservicemanagement/${d._id}`}
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
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ManagementService;
