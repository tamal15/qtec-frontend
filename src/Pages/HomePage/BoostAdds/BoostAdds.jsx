import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const BoostAdds = () => {
    return (
        <div>
         <ScrollToTop/>
<div className="max-w-6xl mb-10 mx-auto px-4 sm:px-6 lg:px-8 md:mt-20 mt-20">
        <div className="text-center mb-8 mt-10">
          <h1 className="text-2xl font-bold text-gray-800 m">Core detailing on  SellFlit</h1>
          <p className="text-gray-600 mt-2">Make your sale faster by multiple Boost Ad options!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-green-600">📄</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Top Ads</h3>
            </div>
            <p className="text-gray-600 mt-2">
            Top Ads are larger, highlighted  and labeled with Top Ad icon.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-blue-600">📷</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Urgent ads</h3>
            </div>
            <p className="text-gray-600 mt-2">
            Urgent ads are highlighted marker with Urgent ads icon
            </p>
          </div>

          

       
        </div>

       
      </div>
            
        </div>
    );
};

export default BoostAdds;