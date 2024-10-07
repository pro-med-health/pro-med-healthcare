import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Home.scss"; // Create this CSS file for additional styling
import { UncontrolledCarousel } from "reactstrap";
import { useNavigate } from "react-router-dom"; // useNavigate replaces useHistory

// Sample images
const images = [
  "https://i0.wp.com/www.languageconnections.com/wp-content/uploads/2015/05/indian-doctor-talking-a-patient.jpg",
  "https://as1.ftcdn.net/v2/jpg/04/76/18/70/1000_F_476187063_924VJpFk2zMQ2QefqUFk2zZJkaiHbW7M.jpg",
  "https://medtourpress.ir/en/wp-content/uploads/2020/08/indian-doctor.jpg",
];

const Home = (props) => {
  // Carousel settings
  const navigate = useNavigate(); // useNavigate for navigation

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // if (!isLoggedIn) {
    //   navigate("/login"); // navigate to login if not logged in
    // }
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <UncontrolledCarousel
          items={[
            {
              altText: "Slide 1",
              caption: "Slide 1",
              key: 1,
              src: "https://i0.wp.com/www.languageconnections.com/wp-content/uploads/2015/05/indian-doctor-talking-a-patient.jpg",
            },
            {
              altText: "Slide 2",
              caption: "Slide 2",
              key: 2,
              src: "https://as1.ftcdn.net/v2/jpg/04/76/18/70/1000_F_476187063_924VJpFk2zMQ2QefqUFk2zZJkaiHbW7M.jpg",
            },
            {
              altText: "Slide 3",
              caption: "Slide 3",
              key: 3,
              src: "https://medtourpress.ir/en/wp-content/uploads/2020/08/indian-doctor.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
