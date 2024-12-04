import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditStatusAward = () => {
  const [banner, setBanner] = useState({
    title1: "",
    number1: "",
    title2: "",
    number2: "",
    title3: "",
    number3: "",
    
  });
  const { id } = useParams();

  // Fetch banner data
  useEffect(() => {
    fetch(`https://webi-bacend.onrender.com/editawrdsstatus/${id}`)
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
  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://webi-bacend.onrender.com/statusawrdupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(banner),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Success",
            text: "Banner updated successfully!",
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
                Update Home AboutUs
              </h2>
              <form onSubmit={handleUpdate}>
               
                <input
                  onChange={handleChange}
                  value={banner?.title1}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="awards"
                  name="title1"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={banner?.number1}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="400+"
                  name="number1"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={banner?.title2}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="awards"
                  name="title2"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={banner?.number2}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="600+"
                  name="number2"
                />
                <input
                  onChange={handleChange}
                  value={banner?.title3}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="awards"
                  name="title3"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={banner?.number3}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    height: "50px",
                  }}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="700+"
                  name="number3"
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

export default EditStatusAward;
