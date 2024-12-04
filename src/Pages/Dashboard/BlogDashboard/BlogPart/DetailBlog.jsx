import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailBlog = () => {
    const { id } = useParams();
    const [banner, setBanner] = useState({});

    useEffect(() => {
        fetch(`https://webi-bacend.onrender.com/editblogpart/${id}`)
          .then((res) => res.json())
          .then((data) => setBanner(data))
          .catch((error) => console.error("Error fetching banner:", error));
      }, [id]);

      console.log(banner)

    return (
       <div>
         <div className="pt-28 w-full  mx-auto px-10 md:px-16 mb-20">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div>
                    <img className="w-[470px] h-[430px]" src={banner?.image}/>
                </div>
                <div>
                    <h6 style={{
          fontWeight: 700,
          whiteSpace: 'pre-line',
          lineHeight: 1,
        }}>{banner?.details}</h6>
                </div>
            </div>
        </div>

       </div>
    );
};

export default DetailBlog;