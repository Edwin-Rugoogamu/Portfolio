import React from "react";
import style from "./AboutMe.module.css";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import { Outlet } from "react-router-dom";

function AboutMe(props) {
  return (
    <div id="section2">
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6" id={style.col}>
            <img
              src="/images/DSC_9704.JPG"
              alt=""
              className={style.img}
            />
          </div>
          <div className="col" id={style.col1}>
            <h3>About Me</h3>
            <p>
              "Hi, I'm Edwin, a full-stack developer with 3 years' expertise in
              JavaScript. My forte lies in MERN and MEVN stacks, crafting
              powerful applications. Proficient in DevOps, I optimize workflows
              for efficiency. My knack for UI/UX drives engaging, user-centric
              designs. With a blend of front-end finesse and back-end prowess,
              I've contributed to scalable solutions and collaborated
              effectively in diverse teams. Eager to bring my multifaceted
              skills to innovate and collaborate on impactful projects."
            </p>
            <ul className={style.ul}>
              <Link to="/">
                {" "}
                <li className={style.li}>Skills</li>
              </Link>
              <Link to="/experience">
                {" "}
                <li className={style.li}>Experience</li>
              </Link>
              <Link to="/education">
                {" "}
                <li className={style.li2}>Education</li>
              </Link>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
