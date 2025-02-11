import  { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const ViewChat = () => {
  const { user } = useAuth();
  const loginphone = user.phoneNumber;
  const loginUserName = user.displayName;

  const [chatList, setChatList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState("");



  // ✅ Fetch Chat List (Updated with unread message notifications)
  useEffect(() => {
    axios
      .get(`https://servers.sellflit.com/chatlist?userPhone=${loginphone}`)
      .then((res) => {
        setChatList(res.data);
      })
      .catch((err) => console.error(err));
  }, [loginphone]);

  // ✅ Fetch Messages for Selected User
  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`https://servers.sellflit.com/conversation?userPhone=${loginphone}&otheruserPhone=${selectedUser}`)
        .then((res) => {
          setMessages(res.data);
          if (res.data.length > 0) {
            setProductDetails(res.data[0]);
          }
        })
        .catch((err) => console.error(err));
        axios
        .get(`https://servers.sellflit.com/user?phoneNumber=${selectedUser}`)
        .then((res) => {
          setSelectedUserName(res.data.name || selectedUser); // Default to phone if no name
        })
        .catch((err) => console.error(err));
  
      markMessageAsSeen(selectedUser, loginphone);
    
    }
  }, [selectedUser, loginphone]);

  // ✅ Send Message & Update Unread Notification
  const sendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      axios
        .post("https://servers.sellflit.com/send", {
          productId: "product123", // Set the actual product ID
          senderEmail: loginphone,
          receiverEmail: selectedUser,
          message: newMessage,
        })
        .then((res) => {
          setMessages((prev) => [...prev, res.data]);
          setNewMessage("");

          // Update chat list with unread notification
          setChatList((prev) =>
            prev.map((chat) =>
              chat.phoneNumber === selectedUser
                ? { ...chat, hasUnread: true }
                : chat
            )
          );
        })
        .catch((err) => console.error(err));
    }
  };

  // ✅ Mark Messages as Seen & Update Notification
  const markMessageAsSeen = (sender, receiver) => {
    axios
      .post("https://servers.sellflit.com/markSeen", {
        senderEmail: sender,
        receiverEmail: receiver,
      })
      .then(() => {
        // After marking, remove the notification icon
        setChatList((prev) =>
          prev.map((chat) =>
            chat.phoneNumber === sender ? { ...chat, hasUnread: false } : chat
          )
        );
      })
      .catch((err) => console.error("Error marking messages as seen:", err));
  };

  return (
    <div className="flex md:h-screen md:mt-10 mt-28 flex-col md:flex-row mb-20">
      <ScrollToTop />
      
      {/* Left Panel - Chat List */}
      <div className="md:w-1/3 shadow p-4 w-full">
      <div className="mb-4 p-4 bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white rounded shadow">
          <h2 className="text-lg font-bold">{loginUserName}</h2>
        </div>
        <h2 className="text-xl font-bold mb-4">Chat List</h2>
        {chatList.length === 0 ? (
          <p>No users to chat with.</p>
        ) : (
          chatList.map((user) => (
            <div
              key={user.phoneNumber}
              className={`p-2 mb-2 h-14 cursor-pointer flex items-center bg-gray-100 rounded shadow ${
                selectedUser === user.phoneNumber ? "bg-blue-100" : ""
              }`}
              onClick={() => {
                setSelectedUser(user.phoneNumber);
                markMessageAsSeen(user.phoneNumber, loginphone);
              }}
            >
              {/* Chat Username */}
              <span className="flex-1 font-semibold">{user.username}</span>

              {/* Notification Icon for Unread Messages */}
              {user.hasUnread && (
                <span className="ml-2 text-red-500 text-lg">🔔</span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Right Panel - Chat */}
      <div className="md:w-2/3 p-4 flex flex-col w-full mt-20 md:mt-0">
        {selectedUser ? (
          <>
            <div className="mb-4 p-4 bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white rounded shadow">
              <p>Chat Option</p>
            </div>

            {productDetails && (
              <div className="mb-4 p-4 bg-gray-100 rounded shadow flex items-center">
                <img
                  src={productDetails.productimage}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">
                    {productDetails.productmodel} - {productDetails.productbrand}
                  </h3>
                  <p>Price: {productDetails.productprice} Taka</p>
                  <p>Condition: {productDetails.productcondition}</p>
                  <p>Location: {productDetails.productdistrict}</p>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto h-44 md:h-0">
              {messages.length === 0 ? (
                <p>No messages yet.</p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 p-2 rounded ${
                      msg.senderEmail === loginphone
                        ? "self-end bg-blue-50 text-right"
                        : "self-start bg-gray-50 text-left"
                    }`}
                  >
                    <div className="text-sm font-bold text-gray-500 mb-1">
                      {msg.senderEmail === loginphone ? "You" : selectedUserName}
                    </div>
                    <div>{msg.message}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(msg.timestamp).toLocaleString()}
                    </div>

                    {msg.senderEmail === loginphone && (
                      <div className="text-xs text-blue-500 mt-1">
                        {msg.seen ? "✓✓ Seen" : "✓ Sent"}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Input Box */}
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 border p-2 rounded"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <p>Select a user to start chatting.</p>
        )}
      </div>
    </div>
  );
};

export default ViewChat;
