import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const EditClientUAE = () => {
  const [banner, setBanner] = useState({
    key: "",
    label: "",
  });
  const { id } = useParams();

  // Fetch banner data
  useEffect(() => {
    fetch(`https://webi-bacend.onrender.com/editclienteteaboutuae/${id}`)
      .then((res) => res.json())
      .then((data) => setBanner(data))
      .catch((error) => console.error("Error fetching banner:", error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanner((prevBanner) => ({
      ...prevBanner,
      [name]: value,
    }));
  };

  

  

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();

    let updatedBanner = { ...banner };

    
    // Send the updated data to the server
    fetch(`https://webi-bacend.onrender.com/clientauaepdates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBanner),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Success",
            text: "Project updated successfully!",
          });
        }
      })
      .catch((error) => console.error("Error updating banner:", error));
  };

  return (
    <div>
      <div className="py-5 md:px-64">
        <div className="container">
          <div>
            <div
              className="relative login-form text-center shadow"
              style={{ borderRadius: "20px" }}
            >
              <Link to={-1}>
                <FaArrowLeft className="relative top-2 left-2 text-[#01c0c9] bg-primary text-3xl p-2 rounded-full duration-300 active:scale-90 cursor-pointer select-none" />
              </Link>
              <h2 className="mb-5 text-black text-3xl font-semibold">
                Update Home Project
              </h2>
              <form onSubmit={handleUpdate}>
                <input
                  onChange={handleChange}
                  value={banner.key}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "60px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="category:construction/restaurant/hospitality"
                  name="key"
                />
                <br />
                <textarea
                  onChange={handleChange}
                  value={banner.label}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "80px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="QSR/RESTAURANT/CAFE/SWEET /CATERING/FMCG"
                  name="category"
                />
                <br />
               
               
               
                
                <button
                  className="bg-[#01c0c9] font-semibold text-white mt-5 mb-10 px-6 py-2 text-xl rounded-2xl"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClientUAE;
