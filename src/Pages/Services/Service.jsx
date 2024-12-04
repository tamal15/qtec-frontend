import ContactBanner from "../AboutPages/AboutAward/ContactBanner/ContactBanner";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import HrService from "./ServiceHr/HrService";
import ServiceAdmin from "./ServiceHr/ServiceAdmin";
import ServiceEmployee from "./ServiceHr/ServiceEmployee";
import ServiceManagement from "./ServiceHr/ServiceManagement";
// import ServiceHr from "./ServiceHr/ServiceHr";

const Service = () => {
    return (
        <div>
            <ScrollToTop />
            <ServiceBanner/>
            <HrService/>
            <ServiceAdmin/>
            <ServiceEmployee/>
            <ServiceManagement/>
            <ContactBanner/>
        </div>
    );
};

export default Service;