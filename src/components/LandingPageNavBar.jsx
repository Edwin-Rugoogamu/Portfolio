import React from "react";
import "./LandingPageNavBar.css";
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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      closeOffcanvas();
    }
  }, [isLargeScreen]);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3" id="Navbar">
          <Container fluid>
            <Navbar.Brand>
              {" "}
              <Link to="#" id="Link">
                {" "}
                Navbar Offcanvas
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="NavToggle" onClick={() => setShowOffcanvas(!showOffcanvas)}/>
            <Navbar.Offcanvas 
              // id={`offcanvasNavbar-expand-${expand}`}
              id="offcanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas} onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav id="Link2">
                    {" "}
                    <Link to="#action1" id="Link">
                      {" "}
                      Home
                    </Link>
                  </Nav>
                  <Nav id="Link2">
                    <Link to="#action2" id="Link">
                      {" "}
                      About
                    </Link>
                  </Nav>

                  {/* yaa */}
                  <Nav id="Link2">
                    <Link to="#action2" id="Link">
                      {" "}
                      Services
                    </Link>
                  </Nav>
                  <Nav id="Link2">
                    <Link to="#action2" id="Link">
                      {" "}
                      Portfolio
                    </Link>
                  </Nav>
                  <Nav id="Link2">
                    <Link to="#action2" id="Link">
                      {" "}
                      Contact
                    </Link>
                  </Nav>
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
