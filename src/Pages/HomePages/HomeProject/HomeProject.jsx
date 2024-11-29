// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const projects = [
  {
    title: "SBG Mataf",
    candidates: "15,000+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  {
    title: "FIFA World Cup",
    candidates: "3226+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  {
    title: "Hyper Panda",
    candidates: "1000+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  {
    title: "SBG Mataf",
    candidates: "15,000+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  {
    title: "FIFA World Cup",
    candidates: "3226+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  {
    title: "Hyper Panda",
    candidates: "1000+",
    imageUrl: "https://img.freepik.com/premium-vector/technological-background-gears-blue-gradient_760443-103.jpg", // Replace with actual image path
  },
  // Add more items as needed up to 15
];

const HomeProject = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          <span className="text-red-600">03</span> / Projects
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // Enable autoplay with 3-second delay
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{project.title}</h3>
                  <p className="text-red-600 text-xl font-bold mt-2">{project.candidates}</p>
                  <p className="text-gray-600">Candidates Deployed</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeProject;
