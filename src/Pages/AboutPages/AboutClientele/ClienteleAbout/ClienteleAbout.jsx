const ClienteleAbout = () => {
    return (
      <div className="container mx-auto py-12 px-4 md:px-0 max-w-6xl text-left">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 flex  mb-4">
          <span className="relative mr-2">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-[1px] bg-orange-500"></span>
          </span>
          Clientele
        </h2>
        <p className="text-gray-600  md:text-base leading-relaxed " style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 200,
    fontSize:"20px"
  }}>
          We, at Soundlines, believe in building a strong network and everlasting connections; which is why we pride ourselves on deploying over 80,000+ candidates and serving 2,000+ clients over the years. We provide tailored solutions to help companies build high-performing businesses. We are not limited to just recruiting blue-collar and white-collar manpower globally, but we also provide an array of HR outsourcing solutions and excellent support services for Company formation and Business set-up across the GCC.
        </p>
      </div>
    );
  };
  
  export default ClienteleAbout;
  