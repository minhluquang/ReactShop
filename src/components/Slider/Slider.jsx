import Carousel from "react-bootstrap/Carousel";

import bannerKids from "../../assets/images/banner_kids.png";
import bannerMens from "../../assets/images/banner_mens.png";
import bannerKWomen from "../../assets/images/banner_women.png";

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={bannerKids} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerMens} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerKWomen} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
