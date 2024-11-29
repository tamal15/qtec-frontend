
const HomeContact = () => {
  return (
    <section
      className="relative  flex items-center bg-cover bg-center h-[600px]"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg')" }} // Replace with actual path
    >
      {/* Overlay for a darker effect on background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Form Container aligned to the right */}
      <div className="relative z-10 w-full mr-4 ml-4   max-w-lg md:ml-auto md:mr-8 p-8 bg-white bg-opacity-80 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-left">GET IN TOUCH</h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="tel"
            placeholder="Work Phone"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="text"
            placeholder="Organization"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black resize-none"
          ></textarea>
          <button className="w-full px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800">
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
