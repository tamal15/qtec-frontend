// import DetailsHeader from "./DetailsHeader";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ListCategory from "./ListCategory/ListCategory";
import ListMain from "./ListContent/ListMain";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";

const AllAds = () => {

  // States to track selected filters
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [selectedDivision, setSelectedDivision] = useState(null);

  // Filtered data based on selected subcategory and division
//   const filteredData = data.filter((item) => {
//     const matchesSubCategory = selectedSubCategory ? item.subCategory === selectedSubCategory : true;
//     const matchesDivision = selectedDivision ? item.division === selectedDivision : true;
//     return matchesSubCategory && matchesDivision;
//   });

  return (
    <div className=" min-h-screen md:mt-12 mt-20">
       <ScrollToTop />
      {/* Header Section */}
      {/* <DetailsHeader /> */}

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full bg-white shadow-md rounded-md">
          <ListCategory
            // data={data}
            // setSelectedSubCategory={setSelectedSubCategory}
            // setSelectedDivision={setSelectedDivision}
          />
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 w-full bg-white shadow-md rounded-md">
          <ListMain
        //   data={filteredData} 
          />
        </div>
      </div>
    </div>
  );
};

export default AllAds;
