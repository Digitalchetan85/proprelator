import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import Slider from "../PageIncludes/Slider";
import Testimonials from "../PageIncludes/Testimonials";
import Icon1 from "../../Assets/images/icon1.png";
import Icon2 from "../../Assets/images/icon2.png";
import Icon3 from "../../Assets/images/icon3.png";
import Icon4 from "../../Assets/images/icon4.png";
import Second from "../../Assets/images/second-section.jpg";
import AssociationSlider from '../PageIncludes/AssociationSlider'
import OurProjectsVillas from '../PageIncludes/OurVillasProjects'

export default function Home() {
  return (
    <main>
      <div id="slider">
         <Slider />
      </div>
      <AssociationSlider />

      <OurProjectsVillas />

      {/* <OurApartmentsVillas /> */}

      <div id="second-section" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="pb-2 pb-md-4">Who we are?</h2>
              <p>
                We at Prop Relator are Bangalore’s most Trusted and Client
                Friendly Property Platform offering personalised services to
                transform your Dream Home into a Reality. We are a premium home
                buyer’s platform having strong digital marketing relations with
                leading developers across India with an aim to serve you with
                the optimal best from an ample of options. Our team is by your
                side every step of the way to ensure you have a hassle-free
                experience till you Live In.
              </p>
              <p>
                We at Prop Relator are Bangalore’s most Trusted and Client
                Friendly Property Platform offering personalised services to
                transform your Dream Home into a Reality. We are a premium home
                buyer’s platform having strong digital marketing relations with
                leading developers across India with an aim to serve you with
                the optimal best from an ample of options. Our team is by your
                side every step of the way to ensure you have a hassle-free
                experience till you Live In.
              </p>
              <Link to="/about-us" className="btn-primary btn mt-2 mt-md-4">Read More</Link>
            </Col>
            <Col md={6}>
              <Image src={Second} alt="Second section" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="first-section" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center pb-2 pb-md-5">Our Specialization</h2>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image
                  src={Icon1}
                  alt="Property Purschase Assistane"
                  className="img-fluid"
                />
                <h5 className="pt-2 pb-2">Property Purchase Assistance</h5>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image
                  src={Icon2}
                  alt="Property Purschase Assistane"
                  className="img-fluid"
                />
                <h5 className="pt-2 pb-2">Home Loan</h5>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image
                  src={Icon3}
                  alt="Property Purschase Assistane"
                  className="img-fluid"
                />
                <h5 className="pt-2 pb-2">Interior Services</h5>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image
                  src={Icon4}
                  alt="Property Purschase Assistane"
                  className="img-fluid"
                />
                <h5 className="pt-2 pb-2">Vastu Consultancy</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials />
    </main>
  );
}
