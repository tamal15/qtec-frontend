import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { useTranslation } from "react-i18next";

const SearchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  // const email = user.email;
  const phone = user.phoneNumber;
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch only the logged-in user's data
        const response = await axios.get(
          `https://servers.sellflit.com/api/search-terms?phone=${phone}`
        );
        setData(response.data); // Set the data for the logged-in user
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [phone]); // Dependency on email

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      // Replace with your actual delete API endpoint
      await axios.delete(`https://servers.sellflit.com/api/search-terms/${id}`);
      setData(data.filter((item) => item._id !== id)); // Remove item from state
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>; // Loading state
  }

  return (
    <div className="p-4 md:p-8 shadow w-full">
      {data.length === 0 ? (
        // Show this message if there are no saved searches
        <div className="text-center">
           <h2 className="text-2xl font-bold mb-4">{t("noSavedSearches")}</h2>
            <p className="text-gray-600 mb-4 text-xl">{t("savedSearchHint")}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center mx-auto">
              <span className="mr-2">{t("saveSearch")}</span>
            </button>
        </div>
      ) : (
        // Render saved searches
        <div>
          {/* Header */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-left">
            সেট করা সার্চ
          </h2>

          {/* List */}
          {data.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-300 py-4"
            >
              {/* Left Section */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 text-left">
                  {item.searchTerm}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-left">
                  মোবাইল, ফলাফল বাইরে করে নিন শ্রেণী মিল
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`notification-${item._id}`}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`notification-${item._id}`}
                    className="text-sm md:text-base text-gray-700"
                  >
                    নতুন বিজ্ঞাপনের জন্য প্রতিদিন নোটিফিকেশন পাঠান
                  </label>
                </div>
              </div>

              {/* Right Section */}
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-4 md:mt-0 flex items-center justify-center text-red-500 hover:text-red-600"
              >
                <FaTrash className="text-xl md:text-2xl" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchList;
