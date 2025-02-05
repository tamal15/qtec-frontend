import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const MemberShip = () => {
  return (
    <div className="bg-gray-100 py-8">
      <ScrollToTop/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4"> SellFlit Membership Benefits</h1>
              <p className="text-gray-600">
              <div>
              <h3 className="text-lg font-semibold text-gray-800">Our membership plans offers a attractive range of benefits.Exlplore by some easy steps : </h3>
              <p className="text-gray-600 mt-2">*Select a business Category</p>
              <p className="text-gray-600 mt-2">**Pick a Plan</p>
              <p className="text-gray-600 mt-2">**Share yourdetails to us</p>
            </div>
            
              </p>
            </div>
            <div>
              <img
                src="https://assets-v2.lottiefiles.com/a/e84e8ee6-1170-11ee-9647-d3729348d81a/WnrwQzHsg9.gif"
                alt="Membership Benefits"
                className="w-[600px] h-[350px] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up in 3 easy steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">1. What’s your Business Category?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
                {[
                  'Cars',
                  'Fashion & Beauty',
                  'Electronics',
                  'Essentials',
                  'Hobby, Sport & Kids',
                  'Home & Living',
                  'Services',
                  'Jobs',
                  'Mobile Accessories',
                  'Mobiles',
                  'Motorbikes',
                  'Overseas Jobs',
                  'Pets & Animals',
                  'Property For Sale',
                  'Property For Rent',
                  'Business & Industry',
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full mb-2">
                      <i className="text-lg">📦</i>
                    </div>
                    <span className="text-sm text-gray-600 text-center">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">2. Pick a Plan</h3>
              <p className="text-gray-600 mt-2">Choose a plan that suits your business needs.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">3. Tell us about you</h3>
              <p className="text-gray-600 mt-2">Fill in your details to complete the registration process.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of being a Member</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'Automatic Bump Up Ads',
              'Free Top Ads Voucher',
              'Add more Images to your Ad',
              'Your Own Shop on Bikroy',
              'Badges: verified seller and member',
              'Ad Analytics',
              'Super Charged Ad Discovery',
              'Track Buyer Interest',
              'Dedicated Customer Support',
              'Build Trust to your Online Shop',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition">
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full mb-2">
                  <i className="text-lg">🌟</i>
                </div>
                <span className="text-sm text-gray-600 text-center">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
