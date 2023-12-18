import React from "react";
import LandingPageNavBar from "./components/LandingPage/LandingPageNavBar";
import style from "./LandingPage.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services";
import Contact from "./components/Contact/Contact";

function LandingPage(props) {
  return (
    <>
      <div className={style.main} id="section1">
        <LandingPageNavBar />
        <div id={style.header}>
        <div className="container-fluid" >
          <div className="row" id={style.header_row}>
            <div className="col">
              <h3 className={style.h3}>
                <label className={style.full_stack}>Full-Stack </label> developer,<br></br> UI/UX and DevOps
              </h3>
              <h1 className={style.h1}>
                HI, I'm Edwin
                <br /> Rugoogamu from  <label className={style.full_stack}>Uganda</label>
              </h1>
            </div>
            <div className="col" id={style.image}></div>
          </div>
        </div>
        <AboutMe />
        <Services/>
        <Contact/>
        </div>
     
      </div>
    </>
  );
}

export default LandingPage;
