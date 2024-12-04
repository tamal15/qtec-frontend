
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const EventMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/geteventmedia`
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
                  Banner Features Part
                </h2>
                {/* <Toggle /> */}
              </div>
              <div className="min-w-[400px] md:min-w-[650px]">
                <div className="flex flexcol md:flex-row gap2 md:gap-0 items-center justify-around bg[#F3F4F6] py-3 my-3 rounded-md">
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                      Video
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                      Title
                    </p>
                  </div>
                  
                  <p className="w-[32%] text-[#007cde] flex justify-center">
                    <p className="bg-[#007cde] w-[30%] text-center text-white px-3 py-1 rounded-full font-semibold">
                      Action
                    </p>
                  </p>
                </div>
                {data?.map((d, i) => (
                  <div
                    key={i}
                    className="flex flexcol md:flex-row items-center justify-around shadow shadow-[#007cde] py-3 my-3 rounded-md"
                  >
                    <div className="w-[32%] flex items-center justify-center">
                    <video 
    className="h-24 w-24" 
    src={d?.media} 
    controls 
    autoPlay 
    loop 
  />
                    </div>
                    <p className="w-[32%] text-center">
                      {d.title}
                    </p>
                   
                    
                  
                    <div className="w-[32%] flex items-center justify-center">
                      <NavLink
                        to={`/dashboard/editeventmedia/${d._id}`}
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

export default EventMedia;
