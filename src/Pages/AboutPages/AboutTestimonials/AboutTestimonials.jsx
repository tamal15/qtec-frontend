import ContactBanner from "../AboutAward/ContactBanner/ContactBanner";
import TestimonialBanner from "./TestimonialBanner/TestimonialBanner";
import TestimonialClient from "./TestimonialClient/TestimonialClient";
import TestimonialGroup from "./TestimonialGroup/TestimonialGroup";

const AboutTestimonials = () => {
    return (
        <div>
            <TestimonialBanner/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-16">
            <TestimonialGroup/>
            <TestimonialClient/>
           
            </div>
            <ContactBanner/>
          
            
        </div>
    );
};

export default AboutTestimonials;