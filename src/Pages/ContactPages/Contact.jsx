import ContactBanner from "../AboutPages/AboutAward/ContactBanner/ContactBanner";
import AddressContact from "./AddressContact/AddressContact";
import ContactUsBanner from "./ContactusBanner/ContactUsBanner";
import TeamContact from "./TeamContact/TeamContact";

const Contact = () => {
    return (
        <div>
             <ContactUsBanner/>
             <div className="pt-28 w-full md:w-[1200px] 2xl:w-[1400px] mx-auto px-10 md:px-0">
             <AddressContact/>
             <TeamContact/>
             </div>
             <ContactBanner/>
           
        </div>
    );
};

export default Contact;