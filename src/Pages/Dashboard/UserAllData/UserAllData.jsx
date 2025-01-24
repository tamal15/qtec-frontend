import { useEffect, useState } from "react";

const UserAllData = () => {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all users
  useEffect(() => {
    fetch("http://localhost:5000/getadminlist")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initially, all users are shown
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Filter users by email
  useEffect(() => {
    if (searchEmail.trim() === "") {
      setFilteredUsers(users); // Show all users if search field is empty
    } else {
      const filtered = users.filter((user) =>
        user.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchEmail, users]);

  // Block user
  const handleBlockUser = (email) => {
    if (window.confirm("Are you sure you want to block this user?")) {
      setLoading(true);
      fetch(`http://localhost:5000/blockuser/${email}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("User blocked successfully!");
            setUsers(
              users.map((user) =>
                user.email === email ? { ...user, status: "blocked" } : user
              )
            );
          } else {
            alert(data.message);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error blocking user:", error);
          setLoading(false);
        });
    }
  };

  // Unblock user
  const handleUnblockUser = (email) => {
    if (window.confirm("Are you sure you want to unblock this user?")) {
      setLoading(true);
      fetch(`http://localhost:5000/unblockuser/${email}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("User unblocked successfully!");
            setUsers(
              users.map((user) =>
                user.email === email ? { ...user, status: "active" } : user
              )
            );
          } else {
            alert(data.message);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error unblocking user:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">All Users</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-700 hover:text-white transition-all"
                >
                  <td className="border px-4 py-2 text-black">
                    {user.displayName || "N/A"}
                  </td>
                  <td className="border px-4 py-2 text-black">{user.email}</td>
                  <td className="border px-4 py-2 text-black">
                    {user.role || "User"}
                  </td>
                  <td className="border px-4 py-2 text-black">
                    {user.status || "active"}
                  </td>
                  <td className="border px-4 py-2 text-black">
                    {user.status === "blocked" ? (
                      <button
                        onClick={() => handleUnblockUser(user.email)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                        disabled={loading}
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlockUser(user.email)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                        disabled={loading}
                      >
                        Block
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 py-4"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAllData;
