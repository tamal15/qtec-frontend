const DetailsAboutUs = () => {
    return (
      <div className="container mx-auto p-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">About us</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-4"></div>
        </div>
  
        {/* Content Section */}
        <div className="text-gray-700">
          <p className="mb-4">
            Soundlines was founded more than 20 years ago with a pioneering spirit and lofty objective: to
            navigate the changing human resource landscape and create a positive business impact for our
            clients by delivering unmatched <span className="text-red-500 font-semibold">comprehensive HR services</span>.
          </p>
          <p className="mb-6">
            In pursuit of our ambition to become the one-stop solution for all your <span className="text-red-500 font-semibold">
            human resources and manpower needs</span>, we have undergone remarkable development over the past few years.
          </p>
  
          {/* List Section */}
          <h3 className="font-semibold mb-3">Here’s what sets us apart:</h3>
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              We currently have our presence across India, Nepal, Morocco, Bangladesh, the Philippines, Sri Lanka,
              Nigeria, Kenya, Uganda, Ghana, Indonesia, and Egypt.
            </li>
            <li className="mb-2">
              We are a UAE and KSA-based recruitment, outsourcing, fit-out, and construction firm with an
              NSDC-approved evaluation center.
            </li>
            <li className="mb-2">
              We are a UAE and KSA-based MEP contracting company with two decades of experience.
            </li>
            <li className="mb-2">
              Enhanced relationship with MEGA Recruitment Companies and Government Bodies in Saudi Arabia
              has allowed us to give exceptional services to our clients with cost optimization, rapid turnarounds,
              and faster growth.
            </li>
            <li className="mb-2">
              Established end-to-end consultancy services in the GCC, where we advise enterprises on
              business setup and workforce needs (right from visas and work permits to legal compliances).
            </li>
            <li className="mb-2">
              Soundlines serves the Chinese Gulf companies with manpower supply. During the Covid19 pandemic,
              we deployed Indian medical staff to the Gulf.
            </li>
            <li className="mb-2">
              Soundlines Recruitment is approved by Qatar’s Supreme Committee, to recruit.
            </li>
            <li className="mb-2">
              We have provided labor for iconic projects like Expo 2020, FIFA World Cup 2022, and Vision 2030.
            </li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default DetailsAboutUs;
  