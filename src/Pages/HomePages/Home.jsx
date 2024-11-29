import Banner from "./Banner/Banner";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeAward from "./HomeAward/HomeAward";
import HomeClientGallery from "./HomeClientGallery/HomeClientGallery";
import HomeContact from "./HomeContact/HomeContact";
import HomeProject from "./HomeProject/HomeProject";
import HomeService from "./HomeService/HomeService";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";

const Home = () => {
    return (
        <section>
            <div>
            <Banner/>
            <div className="pt-28 w-full   mx-auto px-10 md:px-16">
            <HomeAbout/>

            </div>

            <HomeService/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-0">
            <HomeProject/>

            </div>
            <HomeAward/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-16">
            <HomeTestimonial/>
            <HomeClientGallery/>
            </div>
            <HomeContact/>
            
        </div>
        </section>
    );
};

export default Home;