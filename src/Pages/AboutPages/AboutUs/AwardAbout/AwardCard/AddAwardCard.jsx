import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = "c2ece7d404ad684865b407a50b4ddbb5";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddAwardCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // To store the uploaded image URL
  const { register, handleSubmit, reset } = useForm();

  // Toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Handle image upload to ImgBB
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await axios.post(image_hosting_api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setImageUrl(response.data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire({
          icon: "error",
          title: "Image Upload Failed",
          text: "Please try again.",
        });
      }
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = {
      title: data.title,
      alignText: data.alignText,
      image: imageUrl,
    };

    if (!imageUrl) {
      Swal.fire({
        icon: "warning",
        title: "Image Required",
        text: "Please upload an image before submitting.",
      });
      return;
    }

    try {
      await axios.post("https://webi-bacend.onrender.com/postawrdcard", formData); // Adjust the URL to your backend API
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Blog added successfully!",
      });
      reset(); // Reset the form fields
      setImageUrl(""); // Clear the image URL
      toggleModal(); // Close the modal
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "An error occurred while adding the blog.",
      });
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white bg-[#007cde] hover:scale-105 active:scale-90 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Add Client
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-40">
          <div className="relative p-4 w-full max-w-xl bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Add Your Blog</h2>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6-6M7 7l-6 6m6-6l6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="py-5 px-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
             
                <input
                  {...register("title", { required: true })}
                  className="input input-text border border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full text-xl"
                  placeholder="Title"
                />
              
               
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="input-file border border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full"
                />
                 <input
                  {...register("alignText", { required: true })}
                  className="input input-text border border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full text-xl"
                  placeholder="left/right"
                />
                <button
                  type="submit"
                  className="bg-[#01c0c9] font-semibold text-white px-6 py-2 text-xl rounded-2xl w-full"
                >
                  Submit 
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAwardCard;
