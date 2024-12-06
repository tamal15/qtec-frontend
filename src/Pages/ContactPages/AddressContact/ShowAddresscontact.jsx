import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const ShowAddresscontact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getcontactaddresspart`
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

  console.log(data)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://webi-bacend.onrender.com/homeprojectdelete/${id}`)
          .then((response) => {
            if (response.status === 204) {
              Swal.fire("Deleted!", "Your entry has been deleted.", "success");
              const updatedData = data.filter((d) => d._id !== id);
              setData(updatedData);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section>
          <div className="container mx-auto px-4 sm:px-8 overflow-x-scroll">
            <div className="py-8">
              <h2 className="text-lg md:text-2xl font-semibold leading-tight my-5">
                Address Contact List
              </h2>
              <div className="min-w-[400px] md:min-w-[650px]">
                {data.map((country) => (
                  <div key={country._id} className="mb-6 shadow p-4 rounded-md">
                    <div className="flex items-center gap-4">
                      <img
                        src={country.flag}
                        alt={`${country.country} Flag`}
                        className="w-10 h-6"
                      />
                      <h3 className="text-xl font-semibold">{country.country}</h3>
                    </div>
                    <div className="mt-4">
                      {country.cities.map((city, index) => (
                        <div
                          key={index}
                          className="p-4 my-3 border rounded-md shadow-sm"
                        >
                          <h4 className="text-lg font-bold">{city.name}</h4>
                          <p>Email: {city.email}</p>
                          <p>Phone: {city.phone}</p>
                          {city.mobile && <p>Mobile: {city.mobile}</p>}
                          <p>Address: {city.address}</p>
                          <div className="flex gap-2 mt-2">
                            <button className="w-8 h-8 flex items-center justify-center bg-[#01c0c9] text-white rounded-full">
                              <FaPencilAlt />
                            </button>
                            <button
                              onClick={() => handleDelete(country._id)}
                              className="w-8 h-8 flex items-center justify-center bg-[#007cde] text-white rounded-full"
                            >
                              <MdOutlineDeleteOutline />
                            </button>
                          </div>
                        </div>
                      ))}
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

export default ShowAddresscontact;
