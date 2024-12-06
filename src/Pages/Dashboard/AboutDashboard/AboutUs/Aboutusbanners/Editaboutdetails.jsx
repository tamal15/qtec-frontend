import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditAboutdetails = () => {
  const [banner, setBanner] = useState({
    text: "",
    highlightedText1: "",
    text2: "",
    highlightedText2: "",
    listTitle: "",
    list: [], // Ensure it's always an array
  });
  const { id } = useParams();

  // Fetch banner data
  useEffect(() => {
    fetch(`https://webi-bacend.onrender.com/editsdetailsaboutus/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure list is an array
        if (data.list && Array.isArray(data.list)) {
          setBanner(data);
        } else {
          setBanner({
            ...data,
            list: [], // Set to empty array if list is not an array
          });
        }
      })
      .catch((error) => console.error("Error fetching banner:", error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If list field, convert text to array by splitting on new lines
    if (name === "list") {
      const updatedList = value.split("\n").map((item) => item.trim()).filter((item) => item); // Remove empty entries
      setBanner((prevBanner) => ({
        ...prevBanner,
        [name]: updatedList,
      }));
    } else {
      setBanner((prevBanner) => ({
        ...prevBanner,
        [name]: value,
      }));
    }
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();

    fetch(`https://webi-bacend.onrender.com/aboutdetailsnewupdate/${id}`, {
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
            text: "Details updated successfully!",
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
              className="relative text-center shadow"
              style={{ borderRadius: "20px" }}
            >
              <Link to={-1}>
                <FaArrowLeft className="relative top-2 left-2 text-[#01c0c9] bg-primary text-3xl p-2 rounded-full duration-300 active:scale-90 cursor-pointer select-none" />
              </Link>
              <h2 className="mb-5 text-black text-3xl font-semibold">
                Edit Details
              </h2>
              <form onSubmit={handleUpdate}>
                <input
                  onChange={handleChange}
                  value={banner.text}
                  name="text"
                  placeholder="Text"
                  className="input-text border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
                <input
                  onChange={handleChange}
                  value={banner.highlightedText1}
                  name="highlightedText1"
                  placeholder="Highlighted Text 1"
                  className="input-text border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
                <input
                  onChange={handleChange}
                  value={banner.text2}
                  name="text2"
                  placeholder="Text 2"
                  className="input-text border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
                <input
                  onChange={handleChange}
                  value={banner.highlightedText2}
                  name="highlightedText2"
                  placeholder="Highlighted Text 2"
                  className="input-text border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
                <input
                  onChange={handleChange}
                  value={banner.listTitle}
                  name="listTitle"
                  placeholder="List Title"
                  className="input-text border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
                <textarea
                  onChange={handleChange}
                  value={banner.list.join("\n")} // Join array back into text with newline separator
                  name="list"
                  placeholder="List Items (one per line)"
                  className="textarea border-[2px] rounded-lg px-4 py-2 mb-4 w-full"
                />
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

export default EditAboutdetails;
