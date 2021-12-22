import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import Second from "../../Assets/images/second-section.jpg";

export default function About() {
  return (
    <div>
      <div id="about-banner" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="text-white text-center pt-5 pb-5">About Us</h2>
        </Container>
      </div>
      <div id="about-first-section" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="pb-2 pb-md-4">Our Story</h2>
                <p className="pb-2 pb-md-4">
                  Powered by ideas, dedication of 50+ employees and having great
                  experience in Real Estate, Prop Relator offers professional
                  real estate services that guarantees adaptable and
                  client-centric solutions. With an unwavering dedication to
                  always exceed customer expectation and an in-depth
                  understanding of Indian economy & available opportunities,
                  combined with a collaborative culture that empowers our
                  workforce, we create exceptional real estate solutions for
                  clients by offering a wide range of integrated services,
                  including sale/purchase of property, appraisal & valuation,
                  strategic consulting and much more.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="pt-2 pb-2">
                  <i className="fas fa-check-circle text-primary"></i> Professional
                  Specialist
                </li>
                <li className="pt-2 pb-2">
                  <i className="fas fa-check-circle text-primary"></i> Brilliant
                  Ideas
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="pt-2 pb-2">
                  <i className="fas fa-check-circle text-primary"></i> Transparent
                </li>
                <li className="pt-2 pb-2">
                  <i className="fas fa-check-circle text-primary"></i> 24/7
                  Assiatance
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        id="about-second-section"
        className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light"
      >
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
            </Col>
            <Col md={6}>
              <Image src={Second} alt="Second section" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about-third-section" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <Image src={Second} alt="Second section" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2 className="pb-2 pb-md-4">What We Offer​?</h2>
              <p>
                <strong>Home Search</strong> – Assisting and helping you
                discover your dream home fitting your needs by giving you
                information on market trends, legalities, site visit help and so
                on.
              </p>
              <p>
                <strong>Home Loan Assistance</strong> – We will remove your
                agony of going around the banks to get your advance endorsed by
                giving doorstep administration of brokers of your decision at
                your place.
              </p>
              <p>
                <strong>Property Purchase Assistance</strong> – Ensuring that
                your home purchasing turns into a wonderful encounter, our
                Relationship Manager will be there all through the procedure of
                documentation.
              </p>
              <p>
                <strong>Interior Services</strong> – We are tied with best
                interior architects in the city who give the best designs and
                execute them at a competitive cost.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="vision-mission" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center">Our Mision</h2>
                <div className="text-center">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  We at Prop Relator are a prime real estate aggregator aspiring
                  to lead in the global real estate market. Our Vision is to
                  guide client’s worldwide, round-the clock in their home buying
                  process and become a one-stop solution for all their real
                  estate needs.
                </p>

                <h3 className="pb-3">Values</h3>
                <ul>
                  <li>Trust</li>
                  <li>Integrity</li>
                  <li>Excellence</li>
                  <li>Service</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="text-center">Our Mision</h2>
                <div className="text-center">
                  <i className="far fa-eye fs-1 pb-2"></i>
                </div>
                <p className="pt-2">
                  Our Mission currently is to expand our operations and customer
                  base across Bangalore markets, providing a holistic platform
                  to satisfy all the needs of our potential home buyers.
                </p>

                <p>
                  Online to Offline Approach to serve our customers till the
                  very end of the home buying process has helped us build a
                  long-lasting relationship over the years.
                </p>
                <p>
                  Having established a thriving and growing network in
                  Bangalore,we are working proactively on our mission to extend
                  our reputed services to home buyers in Delhi, Mumbai,and other
                  major metropolitan cities of India
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
