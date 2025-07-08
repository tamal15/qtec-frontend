import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Navber from "../../Shared/Navber/Navber";
import Slider from "../CategoryPart/Slider";
import LastCollection from "../LastCollection/LastCollection";
import ProductShow from "../ProductShow/ProductShow";

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Navber/>
            <ScrollToTop />
            {/* <BannerParts/> */}
            <Slider/>
            {/* <Categoryspart/> */}
            <ProductShow/>
           
           
        </div>
    );
};

export default Home;