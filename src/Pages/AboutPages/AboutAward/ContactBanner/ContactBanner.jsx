
const ContactBanner = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center text-white px-4"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg')", // Replace with the actual image URL
      }}
    >
      {/* Overlay for darker background */}
      <div className="bg-black bg-opacity-50 absolute inset-0"></div> 
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-semibold mb-4">LETS HEAR YOU!</h1>
        <p className="text-lg mb-6 max-w-xl">
          Ready to take it a step further? Let’s start talking about your project or idea and find out how we can help you.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          REQUEST A FREE QUOTE
        </button>
      </div>
    </div>
  );
};

export default ContactBanner;
