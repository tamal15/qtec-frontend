import ScrollToTop from "../ScrollToTop/ScrollToTop";
import BlogBanner from "./BlogBanner/BlogBanner";
import BlogCardSection from "./BlogCardSection/BlogCardSection";

const Blog = () => {
    return (
        <div>
            <ScrollToTop />
           <BlogBanner/>
           <div className="pt-20 w-full  mx-auto px-10 md:px-16">
           <BlogCardSection/>
           </div>
          
        </div>
    );
};

export default Blog;