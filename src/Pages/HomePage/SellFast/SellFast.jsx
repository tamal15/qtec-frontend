import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const SellFast = () => {
  return (
    <div className="bg-gray-100 py-8">
      <ScrollToTop/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-10 mt-20">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Core detailing on  SellFlit</h1>
          <p className="text-gray-600 mt-2">Add core details of your product,Include keywords and information that buyers will be interested in.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-green-600">📄</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">First the visionary</h3>
            </div>
            <p className="text-gray-600 mt-2">
            Use clear photos of the item you are selling.A good photo can boost your sale magically.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-blue-600">📷</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Smart pricing</h3>
            </div>
            <p className="text-gray-600 mt-2">
            Browse similar ads and choose a competitive price.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-yellow-600">💲</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Attract more</h3>
            </div>
            <p className="text-gray-600 mt-2">
            Boost ad and explore more views and interested buyers for your ad.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <i className="text-2xl text-purple-600">📈</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Boost your ads!</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Once your ad is created, boost it to get up to 10 times more views and interested buyers for your ad. The higher the demand, the better your chances of selling fast for the price that you want.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 mt-8 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-800">Questions? Get in touch!</h3>
          <p className="text-gray-600 mt-2">Every day from 10:00 AM to 8:00 PM</p>
          <div className="mt-4 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <i className="text-green-600 text-xl">📞</i>
              <span className="text-gray-800">01680-564154</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="text-blue-600 text-xl">✉️</i>
              <span className="text-gray-800">ethanfaisul@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellFast;