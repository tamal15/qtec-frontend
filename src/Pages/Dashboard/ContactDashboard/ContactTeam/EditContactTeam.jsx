import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = "9aa445fc9b5e81a67e633b362bec2003";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditContactTeam = () => {
  const [contact, setContact] = useState({
    name: "",
    country: "",
    email: "",
    image: "",
    flag: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [flagFile, setFlagFile] = useState(null);
  const { id } = useParams();

  // Fetch contact data
  useEffect(() => {
    fetch(`http://localhost:5000/editcontactTeam/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((error) => console.error("Error fetching contact data:", error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleFlagChange = (e) => {
    setFlagFile(e.target.files[0]);
  };

  // Upload image to imgbb
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data?.data?.url) {
      return data.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();

    let updatedContact = { ...contact };

    try {
      // Upload new image if selected
      if (imageFile) {
        const imageUrl = await uploadImage(imageFile);
        updatedContact.image = imageUrl;
      }

      // Upload new flag if selected
      if (flagFile) {
        const flagUrl = await uploadImage(flagFile);
        updatedContact.flag = flagUrl;
      }

      // Send the updated data to the server
      const response = await fetch(`http://localhost:5000/contactteamupdate/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });

      const result = await response.json();
      if (result.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Contact updated successfully!",
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes Detected",
          text: "No changes were made to the contact.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
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
                Update Contact Team
              </h2>
              <form onSubmit={handleUpdate}>
                <input
                  onChange={handleChange}
                  value={contact.name}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="Name"
                  name="name"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={contact.country}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="Country"
                  name="country"
                />
                <br />
                <input
                  onChange={handleChange}
                  value={contact.email}
                  className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                  placeholder="Email"
                  name="email"
                />
                <br />
                <input
                  type="file"
                 onChange={handleImageChange}
                  className="input-file border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                />
                <br />
                <input
                  type="file"
                  onChange={handleFlagChange}
                  className="input-file border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
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

export default EditContactTeam;
