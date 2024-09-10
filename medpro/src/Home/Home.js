import React from "react";
import Slider from "react-slick";
import "./Home.scss"; // Create this CSS file for additional styling

// Sample images
const images = [
  "https://i0.wp.com/www.languageconnections.com/wp-content/uploads/2015/05/indian-doctor-talking-a-patient.jpg",
  "https://as1.ftcdn.net/v2/jpg/04/76/18/70/1000_F_476187063_924VJpFk2zMQ2QefqUFk2zZJkaiHbW7M.jpg",
  "https://medtourpress.ir/en/wp-content/uploads/2020/08/indian-doctor.jpg",
];

function Home() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
