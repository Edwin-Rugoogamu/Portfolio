import React from "react";
import style from "./LandingPageNavBar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../index.css";

function LandingPageNavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      closeOffcanvas();
    }
  }, [isLargeScreen]);

  // scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3"
          id={style.Navbar}
        >
          <Container fluid>
            <Navbar.Brand>
              {" "}
              <Link to="#" id={style.Link} onClick={() => scrollToSection('section1')}>
                {" "}
                <label className={style.e}>E</label>dwin .
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id={style.NavToggle}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-${expand}`}
              id="offcanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Edwin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section2')}> About</Nav>
                  </Link>
                  {/* yaa */}
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section3')}> Services</Nav>
                  </Link>
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section4')}> My Work</Nav>
                  </Link>
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section6')}> Certificates</Nav>
                  </Link>
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section5')}> Contact</Nav>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default LandingPageNavBar;
