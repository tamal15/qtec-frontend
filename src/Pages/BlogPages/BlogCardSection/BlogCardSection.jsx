import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const BlogCardSection = () => {
  // Sample data for demonstration purposes
  const itemsPerPage = 6;
  // const data = [
  //   { id: 1, title: 'Soundlines Global expands international workforce services in Poland and Serbia.', date: 'November 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 2, title: 'Breaking news! Our workforce contribution to the BAPS temple project...', date: 'November 11, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 3, title: 'The Impact of Technological Advancements on Healthcare...', date: 'September 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 4, title: 'Soundlines Global expands international workforce services in Poland and Serbia.', date: 'November 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 5, title: 'Breaking news! Our workforce contribution to the BAPS temple project...', date: 'November 11, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 6, title: 'The Impact of Technological Advancements on Healthcare...', date: 'September 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 7, title: 'The Impact of Technological Advancements on Healthcare...', date: 'September 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   { id: 8, title: 'The Impact of Technological Advancements on Healthcare...', date: 'September 12, 2024', image: 'https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg' },
  //   // Add more items as needed
  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getblogpart`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on the search term
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate data
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const displayedItems = filteredData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-12 flex justify-center">
  <input
    type="text"
    placeholder="Search..."
    className="p-3 border-4 border-blue-300  rounded-full w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300 ease-in-out"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {displayedItems.map((item,index) => (
           <Link
           to={`/blogDetails/${item._id}`}
           key={index}
           className="block hover:shadow-lg transition-shadow duration-300"
         >
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.date}</p>
              <button className="text-blue-500 mt-2">Read More</button>
            </div>
          </div>
           </Link>
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination flex justify-center mt-4'}
        pageClassName={'mx-1'}
        pageLinkClassName={'px-3 py-1 border rounded hover:bg-gray-200'}
        previousLinkClassName={'px-3 py-1 border rounded'}
        nextLinkClassName={'px-3 py-1 border rounded'}
        activeLinkClassName={'bg-gray-300'}
      />
    </div>
  );
};

export default BlogCardSection;
