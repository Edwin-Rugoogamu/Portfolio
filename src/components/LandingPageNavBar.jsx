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
import "../index.css";

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
              <Link to="#" id={style.Link}>
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="#action1" id={style.Link}>
                    <Nav id={style.Link2}> Home</Nav>
                  </Link>
                  <Link to="#action2" id={style.Link}>
                    <Nav id={style.Link2}> About</Nav>
                  </Link>
                  {/* yaa */}
                  <Link to="#action2" id={style.Link}>
                    <Nav id={style.Link2}> Services</Nav>
                  </Link>
                  <Link to="#action2" id={style.Link}>
                    <Nav id={style.Link2}> Portfolio</Nav>
                  </Link>
                  <Link to="#action2" id={style.Link}>
                    <Nav id={style.Link2}> Contact</Nav>
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
