import AwardRecognition from "./AwardRecognition/AwardRecognition";
import AwardStatus from "./AwardStatus/AwardStatus";
import BannerAward from "./BannerAward";
import ClientAward from "./ClientAward/ClientAward";
import ContactBanner from "./ContactBanner/ContactBanner";

const AboutAward = () => {
    return (
        <div>
            <BannerAward/>
            <div className="pt-28 w-full  mx-auto px-10 md:px-16">
            <AwardRecognition/>
            </div>
           <AwardStatus/>
           <div className="pt-28 w-full  mx-auto px-10 md:px-16">
           <ClientAward/>

           </div>
           <ContactBanner/>
        </div>
    );
};

export default AboutAward;