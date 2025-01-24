import Navber from "../../Shared/Navber/Navber";
import AboutWhy from "../AboutWhy/AboutWhy";
import BannerParts from "../BannerParts/BannerParts";
import Categoryspart from "../CategoryPart/Categoryspart";
import PromoCards from "../PromoCards/PromoCards";
import ToggleDescription from "./ToggleDescription/ToggleDescription";

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Navber/>
            <BannerParts/>
            <Categoryspart/>
            <PromoCards/>
            <AboutWhy/>
           
            <ToggleDescription/>
        </div>
    );
};

export default Home;