
const AwardRecognition = () => {
  return (
    <div className="container mx-auto p-6 space-y-16">

      {/* First Section - Image Left, Text Centered, Right-Aligned */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <img
          src="https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg"
          alt="Recognition from Indian PM"
          className="w-full lg:w-[500px] h-[300px] mb-4 lg:mb-0 rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-2">
        <p
  className="text-gray-600 text-lg font-light"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: "28px",
    fontWeight: 200,
    lineHeight: "37px",
    letterSpacing: "5.1px",
  }}
>
            Recognition from Indian PM Shri. Narendra Modi
          </p>
          <div className="h-px w-24 bg-red-500"></div>
        </div>
      </div>

      {/* Second Section - Text Centered, Image Right */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right lg:w-1/2 space-y-2">
        <p
  className="text-gray-600 text-lg font-light"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: "28px",
    fontWeight: 200,
    lineHeight: "37px",
    letterSpacing: "5.1px",
  }}
>
            Recognition from H.E. Saad Zafer S. Al Garny (KSA Consul General)
          </p>
          <div className="h-px w-24 bg-red-500"></div>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg"
          alt="Recognition from KSA Consul General"
          className="w-full lg:w-[500px] h-[300px] mb-4 lg:mb-0 rounded-lg shadow-md"
        />
      </div>

      {/* Third Section - Image Left, Text Centered */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <img
          src="https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg"
          alt="Award from Indian Embassy"
          className="w-full lg:w-[500px] h-[300px] mb-4 lg:mb-0 rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-2">
        <p
  className="text-gray-600 text-lg font-light"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: "28px",
    fontWeight: 200,
    lineHeight: "37px",
    letterSpacing: "5.1px",
  }}
>
            Received an award from Indian Embassy, Riyadh
          </p>
          <div className="h-px w-24 bg-red-500"></div>
        </div>
      </div>

      {/* Centered Quote Section with Full-Width Background Color */}
      <div className="bg-gray-100 py-12 rounded-lg shadow-md">
        <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
          <div className="text-5xl text-blue-400 mb-4">“</div>
          <blockquote className="italic text-gray-500 text-lg mx-auto">
            Excellence is never an accident; it is the result of high intention, sincere effort, intelligent direction, skillful execution, and the vision to see obstacles as opportunities.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AwardRecognition;
