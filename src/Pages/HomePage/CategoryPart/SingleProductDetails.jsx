import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import useAuth from "../../Hooks/useAuth";
import { TbCoinTakaFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const socket = io("http://localhost:5000"); // Backend URL

const SingleProductDetails = ({ product, onClose }) => {
  const { user } = useAuth();
  // const useremail = user.email; // Logged-in user's email
  const userphone = user?.phoneNumber || ""; // Logged-in user's email
  const username = user?.displayName || ""; // Logged-in user's email
  const productimage = product.images[0];
  const productmodel = product.model;
  const productprice = product.price;
  const productbrand = product.brand;
  const productcondition = product.condition;
  const productdistrict = product.district;
  const productupazila = product.upazila;
  const sellerName = product.name;
  // const sellermail = product.email; // Seller's email
  const sellerphone = product.phone; // Seller's email
  const productId = product._id; // Current product ID

  console.log("usermail:", userphone);
  console.log("sellermail:", sellerphone);

  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const navigate = useNavigate();
  const [showFullNumber, setShowFullNumber] = useState(false);

  const handleClick = () => {
    setShowFullNumber(true);
  };

  const maskedPhone = product?.phone ? `${product?.phone.slice(0, 3)}-xxxxxxx` : "";


  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      product.images[0],product.brand,product.model,product.price,product.description
    )}&quote=${encodeURIComponent(
      `Check out this product: ${product.brand} ${product.model} (${product.condition}) priced at ${product.price}`
    )}`;
    window.open(url, "_blank");
  };
  
  
  const handleSaveProduct = async () => {
    const productData = {
      model: product.model,
      brand: product.brand,
      condition: product.condition,
      image: product.images[0],
      price: product.price,
      category: product.category,
      division: product.division,
      district: product.district,
      upazila: product.upazila,
      userPhone: userphone,
      userName: username,
      sellerName: product.name,
    };

    try {
      const response = await fetch("https://to-cash-backend.onrender.com/api/saved-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to save the product.");
      }

      Swal.fire({
        title: "Success!",
        text: "The product has been saved successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to save the product. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Fetch chat history when the chat is opened
  useEffect(() => {
    if (chatVisible && productId) {
      const fetchMessages = async () => {
        try {
          const response = await fetch(
            `https://to-cash-backend.onrender.com/api/chats?productId=${productId}&userPhone=${userphone}`
          );
          const data = await response.json();
          setMessages(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Error fetching messages:", error);
          setMessages([]);
        }
      };

      fetchMessages();
    }
  }, [chatVisible, productId, userphone]);

  // Handle sending messages
  // Determine receiverEmail dynamically when sending messages
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    // Determine `receiverEmail` dynamically
    const receiverEmail =
    userphone === sellerphone
        ? messages.find((msg) => msg.senderEmail !== userphone)?.senderEmail
        : sellerphone;

    const message = {
      productId,
      senderEmail: userphone,
      receiverEmail,
      message: newMessage,
      timestamp: new Date().toISOString(),
      productimage,
      username,
      productmodel,
      productprice,
      productbrand,
      productcondition,
      productdistrict,
      productupazila,
      sellerName
    };

    try {
      // Save the message to the database
      const response = await fetch("https://to-cash-backend.onrender.com/api/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error("Failed to save the message.");
      }

      const savedMessage = await response.json();

      // Emit the message via Socket.IO
      socket.emit("sendMessage", savedMessage);

      // Update UI with the saved message
      setMessages((prevMessages) => [...prevMessages, savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  // Listen for real-time messages
  // Listen for real-time messages
  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      if (
        newMessage.productId === productId &&
        (newMessage.senderEmail === userphone ||
          newMessage.receiverEmail === userphone)
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [productId, userphone]);

  return (
    <div className="fixed inset-0 bg-gray-100 flex  items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-5xl relative mt-[1600px] md:mt-[970px] mb-20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 text-white  right-4 bg-red-200 border-2 border-red-500 rounded hover:text-gray-800"
        >
          ✖
        </button>
        <div>
          
          {/* list the button  */}

          <div className="flex justify-between items-start">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mt-6 mb-1">
              {product.title}
              {/* <span className="text-gray-500">({product.condition})</span> */}
            </h3>
            <p className="mb-10">
              পোস্ট করা হয়েছে {product.upazila}, {product.district},{" "}
              {product.division}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 mt-10">
            <p
              className="flex items-center cursor-pointer"
              onClick={handleFacebookShare}
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h8m-4-4v8"
                  />
                </svg>
              </span>
              শেয়ার
            </p>
            <p
              className="flex items-center cursor-pointer"
              onClick={handleSaveProduct}
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </span>
              বিজ্ঞাপন সংরক্ষণ করুন
            </p>
          </div>
        </div>


          
        </div>
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        <div className="flex flex-col items-center space-y-4">
      {/* Large Image */}
      <div className="">
        <img
          src={selectedImage}
          alt={product.model}
          className="w-[800px] h-[300px] object-cover rounded"
        />
      </div>

      {/* Small Images */}
      <div className="flex space-x-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.model}-thumbnail-${index}`}
            className="w-[120px] h-[70px] object-cover rounded cursor-pointer hover:opacity-80"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>

          {/* Chat Button */}

          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            {/* Seller Information */}
            <h4 className="text-sm text-gray-500 mb-2">
              For sale by{" "}
              <span className="font-bold text-gray-800">{product.name}</span>
            </h4>

            {/* Phone Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-1.242.754-2.25 1.688-2.25h15.124c.934 0 1.688 1.008 1.688 2.25v10.5c0 1.242-.754 2.25-1.688 2.25H3.938c-.934 0-1.688-1.008-1.688-2.25V6.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25c-.69 0-1.25.56-1.25 1.25S11.31 10.75 12 10.75s1.25-.56 1.25-1.25S12.69 8.25 12 8.25zm0 3.75c-1.242 0-2.25.754-2.25 1.688v1.124c0 .934 1.008 1.688 2.25 1.688s2.25-.754 2.25-1.688v-1.124c0-.934-1.008-1.688-2.25-1.688z"
                  />
                </svg>
              </div>
              <div onClick={handleClick} className="cursor-pointer">
      <h4 className="font-bold text-gray-800">
        {showFullNumber ? product?.phone : maskedPhone}
      </h4>
      {!showFullNumber && (
        <p className="text-xs text-gray-500">Click to show phone number</p>
      )}
    </div>
            </div>

            {/* Chat Button */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-yellow-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h3.438c.31 0 .612.09.863.262l2.92 2.047c.698.49 1.688-.008 1.688-.862v-1.447c0-.55.45-1 1-1h2.688a2.25 2.25 0 002.25-2.25V6.75z"
                  />
                </svg>
              </div>
            
              
              <span
        onClick={() => {
          user ? setChatVisible(true) : navigate('/login');
        }}
        className="text-yellow-500 font-semibold hover:underline"
      >
        Chat
      </span>
              

            </div>
          </div>
        </div>

        {/* product details  */}

        <div>
          <h3 className="text-xl font-bold text-blue-600 mt-10 mb-5">
            {product.brand} {product.roles} {product.model}{" "}
            <span className="text-gray-500">{product.condition}</span>
          </h3>

          <p className="font-semibold text-blue-600 mb-4 flex text-2xl">
            <TbCoinTakaFilled className="text-2xl mt-1" />{" "}
            <p className="ms-1">{product.price}</p>
          </p>

          <div className="text-gray-700 space-y-2 mb-4">
            <p>
              Tittle:{" "}
              <span className="font-medium">{product.title}</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-medium">{product.category}</span>
            </p>
            <p>
              
              <span className="font-medium">{product.subCategory}</span>
            </p>
            <p>
            {product.condition ? `Condition: ${product.condition}` : ""}
             
            </p>
            <p>
            {product.brand ? `Brand: ${product.brand}` : ""}
             
            </p>
            <p className="text-lg text-gray-500 ">
              Address: {product.division || "N/A"}, {product.category || "N/A"}
            </p>
            <p className="text-lg text-gray-500">
  {product.education ? `Education: ${product.education}` : ""}
 
</p>
<p className="text-lg text-gray-500">
  
  {product.experience ? ` Experience: ${product.experience}` : ""}
</p>
<p className="text-lg text-gray-500">
  {product.timeperiod ? `Apply Last Date: ${product.timeperiod}` : ""}
 
</p>
<p className="text-lg text-gray-500">
  {product.website ? `Website: ${product.website}` : ""}
  
</p>
<p className="text-lg text-gray-500">
  {product.roles ? `Roles: ${product.roles}` : ""}
  
</p>
<p className="text-lg text-gray-500">
  {product.email ? `Apply Email: ${product.email}` : ""}
  
</p>
            {/* <p>
              Authenticity:{" "}
              <span className="font-medium">{product.authenticity}</span>
            </p> */}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              Features:
            </h2>
            <ul className="flex flex-wrap gap-x-4 text-gray-600 list-disc list-inside">
  {product.features?.map((feature, index) => (
    <li key={index} className="flex items-center list-disc list-inside">
      {feature}
    </li>
  ))}
</ul>

          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              Description:
            </h2>
            <p className="text-gray-600">{product.description.slice(0,900)}</p>
          </div>
        </div>

        {/* Chat Modal */}
        {/* Chat Modal */}
        {/* Chat Modal */}
        {/* Chat Modal */}
        {chatVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={() => setChatVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring focus:ring-gray-300 rounded-full"
                aria-label="Close chat modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-4">Chat</h2>
              <div className="border rounded p-4 mb-2 max-h-64 overflow-y-auto bg-gray-100">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex items-start mb-3 ${
                      msg.senderEmail === userphone
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg shadow ${
                        msg.senderEmail === userphone
                          ? "bg-green-100 text-green-900"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <span className="text-xs text-gray-500 block text-right mt-1">
                        {new Date(msg.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SingleProductDetails.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    model: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    upazila: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    roles: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    timeperiod: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    authenticity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    edition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userPhone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SingleProductDetails;
