import Slider from "./Slider";
import DetailsProduct from "./DetailsProduct";
import PropTypes from "prop-types";

const MainContent = ({ data }) => {
  return (
    <div className="flex-1 p-4 ">
      <Slider />
      <DetailsProduct data={data} />
    </div>
  );
};

MainContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, 
};
export default MainContent;
