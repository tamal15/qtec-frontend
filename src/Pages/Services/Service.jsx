import ContactBanner from "../AboutPages/AboutAward/ContactBanner/ContactBanner";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import HrService from "./ServiceHr/HrService";
import ServiceAdmin from "./ServiceHr/ServiceAdmin";
import ServiceEmployee from "./ServiceHr/ServiceEmployee";
import ServiceManagement from "./ServiceHr/ServiceManagement";
// import ServiceHr from "./ServiceHr/ServiceHr";

const Service = () => {
    return (
        <div>
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