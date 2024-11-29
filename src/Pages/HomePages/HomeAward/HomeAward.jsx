// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

// Tailwind CSS setup


const ClientAwards = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/getawardhome`
        );
        const result = await response.json();
        setData(result);
        // setLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-10">
          <span className="text-red-500">04</span> / Client Awards
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex justify-center items-center"
        >
          {data.map((award, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
                <img src={award.image} alt={award.title} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-200 mt-2">{award.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientAwards;
