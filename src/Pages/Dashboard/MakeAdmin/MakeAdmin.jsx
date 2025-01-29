import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [admins, setAdmins] = useState([]);

  // Fetch admin list
  useEffect(() => {
    fetch('https://to-cash-backend.onrender.com/getadminlist')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const adminList = data.filter((user) => user.role === 'admin');
          setAdmins(adminList);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch((error) => console.error('Error fetching admins:', error));
  }, []);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    const user = { email };

    fetch('https://to-cash-backend.onrender.com/userLogin/admin', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'Admin Added',
            text: `${email} has been made an admin successfully!`,
          });

          // Refresh admin list
          fetch('https://to-cash-backend.onrender.com/getadminlist')
            .then((res) => res.json())
            .then((updatedAdmins) => {
              const adminList = updatedAdmins.filter((user) => user.role === 'admin');
              setAdmins(adminList);
            });

          setEmail('');
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add admin. Please try again.',
        });
        console.error('Error adding admin:', error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 text-white rounded-lg shadow-[0_2px_18px_rgba(0,0,0,0.15)]">
      <h2 className="text-2xl text-black font-bold mb-4">Make an Admin</h2>

      <form onSubmit={handleAdmin} className="flex gap-4 mb-6">
        <input
          type="email"
          name="email"
          placeholder="Enter email to make admin"
          value={email}
          onBlur={handleOnBlur}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 p-2 text-black border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-[#007cde] hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Make Admin
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-3 text-black" >Admin List</h3>

      <table className="w-full table-auto border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gradient-to-r from-[#01c0c9] to-[#007cde]  text-left">
            <th className="border border-gray-700 px-4 py-2">Name</th>
            <th className="border border-gray-700 px-4 py-2">Email</th>
            <th className="border border-gray-700 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(admins) && admins.length > 0 ? (
            admins.map((admin) => (
                <tr key={admin._id} className="hover:bg-gray-700 hover:text-white">
                <td className="border border-gray-700 px-4 py-2 text-black hover:text-white">
                  {admin.displayName || 'N/A'}
                </td>
                <td className="border border-gray-700 px-4 py-2 text-black hover:text-white">
                  {admin.email}
                </td>
                <td className="border border-gray-700 px-4 py-2 text-black hover:text-white">
                  Admin
                </td>
              </tr>
              
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No admins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;