import React from "react";
import { NavLink } from "react-router-dom";
import { StyledSlider } from "./StyledSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  //const slidesArray = ["https://imgur.com/3UahomA.png"];

  return (
    <StyledSlider>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        <NavLink to="/product/1">
          <div>
            <img
              src="https://user-images.githubusercontent.com/74660801/113933544-02853c80-97f5-11eb-95f1-c8d2f7895e34.jpg"
              alt="slider1"
            />
          </div>
        </NavLink>

        <NavLink to="/product/2">
          <div>
            <img
              src="https://user-images.githubusercontent.com/74660801/113934044-93f4ae80-97f5-11eb-9769-eb7987e1aa0c.jpg"
              alt="slider2"
            />
          </div>
        </NavLink>

        <NavLink to="/product/3">
          <div>
            <img
              src="https://user-images.githubusercontent.com/74660801/113934025-8f2ffa80-97f5-11eb-9e5a-d9bf3c39b9ea.jpg"
              alt="slider3"
            />
          </div>
        </NavLink>
      </Carousel>
    </StyledSlider>
  );
}
