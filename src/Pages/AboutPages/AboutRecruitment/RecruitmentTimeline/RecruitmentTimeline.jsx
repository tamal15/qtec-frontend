import { useEffect, useState } from "react";

const RecruitmentTimeline = () => {
  // const steps = [
  //   { title: "Understanding client demands", description: "Recruitment experts at Soundlines clearly evaluate the human resource requirements created by the company and proceed with creating the work plan." },
  //   { title: "Establishing a work plan", description: "We further understand the job description of the workforce required and outline a robust recruitment strategy to attract ideal candidates internationally." },
  //   { title: "Publishing adverts in the newspaper", description: "We publish print and digital advertisements with the best pitch to attract eligible and qualified candidates for the required job positions." },
  //   { title: "Sourcing from an existing data bank", description: "We also churn out qualified candidates from several thousands of profiles from our existing data bank and reach out to them for screening." },
  //   { title: "Screening of shortlisted applicants", description: "We screen the shortlisted candidates’ applications, conduct phone or video interviews, and select the best candidates." },
  //   { title: "Interview procedure", description: "The personal interview process completes seamlessly at Soundlines, thanks to our cutting-edge state-of-the-art infrastructure with meeting rooms & conference halls equipped with the latest technology." },
  //   { title: "Training and practical test", description: "Along with comprehensive safety orientation & productivity evaluation, Soundlines is fully equipped to train candidates & prepare them with a skill recognized by international standards." },
  //   { title: "Conducting Medical examination", description: "Based on the results of a medical examination, employers are able to determine if a candidate is fit for the job." },
  //   { title: "Conducting Medical examination", description: "Based on the results of a medical examination, employers are able to determine if a candidate is fit for the job." },
  //   { title: "Conducting Medical examination", description: "Based on the results of a medical examination, employers are able to determine if a candidate is fit for the job." },
  //   // Add more steps as required
  // ];


  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getrecruitmentprocess`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-light text-gray-700 tracking-wider text-center mb-20">Our Recruitment Process</h1>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-r-2 border-gray-300"></div>

        {/* Timeline cards */}
        <div className="space-y-12">
          {data?.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Connector */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-lg font-semibold z-10">
                {index + 1}
              </div>

              {/* Card Content */}
              <div
                className={`bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 md:mx-0 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
              >
                <h2 className="text-xl font-semibold mb-2">{step?.title}</h2>
                <p className="text-gray-600">{step?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentTimeline;
