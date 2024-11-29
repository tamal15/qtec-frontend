import ContactBanner from "../AboutAward/ContactBanner/ContactBanner";
import ClienteleAbout from "./ClienteleAbout/ClienteleAbout";
import ClienteleBanner from "./ClienteleBanner/ClienteleBanner";
import ClienteleKsa from "./ClienteleKsa/ClienteleKsa";
import ClienteleKuwait from "./ClienteleKsa/ClienteleKuwait";
import ClienteleQatar from "./ClienteleKsa/ClienteleQatar";
import ClienteleUae from "./ClienteleKsa/ClienteleUae";

const AboutClientele = () => {
    return (
        <div>
            <ClienteleBanner/>
            
            <div className="pt-10 w-full  mx-auto px-10 md:px-16">
            <ClienteleAbout/>
            <ClienteleKsa/>
            <ClienteleUae/>
            <ClienteleQatar/>
            <ClienteleKuwait/>
            
            </div>
            <ContactBanner/>
            
        </div>
    );
};

export default AboutClientele;