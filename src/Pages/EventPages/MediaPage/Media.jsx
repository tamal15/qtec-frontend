import ContactBanner from '../../AboutPages/AboutAward/ContactBanner/ContactBanner';
import MediaBanner from './MediaBanner/MediaBanner';
import MediaGallery from './MediaGallery/MediaGallery';

const Media = () => {
    return (
        <div>
            <MediaBanner/>
            <div className="pt-28 w-full mx-auto px-10 md:px-16">
            <MediaGallery/>
            </div>
            <ContactBanner/>
            
        </div>
    );
};

export default Media;