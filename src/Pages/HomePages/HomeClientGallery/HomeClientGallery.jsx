
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const HomeClientGallery = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/gethomesclients`
        );
        const result = await response.json();
        setDatas(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://webi-bacend.onrender.com/getcategoryhomesclients`
        );
        const result = await response.json();
        setCategory(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  const [activeCategory, setActiveCategory] = useState('all');

  // Filter displayed data based on the selected category
  const displayedData =
    activeCategory === 'all'
      ? category
      : category?.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
       <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          <span className="text-red-600">06</span> / Clients
        </h2>
      <div className="flex justify-center flex-wrap space-x-4 mt-10 mb-8">
        {datas?.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 text-sm font-medium rounded-md  transition-all mb-2 duration-300 ${
              activeCategory === category.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-700 hover:text-blue-600'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {displayedData.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-center border p-2 rounded-lg shadow-sm bg-white"
          >
            <img src={company.image} alt={company.name} className="h-24 w-44" />
          </div>
        ))}
       
      </div>

      <div className='flex justify-center items-center'>
        <Link to="/aboutclientele">
        <button className="mt-8 px-6 py-2 bg-black text-white  font-semibold rounded-lg hover:bg-gray-800">
          to view more &rarr;
        </button>
        </Link>
        </div>
    </div>
  );
};

export default HomeClientGallery;
