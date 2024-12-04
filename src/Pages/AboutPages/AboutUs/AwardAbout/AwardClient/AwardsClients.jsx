import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AwardsClients = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://webi-bacend.onrender.com/getawardsclients");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
  //         .delete(`https://webi-bacend.onrender.com/awardsclientsdelete/${id}`)
  //         .then((response) => {
  //           if (response.status === 204) {
  //             Swal.fire("Deleted!", "Your award card has been deleted.", "success");
  //             setData(data.filter((item) => item._id !== id));
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error deleting award:", error);
  //         });
  //     }
  //   });
  // };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex items-center gap-5 my-5">
            <h2 className="text-lg md:text-2xl font-semibold leading-tight">Awards Section</h2>
            {/* <AddAwardClient /> */}
          </div>
          {data?.map((regionData) => (
            <div key={regionData._id} className="my-5">
              <h3 className="text-xl font-bold text-center mb-4">{regionData.region}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regionData?.awards?.map((award, index) => (
                  <div key={index} className="shadow p-4 rounded-md bg-white">
                    <img
                      className="w-full h-40 object-cover rounded-md mb-4"
                      src={award?.image}
                      alt={award?.title}
                    />
                    <h4 className="text-lg font-semibold mb-2">{award?.title}</h4>
                    <p className="text-gray-600 mb-4">{award?.description}</p>
                    <div className="flex justify-between">
                      <NavLink to={`/dashboard/editawardsclintss/${regionData._id}`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2">
                          <FaPencilAlt /> Edit
                        </button>
                      </NavLink>
                      {/* <button
                        onClick={() => handleDelete(regionData._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2"
                      >
                        <MdOutlineDeleteOutline /> Delete
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsClients;
