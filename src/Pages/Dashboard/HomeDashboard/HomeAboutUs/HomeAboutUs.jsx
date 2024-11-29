
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomeAboutUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/gethomeabout`
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

  

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //         .delete(`http://localhost:5000/homeaboutdelete/${id}`)
  //         .then((response) => {
  //           response.status === 204 &&
  //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //           const deleted = data.filter((d) => d._id !== id);
  //           setData(deleted);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // };

  return (
    <>
      {loading || (
        <section>
       
          <div className="container mx-auto px-4 sm:px-8 overflow-x-scroll">
            <div className="py-8">
              <div className="flex items-center gap-5 my-5">
                <h2 className="text-lg md:text-2xl font-semibold leading-tight">
                  Banner Features Part
                </h2>
              </div>
              <div className="min-w-[400px] md:min-w-[650px]">
                <div className="flex flexcol md:flex-row gap2 md:gap-0 items-center justify-around bg[#F3F4F6] py-3 my-3 rounded-md">
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    Description
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    Year
                    </p>
                  </div>
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
                    location
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    numberClient
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    clientTitle
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    Candidate
                    </p>
                  </div>
                  <div className="w-[32%]">
                    <p className="text-[#007cde] shadow shadow-[#007cde] w-max mx-auto px-4 py-1 rounded-md font-semibold">
                    candidateTitle
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
                    
                    <p className="w-[52%] ms-3 text-center border border-[#007cde] h-[130px] overflow-y-scroll overflow-x-hidden p-2 rounded-md">
                    {data[0]?.description}
                  </p>
                    
                    <p className="w-[32%] text-center">
                      {data[0]?.numberYear}
                    </p>
                   
                    <p className="w-[32%] text-center">
                      {data[0]?.yearTitle}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.numberLocation}
                    </p>
                    <p className="w-[22%] text-center">
                      {data[0]?.locationTitle}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.numberClient}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.clientTitle}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.numberCandidate}
                    </p>
                    <p className="w-[62%] text-center">
                      {data[0]?.candidateTitle}
                    </p>
                  
                    <div className="w-[62%] flex items-center justify-center">
                      <NavLink
                        to={`/dashboard/edithomeaboutus/${data[0]?._id}`}
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
                        onClick={() => handleDelete(data[0]?._id)}
                        className="w-10 h-10 ml-4 rounded-full flex items-center justify-center bg-[#007cde] text-white text-xl duration-300 active:scale-90"
                      >
                        <MdOutlineDeleteOutline />
                      </button> */}
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

export default HomeAboutUs;
