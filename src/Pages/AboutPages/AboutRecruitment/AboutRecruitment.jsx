import ContactBanner from "../AboutAward/ContactBanner/ContactBanner";
import RecruitmentBanner from "./RecruitmentBanner/RecruitmentBanner";
import RecruitmentProcess from "./RecruitmentProcess/RecruitmentProcess";
import RecruitmentTimeline from "./RecruitmentTimeline/RecruitmentTimeline";

const AboutRecruitment = () => {
    return (
        <div>
            <RecruitmentBanner/>
            <div className="pt-10 w-full  mx-auto px-10 md:px-16">
                <RecruitmentProcess/>
            <RecruitmentTimeline/>
            </div>
            <ContactBanner/>
            
        </div>
    );
};

export default AboutRecruitment;