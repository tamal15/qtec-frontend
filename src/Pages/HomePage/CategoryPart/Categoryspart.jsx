import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerParts from "../BannerParts/BannerParts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Categoryspart = () => {
  const [data, setData] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [ setSliderRef] = useState(null);
  const categoryMapping = {
    মোবাইল: "mobile",
    "মোবাইল ফোন": "mobile phone",
    "মোবাইল ফোন অ্যাক্সেসরিজ": "mobile phone accessories",
    "সিম কার্ড": "sim card",
    ওয়্যারেবলস: "wearables",
    "মোবাইল ফোন সার্ভিস": "mobile phone service",
  
    ইলেকট্রনিক্স: "electronics",
    "ডেস্কটপ কম্পিউটার": "desktop computer",
    ল্যাপটপ: "laptop",
    "ল্যাপটপ ও কম্পিউটার অ্যাক্সেসরিজ": "laptop and computer accessories",
    "ট্যাবলেট ও অ্যাক্সেসরিজ": "tablet and accessories",
    টিভি: "tv",
    "টিভি ও ভিডিও অ্যাক্সেসরিজ": "tv and video accessories",
    "হোম অ্যাপ্লায়েন্স": "home appliance",
    "ক্যামেরা, ক্যামেরাড্রোন ও অ্যাক্সেসরিজ": "camera, camera drone, and accessories",
    "এসি ও হোম ইলেকট্রনিক্স": "ac and home electronics",
    "অডিও ও সাউন্ড সিস্টেম": "audio and sound system",
    "ভিডিও গেম কনসোল ও অ্যাক্সেসরিজ": "video game console and accessories",
    ফটোকপিয়ার: "photocopier",
    "অন্যান্য ইলেকট্রনিক্স": "other electronics",
  
    যানবাহন: "vehicles",
    মোটরসাইকেল: "motorcycle",
    "মোটরসাইকেল পার্টস": "motorcycle parts",
    গাড়ি: "car",
    "গাড়ির যন্ত্রাংশ": "car parts",
    "সাইকেল ও পার্টস": "bicycle and parts",
    "ট্রাক, পিকআপ ও যন্ত্রাংশ": "truck, pickup, and parts",
    "জাহাজ, নৌকা ও যন্ত্রাংশ": "ship, boat, and parts",
    "অন্যান্য যানবাহন": "other vehicles",
  
    "ভাড়া সার্ভিস": "rental service",
    "বাসা ভাড়া": "house rent",
    "দোকান ভাড়া": "shop rent",
    "গাড়ি ভাড়া": "car rent",
    "অন্যান্য ব্যবসায়িক পণ্য": "other business products",
  
    প্রপার্টি: "property",
    ফ্ল্যাট: "flat",
    বাড়ি: "house",
    জমি: "land",
    "দোকান ও অফিস": "shop and office",
    "অন্যান্য প্রপার্টি": "other property",
  
    "হোম ডেকোর": "home decor",
    ফার্নিচার: "furniture",
    "ঘরের সাজসজ্জা": "home decoration",
    "কিচেন ও ডাইনিং": "kitchen and dining",
    "বাথরুম এক্সেসরিজ": "bathroom accessories",
    "বাড়ির সরঞ্জাম": "household tools",
    "অন্যান্য হোম আইটেম": "other home items",
  
    "ছেলেদের ফ্যাশন": "men's fashion",
    "ছেলেদের পোশাক": "men's clothing",
    জুতো: "shoes",
    ঘড়ি: "watch",
    সানগ্লাস: "sunglasses",
    "পুরুষদের গ্রুমিং": "men's grooming",
  
    "মেয়েদের ফ্যাশন": "women's fashion",
    "মেয়েদের পোশাক": "women's clothing",
    জুয়েলারি: "jewelry",
    মেকআপ: "makeup",
    "সৌন্দর্য ও স্কিন কেয়ার": "beauty and skincare",
  
    "পোষা প্রাণী": "pets",
    "পোষা প্রাণী খাবার": "pet food",
    "পোষা প্রাণীর সরঞ্জাম": "pet supplies",
    "জীবজন্তু ও পাখি": "livestock and birds",
  
    "শখ, খেলাধুলা": "hobby and sports",
    খেলনা: "toys",
    "খেলাধুলার সরঞ্জাম": "sports equipment",
    সাইকেল: "bicycle",
    বই: "books",
    "অন্যান্য শখের পণ্য": "other hobby items",
  
    শিক্ষা: "education",
    টিউশনি: "tuition",
    "অনলাইন কোর্স": "online course",
    "স্কুল সরঞ্জাম": "school supplies",
  
    "নিত্য প্রয়োজনীয় সামগ্রী": "daily necessities",
    কাঁচামাল: "raw materials",
    মুদিখানা: "grocery",
    খাবারদাবার: "food",
    "ঘর পরিষ্কার সামগ্রী": "house cleaning supplies",
  
    সার্ভিস: "services",
    "কুরিয়ার সার্ভিস": "courier service",
    "ইভেন্ট ম্যানেজমেন্ট": "event management",
    "হোম সার্ভিস": "home service",
    "আইটি সার্ভিস": "it service",
    "অন্যান্য সার্ভিস": "other services",
  
    "কৃষি পণ্য": "agricultural products",
    "ফল ও শাকসবজি": "fruits and vegetables",
    "কৃষি যন্ত্রপাতি": "agricultural machinery",
    "বীজ ও সার": "seeds and fertilizer",
    "অন্যান্য কৃষি পণ্য": "other agricultural products",
  
    অন্যান্য: "others",
    সব: "all",
  };
  
   

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://to-cash-backend.onrender.com/getcategoryparts`);
        const result = await response.json();

        // Calculate category counts
        const counts = {};
        result.forEach((item) => {
          counts[item.category] = (counts[item.category] || 0) + 1;
        });

        setData(result);
        setCategoryCounts(counts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    const filteredData = data.filter((item) => item.category === category);
    navigate(`/category/${category}`, { state: { data: filteredData } });
  };

  // Filter categories based on search query
  const filteredCategories = Object.keys(categoryCounts).filter((category) => {
    // const lowerCaseCategory = category.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase(); // Convert search query to lowercase

    // Check if search query matches the category in Bengali or English
    const isMatchInBengali = category.includes(lowerCaseQuery);
    const isMatchInEnglish =
      categoryMapping[category]?.toLowerCase().includes(lowerCaseQuery);

    return isMatchInBengali || isMatchInEnglish;
  });


   // Slider settings for mobile devices
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 2, // Default number of slides to scroll
    arrows: true,
    swipe: true,
    touchMove: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // Large tablets and small laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 3, // Show 3 categories
          slidesToScroll: 2, // Scroll 1 category at a time
        },
      },
    ],
  };
  
  
  return (
    <div>
      {/* banner part atart */}
      <BannerParts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* banner part end */}


      {/* category part start  */}

      <div className=" md:p-6 md:px-24 md:mt-20 -mt-16 bg-gray-50">
    <h1 className="md:text-3xl text-xl  font-extrabold text-gray-900 md:mb-8 mb-2 text-center">
      Browse Items by Category
    </h1>


     {/* Mobile slider */}
     {/* Mobile slider */}
       {/* Mobile slider */}
       <div className="overflow-hidden">
  <div className="md:hidden">
    <Slider ref={setSliderRef} {...sliderSettings}>
      {filteredCategories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category)}
          className="flex flex-col items-center justify-center p-4 -mt-4 md:mt-0 h-32 rounded-xl transition-transform transform hover:scale-105"
        >
          <span className="text-4xl text-indigo-600 mb-2  icon-span ">
            {data.find((item) => item.category === category)?.icon || "📦"}
          </span>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
            <p className="text-sm text-gray-500">
              {categoryCounts[category]} ads
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>






    {/* large device  */}
    <div className="hidden    md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredCategories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category)}
          className="group flex flex-row md:flex-row items-center p-6 bg-white h-32 shadow-lg rounded-xl hover:shadow-xl transition transform hover:scale-105 cursor-pointer border border-gray-200"
        >
          <span className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-800">
            {data.find((item) => item.category === category)?.icon || "📦"}
          </span>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
              {category}
            </h2>
            <p className="text-sm text-gray-500 text-left group-hover:text-gray-700">
              {categoryCounts[category]} ads
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
      {/* category part en d  */}


    </div>
  
  );
};

export default Categoryspart;
