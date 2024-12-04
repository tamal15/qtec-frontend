import ContactBanner from "../AboutPages/AboutAward/ContactBanner/ContactBanner";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import CarerBanner from "./CareerBanner/CareerBanner";
import CareerForm from "./CareerWork/CareerForm";
import CareerGlobal from "./CareerWork/CareerGlobal";
import CareerWork from "./CareerWork/CareerWork";

const Career = () => {
    return (
        <div>
            <ScrollToTop />
            <CarerBanner/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-16">
            <CareerWork/>
            <CareerGlobal/>
            <CareerForm/>
            </div>
            <ContactBanner/>
           
        </div>
    );
};

export default Career;