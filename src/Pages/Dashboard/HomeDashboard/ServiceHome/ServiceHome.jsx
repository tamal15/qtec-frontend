// import React from 'react';

// import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import Swal from "sweetalert2";

const ServiceHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/gethomeservice`
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

  

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios
//           .delete(`https://webi-bacend.onrender.com/bannersdelete/${id}`)
//           .then((response) => {
//             response.status === 204 &&
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");
//             const deleted = data.filter((d) => d._id !== id);
//             setData(deleted);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
//   };


  return (
    <>
      {loading || (
        <section>
       

          {/* 2nd part start  */}

          <div className="container mx-auto px-4 sm:px-8 overflow-x-scroll">
            <div className="py-8">
              <div className="flex items-center gap-5 my-5">
                <h2 className="text-lg md:text-2xl font-semibold leading-tight">
                  Service Features Part
                </h2>
                {/* <Toggle /> */}
              </div>
              <div className="min-w-[400px] md:min-w-[650px]">
                <div className="flex flexcol md:flex-row gap2 md:gap-0 items-center justify-around bg[#F3F4F6] py-3 my-3 rounded-md">
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                       title
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    description
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    backgroundImage
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
                    
                    <p className="w-[32%] text-center">
                      {d.title}
                    </p>
                   
                    <p className="w-[32%] text-left">
                      {d.description}
                    </p>

                    {i === 0 && (
      <div className="w-[32%] flex items-center justify-center">
        <img 
          className="h-24 w-24" 
          src={d?.backgroundImage} 
          alt="Banner" 
        />
      </div>
    )}
                  
                    <div className="w-[32%] flex items-center justify-center">
                      <NavLink
                        to={`/dashboard/editservicehome/${d._id}`}
                        style={{
                          textDecoration: "none",
                          marginRight: "-10px",
                        }}
                      >
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#01c0c9] text-white text-xl duration-300 active:scale-90">
                          <FaPencilAlt />
                        </button>
                      </NavLink>
                      {/* <button
                        onClick={() => handleDelete(d?._id)}
                        className="w-10 h-10 ml-4 rounded-full flex items-center justify-center bg-[#007cde] text-white text-xl duration-300 active:scale-90"
                      >
                        <MdOutlineDeleteOutline />
                      </button> */}
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

export default ServiceHome;
