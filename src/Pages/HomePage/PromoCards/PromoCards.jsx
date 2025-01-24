import { Link } from "react-router-dom";

const PromoCards = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* First Card */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://img.icons8.com/color/48/000000/money-bag.png"
            alt="Money Bag Icon"
            className="w-12 h-12"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            অর্থ উপার্জন শুরু করুন!
          </h3>
          <p className="text-gray-600 mb-4">
            আপনার কাছে বিক্রি করার কিছু আছে? আপনার প্রথম বিজ্ঞাপনটি পোস্ট করুন এবং অর্থ আয় করুন!
          </p>
          <Link to="/uploadcategory">
          <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600">
            + ফ্রি বিজ্ঞাপন দিন
          </button>
          </Link>
         
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://img.icons8.com/color/48/000000/megaphone.png"
            alt="Megaphone Icon"
            className="w-12 h-12"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            বিজ্ঞাপন বুস্ট করুন
          </h3>
          <p className="text-gray-600 mb-4">
            আপনার বিজ্ঞাপনটি আরও বেশি মানুষকে দেখানোর জন্য এটি বুস্ট করুন এবং
            দ্রুত বিক্রি করুন!
          </p>
          <Link to="/accounts">
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600">
            আরও জানুন →
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
