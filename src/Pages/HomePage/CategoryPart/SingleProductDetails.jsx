import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import useAuth from "../../Hooks/useAuth";

const socket = io("http://localhost:5000"); // Backend URL

const SingleProductDetails = ({ product, onClose }) => {
  const { user } = useAuth();
  const useremail = user.email; // Logged-in user's email
  const productimage=product.images[0]
  const productmodel=product.model
  const sellermail = product.email; // Seller's email
  const productId = product._id; // Current product ID

  console.log("usermail:", useremail);
  console.log("sellermail:", sellermail);

  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch chat history when the chat is opened
  useEffect(() => {
    if (chatVisible && productId) {
      const fetchMessages = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/chats?productId=${productId}&userEmail=${useremail}`
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
  }, [chatVisible, productId, useremail]);
  
  
  
  
  
  

  // Handle sending messages
  // Determine receiverEmail dynamically when sending messages
    const handleSendMessage = async () => {
  if (!newMessage.trim()) return;

  // Determine `receiverEmail` dynamically
  const receiverEmail =
    useremail === sellermail
      ? messages.find((msg) => msg.senderEmail !== useremail)?.senderEmail
      : sellermail;

  const message = {
    productId,
    senderEmail: useremail,
    receiverEmail,
    message: newMessage,
    timestamp: new Date().toISOString(),
    productimage,
    productmodel,
  };

  try {
    // Save the message to the database
    const response = await fetch("http://localhost:5000/api/chats", {
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
        (newMessage.senderEmail === useremail || newMessage.receiverEmail === useremail)
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });
  
    return () => {
      socket.off("receiveMessage");
    };
  }, [productId, useremail]);
  
  
  
  
  
  
  
  
  

  

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-5xl relative mt-96">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
          <div className="w-full">
            <img
              src={product.images[0]}
              alt={product.model}
              className="w-[800px] h-96 object-cover rounded"
            />
          </div>
         
         {/* Chat Button */}

    
         <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
  {/* Seller Information */}
  <h4 className="text-sm text-gray-500 mb-2">
    For sale by <span className="font-bold text-gray-800">{product.name}</span>
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
    <div>
      <h4 className="font-bold text-gray-800">{product.phone}</h4>
      <p className="text-xs text-gray-500">Click to show phone number</p>
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
      onClick={() => setChatVisible(true)}
      className="text-yellow-500 font-semibold hover:underline"
    >
      Chat
    </span>
  </div>
</div>


        
        </div>


          {/* product details  */}

          <div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                {product.model}
              </h1>
  
              <p className="text-xl font-semibold mb-2 text-green-600">
                Tk {product.price}
              </p>
  
              <div className="text-gray-700 space-y-2 mb-4">
                <p>Condition: <span className="font-medium">{product.condition}</span></p>
                <p>Brand: <span className="font-medium">{product.brand}</span></p>
                <p>Edition: <span className="font-medium">{product.edition}</span></p>
                <p>Authenticity: <span className="font-medium">{product.authenticity}</span></p>
              </div>
  
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Features:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
  
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Description:</h2>
                <p className="text-gray-600">{product.description}</p>
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
                      msg.senderEmail === useremail ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg shadow ${
                        msg.senderEmail === useremail
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
    userEmail: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SingleProductDetails;
