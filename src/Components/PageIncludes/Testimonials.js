import React from "react";
import { Carousel, Row, Container, Col, Image } from "react-bootstrap";
import Slide2 from "../../Assets/images/slider/nikoo-homes-iv-render-01.png";
export default function Slider() {
  return (
    <div
      id="testimonials"
      className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light custom"
    >
      <Carousel>
        <Carousel.Item interval={3000}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <h2 className=" pb-2 pb-md-4 text-center">Testimonials</h2>
              </Col>
              <Col md={8}>
                <div className="shadow">
                  <div className=" custom-1">
                    <Image src={Slide2} alt="Slide2" className="img-fluid" />
                  </div>
                  <div className="text-center border p-3 bg-white">
                    {/* <Image src={Slide4} alt="Slide4" className="img-fluid" /> */}
                    <p>
                      We had a very positive experience with them - both in the
                      sale of our previous home, and the search for & purchase
                      of our new home. They remained calm and confident through
                      all of the bumps we encountered along the way, and in turn
                      we stayed positive through the entire process - right down
                      to their helping we finish moving our things out of our
                      house just minutes before closing. I would definitely
                      recommend Prop Relator team to anyone looking to buy or
                      sell a home.​
                    </p>
                    <figure>
                      <blockquote className="blockquote">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <h2 className=" pb-2 pb-md-4 text-center">Testimonials</h2>
              </Col>
              <Col md={8}>
                <div className="shadow">
                  <div className=" custom-1">
                    <Image src={Slide2} alt="Slide2" className="img-fluid" />
                  </div>
                  <div className="text-center border p-3 bg-white">
                    {/* <Image src={Slide4} alt="Slide4" className="img-fluid" /> */}
                    <p>
                      We had a very positive experience with them - both in the
                      sale of our previous home, and the search for & purchase
                      of our new home. They remained calm and confident through
                      all of the bumps we encountered along the way, and in turn
                      we stayed positive through the entire process - right down
                      to their helping we finish moving our things out of our
                      house just minutes before closing. I would definitely
                      recommend Prop Relator team to anyone looking to buy or
                      sell a home.​
                    </p>
                    <figure>
                      <blockquote className="blockquote">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <h2 className=" pb-2 pb-md-4 text-center">Testimonials</h2>
              </Col>
              <Col md={8}>
                <div className="shadow">
                  <div className=" custom-1">
                    <Image src={Slide2} alt="Slide2" className="img-fluid" />
                  </div>
                  <div className="text-center border p-3 bg-white">
                    {/* <Image src={Slide4} alt="Slide4" className="img-fluid" /> */}
                    <p>
                      We had a very positive experience with them - both in the
                      sale of our previous home, and the search for & purchase
                      of our new home. They remained calm and confident through
                      all of the bumps we encountered along the way, and in turn
                      we stayed positive through the entire process - right down
                      to their helping we finish moving our things out of our
                      house just minutes before closing. I would definitely
                      recommend Prop Relator team to anyone looking to buy or
                      sell a home.​
                    </p>
                    <figure>
                      <blockquote className="blockquote">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
