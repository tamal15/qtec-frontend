  
const ContactUsBanner = () => {
    return (
      <div
        className="relative w-full h-[300px] md:h-[300px] lg:h-[380px] bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg')", // Replace with the actual image URL
        }}
      >
        {/* Overlay for a darker effect over the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Centered Text */}
        <div className="relative z-10 text-white text-center px-4 mt-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Contact Us</h1>
        </div>
      </div>
    );
  };
  
  export default ContactUsBanner;
  