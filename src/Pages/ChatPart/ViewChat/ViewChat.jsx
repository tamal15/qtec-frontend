import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const ViewChat = () => {
  const { user } = useAuth();
  const loginuser = user.email;
  const loginUserName = user.name;

  const [chatList, setChatList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://to-cash-backend.onrender.com/chatlist?userEmail=${loginuser}`)
      .then((res) => {
        setChatList(res.data);
      })
      .catch((err) => console.error(err));
  }, [loginuser]);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(
          `https://to-cash-backend.onrender.com/conversation?userEmail=${loginuser}&otherUserEmail=${selectedUser}`
        )
        .then((res) => setMessages(res.data))
        .catch((err) => console.error(err));

      axios
        .get(`https://to-cash-backend.onrender.com/user?email=${selectedUser}`)
        .then((res) => setSelectedUserName(res.data.name || selectedUser))
        .catch((err) => console.error(err));
    }
  }, [selectedUser, loginuser]);

  const sendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      axios
        .post("https://to-cash-backend.onrender.com/send", {
          productId: "product123",
          senderEmail: loginuser,
          receiverEmail: selectedUser,
          message: newMessage,
        })
        .then((res) => {
          setMessages((prev) => [...prev, res.data]);
          setNewMessage("");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex md:h-screen md:mt-10 mt-28 flex-col md:flex-row mb-20">
       <ScrollToTop />
      {/* Left Panel */}
      <div className="md:w-1/3 shadow p-4 w-full">
        <div className="mb-4 p-4 bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white rounded shadow">
          <h2 className="text-lg font-bold">{loginUserName}</h2>
          <p>{loginuser}</p>
        </div>
        <h2 className="text-xl font-bold mb-4">Chat List</h2>
        {chatList.length === 0 ? (
          <p>No users to chat with.</p>
        ) : (
          chatList.map((email) => (
            <div
              key={email}
              className={`p-2 mb-2 h-12 cursor-pointer bg-gray-100 rounded shadow ${
                selectedUser === email ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedUser(email)}
            >
              {email}
            </div>
          ))
        )}
      </div>

      {/* Right Panel */}
      <div className="md:w-2/3 p-4 flex flex-col w-full mt-20 md:mt-0 ">
        {selectedUser ? (
          <>
            {/* Header for Selected User */}
            <div className="mb-4 p-4 bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white rounded shadow">
              <h2 className="text-lg font-bold">{selectedUserName}</h2>
              <p>{selectedUser}</p>
            </div>

            {/* Conversation Section */}
            <div className="flex-1 overflow-y-auto h-44 md:h-0">
              {messages.length === 0 ? (
                <p>No messages yet.</p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 p-2 rounded ${
                      msg.senderEmail === loginuser
                        ? "self-end bg-blue-50 text-right"
                        : "self-start bg-gray-50 text-left"
                    }`}
                    
                  >
                    {/* Sender's Email */}
                    <div className="text-sm font-bold text-gray-500 mb-1">
                      {msg.senderEmail}
                    </div>
                    {/* Message Content */}
                    <div>{msg.message}</div>
                    {/* Timestamp */}
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(msg.timestamp).toLocaleString()}
                    </div>
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
