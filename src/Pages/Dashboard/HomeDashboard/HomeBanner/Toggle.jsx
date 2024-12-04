// import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

// const image_hosting_key = "c2ece7d404ad684865b407a50b4ddbb5";
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
    //   const imageFiles = [];
      // Append each image file to the array
     

      // Set the image URLs in the data object
    //   data.image1 = imageFiles[0] || "";

      // Make the request to add the banner
      const response = await fetch(`https://webi-bacend.onrender.com/addbanner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.insertedId) {
        alert("Added successfully");
        reset();
        toggleModal(); // Close the modal after successful submission
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white bg-[#ff6600] hover:bg-orange-600 hover:scale-105 active:scale-90 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#ff6600] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Banner
      </button>

      {isOpen && (
        <div
          id="crud-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-40  "
        >
          <div className="relative p-4 w-full max-w-md ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-20 mb-16">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Banner
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="py-5 px-8">
                <div>
                  {/* <Row> */}
                  {/* <Col md={{ span: 8, offset: 2 }}> */}
                  <div
                    className="login-form text-center"
                    style={{ borderRadius: "20px" }}
                  >
                    <h2 className="mb-5 text-black text-3xl font-semibold">
                      Add Your Banner
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="">
                        {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='input input-text border-[1px] border-[#ff6600] hover:border-[#fdb33c] rounded px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[450px] md:min-w-[500px] max-w-[12.5rem] mx-2 bg-white'  {...register("thumbnailFirstWord", { required: true })} placeholder='thumbnailFirstWord' />  */}
                        <br />
                        {/* <input
                               
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='input input-text border-[1px] border-[#ff6600] hover:border-[#fdb33c] rounded px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[450px] md:min-w-[500px] max-w-[12.5rem] mx-2 bg-white mt-2'  {...register("thumbnailFirstWord", { required: true })} placeholder='thumbnailFirstWord' /> <br /> */}
                        {/* <input
                               
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='input input-text border-[1px] border-[#ff6600] hover:border-[#fdb33c] rounded px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[450px] md:min-w-[500px] max-w-[12.5rem] mx-2 bg-white mt-2'  {...register("otherWord", { required: true })} placeholder='otherWord' /> <br /> */}
                        <input
                          style={{
                            fontWeight: "600",
                            color: " #0E1621",
                            height: "70px",
                          }}
                          className="input input-text border-[2px] border-[#ff6600] hover:border-[#fdb33c] rounded-3xl px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[250px] md:min-w-[300px] max-w-[7.5rem] mx-2 bg-white mt-2 text-xl"
                          {...register("OurServicesHomeText", {
                            required: true,
                          })}
                          placeholder="OurServicesHomeText"
                        />{" "}
                        <br />
                        {/* <input
                          style={{
                            fontWeight: "600",
                            color: "black",
                            height: "70px",
                          }}
                          {...register("image1", { required: true })}
                          type="file"
                          accept="image/png, image/jpg"
                          className="input input-text border-[2px] border-[#ff6600] hover:border-[#fdb33c] rounded-3xl px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[250px] md:min-w-[300px] max-w-[12.5rem] mx-2 text-xl mt-2  "
                        /> */}
                        <br />
                        {/* <input
                                 style={{fontWeight:"600",color:"white"}}
                                  {...register('image2', { required: true })} type="file" className="input input-text border-[1px] border-[#ff6600] hover:border-[#fdb33c] rounded px-5 py-2  top-0 left-0 w-full  input-wrapper  min-w-[450px] md:min-w-[500px] max-w-[12.5rem] mx-2 text-xl mt-2 " />
                                  <br/> */}
                        <div className="paterns mt-5 ">
                          <button
                            className="bg-[#ff6600] font-semibold text-white mt-5 px-10 py-2 text-xl rounded-2xl"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* </Col> */}
                  {/* </Row> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toggle;
