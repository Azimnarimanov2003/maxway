import React from "react";
import Slider from "react-slick";
import rasm1 from "../../../public/rasmG.jpg";
import rasm2 from "../../../public/rasmG.jpg";
import rasm3 from "../../../public/rasmG.jpg";
import rasm4 from "../../../public/rasmG.jpg";
import "./Home.css";
import Card from './../../Card/Card';
import FoodsMenu from "../../Components/FoodsMenu/FoodsMenu";
function Home() {

  const images = [
    { id: 1, src: rasm1, alt: "rasmG" },
    { id: 2, src: rasm2, alt: "rasmG" },
    { id: 3, src: rasm3, alt: "rasmG" },
    { id: 4, src: rasm4, alt: "rasmG" }
    
  ];

  // Slick slider settings
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img className="picture" src={images[i].src} alt={images[i].alt} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <div className="container">

 
        <div className="home">
          <Slider {...settings}>
            {images.map((image) => (
              <div className="box" key={image.id}>
                <img className="img" src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
       
        </div>
      </div>
    </div>
  );
}

export default Home;
