import ContactBanner from "../AboutPages/AboutAward/ContactBanner/ContactBanner";
import CareVideo from "./CareVideo/CareVideo";
import EventCareBanner from "./EventCareBanner/EventCareBanner";

const Event = () => {
    return (
        <div>
            <EventCareBanner/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-16">
            <CareVideo/>
            </div>
            <ContactBanner/>
          
        </div>
    );
};

export default Event;