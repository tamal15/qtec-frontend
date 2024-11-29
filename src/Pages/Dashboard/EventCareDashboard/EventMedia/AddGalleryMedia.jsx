import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = "c2ece7d404ad684865b407a50b4ddbb5";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddGalleryMedia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { handleSubmit, reset } = useForm();

  // Toggle modal visibility
  const toggleModal = () => setIsOpen(!isOpen);

  // Handle image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(image_hosting_api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.data.success) {
          setImageUrl(response.data.data.url);
        } else {
          Swal.fire({
            icon: "error",
            title: "Upload Failed",
            text: "Could not upload the image. Please try again.",
          });
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while uploading the image.",
        });
      }
    }
  };

  // Handle form submission
  const onSubmit = async () => {
    if (!imageUrl) {
      Swal.fire({
        icon: "warning",
        title: "No Image",
        text: "Please upload an image before submitting.",
      });
      return;
    }

    const formData = { image: imageUrl };

    try {
      await axios.post("http://localhost:5000/postmediagalllery", formData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Project added successfully!",
      });
      reset();
      setImageUrl("");
      toggleModal();
    } catch (error) {
      console.error("Error adding project:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the project. Please try again.",
      });
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white bg-[#007cde] hover:scale-105 active:scale-90 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add Project
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-40">
          <div className="relative p-4 w-full max-w-xl bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h2 className="text-xl font-semibold">Add Your Project</h2>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6m-6-6l6-6M7 7L1 13"
                  />
                </svg>
              </button>
            </div>
            <div className="py-5 px-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full text-xl mt-2"
                />
                <button
                  className="bg-[#01c0c9] text-white font-semibold mt-5 px-6 py-2 text-xl rounded-2xl"
                  type="submit"
                  disabled={!imageUrl}
                >
                  Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddGalleryMedia;
