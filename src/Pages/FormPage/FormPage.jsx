import axios from 'axios';
import  { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
const image_hosting_key = "87e8c93db3b7d5540df8a8f00585cbe9";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const FormPage = () => {

  const [divisions, setDivisions] = useState([]); // State to hold divisions data
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
  const [newloading, setnewLoading] = useState(false); 
  const [districts, setDistricts] = useState([]);
  // const [upazilas, setUpazilas] = useState([]);
  const [thanas, setThanas] = useState([]);
  const {user}=useAuth();
  const phone=user.phoneNumber;
  const name=user.displayName;
  const [categories, setCategories] = useState([]); // State to hold categories data
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [subcategories, setSubcategories] = useState([]); // State for subcategories
  const [selectedSubcategory, setSelectedSubcategory] = useState(""); // State for selected 
  // subcategory
  const [selectedCategoryIcon, setSelectedCategoryIcon] = useState("");


   // Load JSON data dynamically using useEffect
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/service.json"); // Adjust the path to your JSON file
        const data = await response.json();
        setCategories(data.categories); // Set categories data
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

   // Handle Category Change
   const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);

    const category = categories.find((cat) => cat.name === categoryName);
    setSubcategories(category ? category.subcategories : []);
    setSelectedCategoryIcon(category ? category.icon : "");
    setSelectedSubcategory("");
    setFormData((prev) => ({ ...prev, category: categoryName, icon: category ? category.icon : "", })); 
  };

  // Handle Subcategory Change
  const handleSubcategoryChange = (e) => {
    const newsubCategory=e.target.value
    setSelectedSubcategory(newsubCategory);
    setFormData((prev) => ({ ...prev, subCategory: newsubCategory }));
    
  };


   // Load JSON data dynamically using useEffect
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/locations.json"); // Adjust path if needed
          const data = await response.json();
          setDivisions(data.divisions); // Set divisions data
        } catch (error) {
          console.error("Error loading JSON data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    // Handle Division Change
    const handleDivisionChange = (e) => {
      const divisionName = e.target.value;
      setSelectedDivision(divisionName);
  
      const division = divisions.find((div) => div.name === divisionName);
      setDistricts(division ? division.districts : []);
      setSelectedDistrict("");
      // setUpazilas([]);
      // setSelectedUpazila("");
      setThanas([]);
      setSelectedThana("");

      setFormData((prev) => ({ ...prev, division: divisionName })); // Update form data
    };
  
    // Handle District Change
    // const handleDistrictChange = (e) => {
    //   const districtName = e.target.value;
    //   setSelectedDistrict(districtName);
  
    //   const district = districts.find((dist) => dist.name === districtName);
    //   setUpazilas(district ? district.upazilas : []);
    //   setSelectedUpazila("");
    //   setThanas([]);
    //   setSelectedThana("");

    //   setFormData((prev) => ({ ...prev, district: districtName })); // Update form data
    // };
  
    const handleDistrictChange = (e) => {
      const districtName = e.target.value;
      setSelectedDistrict(districtName);
    
      const district = districts.find((dist) => dist.name === districtName);
    
      // Collect thanas from all upazilas within the selected district
      const allThanas = district
        ? district.upazilas.flatMap((upazila) => upazila.thanas)
        : [];
    
      setThanas(allThanas);
      setSelectedThana("");
    
      setFormData((prev) => ({ ...prev, district: districtName }));
    };
    
  
    // Handle Thana Change
    const handleThanaChange = (e) => {
      const thanaName = e.target.value;
      setSelectedThana(thanaName);
    
      setFormData((prev) => ({ ...prev, thana: thanaName })); // Update form data
    };


    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        division: "",
        district: "",
        localArea: "",
        details: "",
        icon: "",
      });
    
      const [step, setStep] = useState(1);
    
      const [formDatas, setFormDatas] = useState({
        condition: "used",
        productStatus:"pending",
        brand: "",
        title:"",
        model: "",
        edition: "",
        features: [],
        description: "",
        price: "",
        images: [],
        name,
        // email:"",
        phone,
        termsAccepted: false,
      });
    
      // const featuresOptions = [
      //   "4G",
      //   "5G",
      //   "Dual SIM",
      //   "Micro SIM",
      //   "Mini SIM",
      //   "USB Type-B Port",
      //   "USB Type-C Port",
      //   "Fast Charging",
      //   "Flash Charging",
      //   "Android",
      //   "Windows",
      //   "iOS",
      //   "Expandable Memory",
      //   "4GB RAM",
      //   "6GB RAM",
      //   "8GB RAM",
      //   "12GB RAM",
      //   "Dual Camera",
      //   "Triple Camera",
      //   "Dual LED Flash",
      //   "Quad LED Flash",
      //   "Bluetooth",
      //   "WiFi",
      //   "GPS",
      //   "Fingerprint Sensor",
      //   "Infrared Port",
      // ];
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleInputChanges = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox" && name === "features") {
          setFormDatas((prev) => ({
            ...prev,
            features: checked
              ? [...prev.features, value]
              : prev.features.filter((feature) => feature !== value),
          }));
        } else if (type === "checkbox" && name === "termsAccepted") {
          setFormDatas((prev) => ({ ...prev, termsAccepted: checked }));
        } else {
          setFormDatas((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files).slice(0, 5 - formDatas.images.length); // Limit to 5 images
        const uploadedImages = [];
      
        for (const file of files) {
          const formData = new FormData();
          formData.append("image", file);
      
          try {
            const response = await axios.post(image_hosting_api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            uploadedImages.push(response.data.data.url);
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }
      
        setFormDatas((prev) => ({
          ...prev,
          images: [...prev.images, ...uploadedImages],
        }));
      };
      
      
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setnewLoading(true);
    
        if (!formDatas.termsAccepted) {
          Swal.fire({
            icon: 'warning',
            title: 'Terms and Conditions',
            text: 'Please accept the terms and conditions before submitting.',
            confirmButtonText: 'OK',
          });
          return;
        }
      
        if (!formData.division || !formData.district  || !formData.thana || !formData.category || !formData.subCategory ) {
          Swal.fire({
            icon: 'warning',
            title: 'Terms and Conditions',
            text: 'Please complete all location fields before submitting.',
            confirmButtonText: 'OK',
          });
          return;
        }

        
        const combinedData = { ...formData, ...formDatas ,name,phone};
    
        try {
          const response = await axios.post("https://servers.sellflit.com/api/form-submit", combinedData);
    
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'সফল!',
              text: 'ডেটা সফলভাবে জমা হয়েছে!',
              confirmButtonText: 'ঠিক আছে',
            });
            setFormData({
              category: "",
              subCategory: "",
              division: "",
              district: "",
              localArea: "",
              details: "",
              icon: "",
            });
            setFormDatas({
              condition: "used",
              brand: "",
              title:"",
              model: "",
              edition: "",
              features: [],
              description: "",
              price: "",
              images: [],
              name,
              // email:"",
              phone,
              termsAccepted: false,
            });
            setStep(1);
            setSelectedDivision("");
            setSelectedDistrict("");
            // setSelectedUpazila("");
            setSelectedThana("");
            setSelectedCategory("");
            setSelectedSubcategory("");
            setSelectedCategoryIcon("");
          } else {
            Swal.fire({
              icon: 'error',
              title: 'ব্যর্থতা!',
              text: 'ডেটা জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।',
              confirmButtonText: 'ঠিক আছে',
            });
          }
        } catch (error) {
          console.error("ডেটা জমা দেওয়ার সময় ত্রুটি:", error);
        }
      };
    

      const handleNextStep = () => {
        // Check if all required fields are filled for Step 1
        if (
          !selectedCategory ||
          !selectedSubcategory ||
          !selectedDivision ||
          !selectedDistrict ||
          // !selectedUpazila ||
          !selectedThana ||
          !formData.localArea
        ) {
          Swal.fire({
            icon: 'warning',
            title: 'Incomplete Form',
            text: 'Please fill out all required types fields before proceeding.',
            confirmButtonText: 'OK',
          });
          
          return;
        }
      
        setStep(2); // Proceed to the next step only if validation passes
      };

      const handleFinalSubmit = async (e) => {
        e.preventDefault();
      
        // Check if all required fields for Step 2 are filled
        if (
          !name ||
          !phone ||
          // !formDatas.email ||
          !formDatas.phone ||
          !formDatas.title ||
          !formDatas.description ||
          !formDatas.price ||
          !formDatas.condition ||
          !formDatas.images.length
        ) {
          Swal.fire({
            icon: 'warning',
            title: 'Incomplete Form',
            text: 'Please fill out all required fields before proceeding.',
            confirmButtonText: 'OK',
          });
          console.log(name,formDatas.title,formDatas.description,formDatas.price,formDatas.condition,formDatas.images.length)
          return;
        }
      
        // Submit form if validation passes
        handleSubmit(e);
      };


      const handleImageRemove = (index) => {
        setFormDatas((prev) => ({
          ...prev,
          images: prev.images.filter((_, i) => i !== index),
        }));
      };
      
      
      

  return (
    <div className="container mx-auto p-4 mt-10">
       <ScrollToTop />
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {/* Step 1: Select Category */}
        {step === 1 && (
          <div>
             {/* Category Selector */}
             <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">
          শ্রেণী নির্বাচন করুন:
        </label>
        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border rounded p-2 w-full"
          >
            <option value="">শ্রেণী নির্বাচন</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {selectedCategoryIcon && (
            <span className="text-2xl">{selectedCategoryIcon}</span>
          )}
        </div>
      </div>
            <div>
            {/* Subcategory Selector */}
      <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">উপ-শ্রেণী নির্বাচন করুন:</label>
        <select
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="border rounded p-2 w-full"
          disabled={!subcategories.length}
        >
          <option value="">উপ-শ্রেণী নির্বাচন</option>
          {subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>
            {/* <div>
            <h2 className="text-lg font-bold mb-4 mt-10">বিভাগ নির্বাচন করুন</h2>
            <select
              name="division"
              value={formData.division}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">বিভাগ নির্বাচন করুন</option>
              <option value="dhaka">ঢাকা</option>
              <option value="chittagong">চট্টগ্রাম</option>
            </select>
            
          </div> */}

          <div>
            {/* Division Selector */}
      <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">বিভাগ নির্বাচন করুন:</label>
        <select
          value={selectedDivision}
          onChange={handleDivisionChange}
          className="border rounded p-2 w-full"
        >
          <option value="">বিভাগ নির্বাচন</option>
          {divisions.map((division) => (
            <option key={division.name} value={division.name}>
              {division.name}
            </option>
          ))}
        </select>
      </div>

      {/* District Selector */}
      <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">জেলা নির্বাচন করুন:</label>
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="border rounded p-2 w-full"
          disabled={!districts.length}
        >
          <option value="">জেলা নির্বাচন</option>
          {districts.map((district) => (
            <option key={district.name} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      {/* Upazila Selector */}
      {/* <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">উপজেলা নির্বাচন করুন:</label>
        <select
          value={selectedUpazila}
          onChange={handleUpazilaChange}
          className="border rounded p-2 w-full"
          disabled={!upazilas.length}
        >
          <option value="">উপজেলা নির্বাচন</option>
          {upazilas.map((upazila) => (
            <option key={upazila.name} value={upazila.name}>
              {upazila.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* Thana Selector */}
      <div className="mb-4">
        <label className="block text-lg font-bold mb-4 mt-10">থানা নির্বাচন করুন:</label>
        <select
          value={selectedThana}
          onChange={handleThanaChange}
          className="border rounded p-2 w-full"
          disabled={!thanas.length}
        >
          <option value="">থানা নির্বাচন</option>
          {thanas.map((thana, index) => (
            <option key={index} value={thana}>
              {thana}
            </option>
          ))}
        </select>
      </div>
            

      <div>
            <h2 className="text-lg font-bold mb-4 mt-10">স্থানীয় এলাকা নির্বাচন করুন</h2>
            <input
              type="text"
              name="localArea"
              value={formData.localArea}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="স্থানীয় এলাকা লিখুন Example: Mirpur/Dhaka"
            />
            
          </div>
          
          </div>
           
           
          </div>
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              পরবর্তী
            </button>
          </div>
        )}

       

        {/* Step 6: Enter Details */}
        {step === 2 && (
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">বিস্তারিত তথ্য দিন</h1>
    
       
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">কন্ডিশন</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="used"
                    checked={formDatas.condition === 'used'}
                    onChange={handleInputChanges}
                  />
                  ব্যবহৃত
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="new"
                    checked={formDatas.condition === 'new'}
                    onChange={handleInputChanges}
                  />
                  নতুন
                </label>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">বিজ্ঞাপন শিরোনাম</label>
                <input
                  type="text"
                  name="title"
                  value={formDatas.title}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="phone name,model,জৈব সার ১০০% অর্গানিক"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">ব্র্যান্ড</label>
                <input
                  type="text"
                  name="brand"
                  value={formDatas.brand}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="ব্র্যান্ড লিখুন"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-medium mb-2">মডেল</label>
                <input
                  type="text"
                  name="model"
                  value={formDatas.model}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="মডেল লিখুন"
                />
              </div>
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">বিবরণ</label>
              <textarea
                name="description"
                value={formDatas.description}
                onChange={handleInputChanges}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="পণ্যের বিবরণ দিন"
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">মূল্য (৳)</label>
              <input
                type="number"
                name="price"
                value={formDatas.price}
                onChange={handleInputChanges}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="পণ্যের মূল্য লিখুন"
              />
            </div>
    
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">ফিচার</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {featuresOptions.map((feature) => (
                  <label key={feature} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature}
                      checked={formDatas.features.includes(feature)}
                      onChange={handleInputChanges}
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div> */}
    
    <div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2">ছবি যোগ করুন (সর্বাধিক ৫)</label>
  <input
    type="file"
    multiple
    accept="image/*"
    onChange={handleImageUpload}
    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
  />
  <p className="text-sm text-gray-500 mt-2">আপনি সর্বাধিক ৫টি ছবি আপলোড করতে পারবেন।</p>
</div>

{/* Image Preview with Remove Button */}
<div className="grid grid-cols-5 gap-2 mt-4">
  {formDatas.images.map((image, index) => (
    <div key={index} className="relative w-full h-24">
      {/* Image */}
      <img
        src={image}
        alt={`Uploaded ${index + 1}`}
        className="w-full h-full object-cover rounded-md"
      />
      {/* Remove Button */}
      <button
        onClick={() => handleImageRemove(index)}
        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
        title="Remove Image"
      >
        ✖
      </button>
    </div>
  ))}
</div>



    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">নাম</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
    
              {/* <div>
                <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
                <input
                  type="email"
                  name="email"
                  value={formDatas.email}
                  onChange={handleInputChanges}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div> */}
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">ফোন নাম্বার</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={handleInputChanges}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="আপনার ফোন নাম্বার লিখুন"
              />
            </div>
    
            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formDatas.termsAccepted}
                  onChange={handleInputChanges}
                />
                আমি শর্তাবলী এবং নীতিমালা গুলো পড়েছি এবং গ্রহণ করছি
              </label>
            </div>
    
            <button
  type="submit"
  onClick={handleFinalSubmit}
  disabled={newloading}
  aria-busy={newloading}
  className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
>
<button>{newloading ? "লোড হচ্ছে..." : "বিজ্ঞাপন পোস্ট করুন"}</button>

</button>

        
        </div>
        )}
      </form>
    </div>
  );
};

export default FormPage;
