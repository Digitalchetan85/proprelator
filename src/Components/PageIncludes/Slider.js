import React from "react";
import {Carousel} from "react-bootstrap"
import Slide2 from '../../Assets/images/slider/nikoo-homes-iv-render-01.png'
import Slide3 from '../../Assets/images/slider/nikoo-homes-iv-render-04.png'
import Slide4 from '../../Assets/images/slider/nikoo-homes-iv-render-05.png'

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Slide4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}    >
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
