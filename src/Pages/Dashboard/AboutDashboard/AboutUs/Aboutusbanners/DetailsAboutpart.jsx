import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DetailsAboutpart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://webi-bacend.onrender.com/getdetailssaboutpart`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-600 mt-10">Loading...</p>
      ) : (
        <section>
          <div className="container mx-auto px-4 sm:px-8 overflow-x-auto">
            <div className="py-8">
              <div className="flex items-center gap-5 my-5">
                <h2 className="text-lg md:text-2xl font-semibold leading-tight">
                  About Details Part
                </h2>
              </div>

              <div className="min-w-[400px] md:min-w-[650px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-around bg-gray-100 py-3 my-3 rounded-md">
                 
                 
                  <div className="w-[50%]">
                    <p className="text-blue-600 font-semibold text-center">Details</p>
                  </div>
                  <div className="w-[10%]">
                    <p className="text-blue-600 font-semibold text-center">Action</p>
                  </div>
                </div>

                {/* Data Rows */}
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-around shadow-md py-3 my-3 rounded-md"
                  >
                    {/* Title */}
                   

                    {/* Image */}
                   

                    {/* Details */}
                    <div className="w-[50%]">
                      <p>
                        <strong>Text:</strong> {item.text || "N/A"}
                      </p>
                      <p>
                        <strong>Highlighted Text 1:</strong>{" "}
                        {item.highlightedText1 || "N/A"}
                      </p>
                      <p>
                        <strong>Text 2:</strong> {item.text2 || "N/A"}
                      </p>
                      <p>
                        <strong>Highlighted Text 2:</strong>{" "}
                        {item.highlightedText2 || "N/A"}
                      </p>
                      <p>
                        <strong>List Title:</strong> {item.listTitle || "N/A"}
                      </p>
                      <ul className="list-disc pl-6">
                        {item.list?.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div className="w-[10%] flex justify-center">
                      <NavLink
                        to={`/dashboard/editsdetailsaboutparts/${item._id}`}
                      >
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-500 text-white text-xl duration-300 active:scale-90">
                          <FaPencilAlt />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailsAboutpart;
