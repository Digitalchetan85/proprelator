import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div id="footer" className="pt-2 pb-2 pt-md-5 pb-md-5 bg-dark">
      <Container>
        <Row>
          <Col md={4}>
            <div className="text-white">
              <h3 className="pb-3">About PropRelator</h3>
              <p>
                We at PropRelator, take pride in adhering to our motto of
                Simplifying Real Estate, with being the only organization in
                across Bangalore to specialize in dealing with commercial as
                well as residential properties. PropRelator, provides a plethora
                of real estate services in Bangalore
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-white">
              <h3 className="pb-3">Contact Details</h3>
              <Row>
                <Col md={1} xs={1}>
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </Col>
                <Col md={11} xs={11}>
                  <p className="text-white">
                    #809, 5th Cross Rd, Bahubali Nagar, Jalahalli,
                    Bengaluru,560013
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={1} xs={1}>
                  <i className="fas fa-phone-volume text-primary"></i>
                </Col>
                <Col md={11} xs={11}>
                  <p className="text-white">+91 9036611010</p>
                </Col>
              </Row>
              <Row>
                <Col md={1} xs={1}>
                  <i className="fas fa-mobile-alt text-danger"></i>
                </Col>
                <Col md={11} xs={11}>
                  <p className="text-white">+91 8095999000</p>
                </Col>
              </Row>
              <Row>
                <Col md={1} xs={1}>
                  <i className="fas fa-envelope text-primary"></i>
                </Col>
                <Col md={11} xs={11}>
                  <p className="text-white">info@proprelator.com</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-white">
              <h3 className="pb-3">Quick Links</h3>
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Contact Us</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
