import React from "react";
import {Carousel} from 'react-bootstrap'
import Image1 from '../../../Assets/images/projects/adrash-palm-acres/slider/1.png'

export default function AssetzBanyanSlider() {
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
            <h3>Assetz 38 & Banyan in CV Raman Nagar, Bangalore | Reviews | Group Buy | Price</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
