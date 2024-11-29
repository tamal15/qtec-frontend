import ContactBanner from "../AboutAward/ContactBanner/ContactBanner";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import AboutWhyUs from "./AboutWhyUs/AboutWhyUs";
import BoardMember from "./BoardMember/BoardMember";
import DetailsAboutUs from "./DetailsAboutUs/DetailsAboutUs";
import TeamMember from "./TeamMember/TeamMember";

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner/>
            <div className="pt-20 w-full  mx-auto px-10 md:px-16">
            <DetailsAboutUs/>
            <AboutWhyUs/>
            <BoardMember/>
            <TeamMember/>
          
            </div>

            <ContactBanner/>
           
        </div>
    );
};

export default AboutUs;