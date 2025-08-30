import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/scrollImages/scrollimg1.png";
import img2 from "../../assets/scrollImages/scrollimg2.png";
import img3 from "../../assets/scrollImages/scrollimg3.png";
import img4 from "../../assets/scrollImages/scrollimg4.png";
import img5 from "../../assets/scrollImages/scrollimg5.jpg";
import "./carousel.css";

function Carousel() {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3100,
  };
  const Images = [img1, img2, img3, img4, img5];

  return (
    <div className="Slider">
      <Slider {...Settings}>
        {Images.map((img, index) => (
          <img key={index} src={img} alt="Scroll_Img" />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
