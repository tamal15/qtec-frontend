const DetailsHeader = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Dropdown Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <select
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Select Location"
        >
          <option>Select Location</option>
          <option>Dhaka</option>
          <option>Chattogram</option>
        </select>
        <select
          className="border border-gray-300 rounded-md p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Select Category"
        >
          <option>Mobiles</option>
          <option>Wearables</option>
          <option>SIM Cards</option>
        </select>
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border border-gray-300 rounded-md p-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Search"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md w-full md:w-auto transition duration-200">
          Search
        </button>
      </div>
    </header>
  );
};

export default DetailsHeader;
