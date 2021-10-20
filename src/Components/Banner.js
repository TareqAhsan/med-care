import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../images/banner/banner1.jpg";
import banner2 from "../images/banner/banner2.jpg";
import banner3 from "../images/banner/banner3.jpg";
import banner4 from "../images/banner/banner4.jpg";
import banner5 from "../images/banner/banner5.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="First slide" />
          <Carousel.Caption className="text-primary">
            <h3>A passion for putting patients first.</h3>
            <p>Because Your Life Matters. Caring for your life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="text-primary">
            <h3>Exceptional care. Every patient. Every day.</h3>
            <p>
              Exceptional people. Exceptional care. Exceptional technology.
              Extraordinary care
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="text-primary">
            <h3>Advanced Healthcare Made Personal</h3>
            <p>
              Advanced Medicine, Trusted Care. Advancing medicine. Touching
              lives. Advancing the boundaries of medicine
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
