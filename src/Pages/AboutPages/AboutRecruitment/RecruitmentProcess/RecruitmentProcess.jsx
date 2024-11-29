
const RecruitmentProcess = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="flex items-center justify-center mb-6">
        {/* Red Line */}
        <div className="w-16 h-1 bg-red-500 mr-4"></div>
        {/* Title Text */}
        <h1 className="text-3xl md:text-4xl font-light text-gray-700 tracking-wider">
          Our Remarkable Recruitment Process
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center text-gray-600 space-y-4">
        <p>
          The key to completing projects is employing qualified personnel with the necessary skillsets.
          However, there is a persistent shortage of trained, skilled, and qualified labor. Our constantly
          evolving and adaptable market necessitates the employment of a productive workforce to achieve
          optimal results.
        </p>
        <p>
          We recognize this need, hence Soundlines caters to providing comprehensive Manpower Supply
          services. We follow a strategic and scalable model of recruitment to ensure a step-by-step
          approach as mentioned below.
        </p>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
