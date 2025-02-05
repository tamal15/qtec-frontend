import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const AddsBanner = () => {
    return (
        <div>
            <ScrollToTop/>
            <div className="mt-20 mb-10 md:px-20 text-left">
            
            <div className="flex flex-col md:flex-row">
                <div className="mt-12">
                  <img className="w-[800px]" src="https://media.istockphoto.com/id/1429201424/vector/blog-social-media-platform-influencer-personal-brand-promotion-recent-stories-and-post.jpg?s=612x612&w=0&k=20&c=tROfrRi-btklIadu9ESPOon85w5xjAop_BybZIcO2Lc="/>
                </div>

                <div>
                <div className=" mt-8 p-6 rounded-lg text-center">
                <h2 className="text-xl text-left mt-7">Advertise your brand with millions of visitors.
Only them who want to reach new customers quickly and easily
Banner Dimensions :
More details :</h2>
          <h3 className="text-xl font-bold text-gray-800 mt-6">Questions? Get in touch!</h3>
          <p className="text-gray-600 mt-2">Every day from 10:00 AM to 8:00 PM</p>
          <div className="mt-4 flex flex-col md:flex-row justify-center space-x-8 mb-8">
            <div className="flex  items-center space-x-2 ">
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
        </div>
        </div>
    );
};

export default AddsBanner;