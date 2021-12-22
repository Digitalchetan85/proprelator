import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";

export default function TopMenubar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        id="navbar"
        className="sticky-top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ps-3 pe-3 custom-nav-link text-uppercase" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                Apartment
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                Luxury Homes
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                New Launches
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                Ready To Move
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                Villas
              </Nav.Link>
              <Nav.Link
                className="ps-3 pe-3 custom-nav-link text-uppercase"
                as={Link}
                to=""
              >
                Plots
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
