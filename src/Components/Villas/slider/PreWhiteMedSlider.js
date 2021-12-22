import React from "react";
import {Carousel} from 'react-bootstrap'
import Image1 from '../../../Assets/images/projects/adrash-palm-acres/slider/1.png'

export default function PreWhiteMedSlider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Prestige White Meadows in Whitefield, Bangalore | Reviews | Group Buy | Price</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
