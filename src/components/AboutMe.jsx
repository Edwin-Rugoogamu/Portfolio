import React from 'react';
import style from "./AboutMe.module.css"
import { Link } from 'react-router-dom';
import Skills from './Skills';
import Experience from './Experience';
import { Outlet } from 'react-router-dom';

function AboutMe(props) {
    return (
        <div  id="section2">
            <div className="container-fluid" id={style.container}>
                <div className='row'>
                    <div className='col-sm-12 col-md-5 col-lg-6 col-xl-6' id={style.col}>
                        <img src="/images/IMG-20220711-WA0056.jpg" alt="" className={style.img} />
                    </div>
                    <div className='col' id={style.col1}>
                        <h3>About Me</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod optio blanditiis exercitationem laudantium ullam magni, voluptas sapiente facilis explicabo neque inventore amet. Dolorum rem voluptatem et, quasi libero recusandae facilis numquam? Saepe iste culpa quasi soluta minima, sed facere numquam facilis nostrum aut, magnam illum omnis mollitia repudiandae. Possimus, qui.</p>
                        <ul className={style.ul}>
                           <Link to="/skill"> <li className={style.li}>Skills</li></Link>
                           <Link to="/experience"> <li className={style.li}>Experience</li></Link>
                           <Link to="/education"> <li className={style.li}>Education</li></Link>
                   
                        </ul>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;