import React from 'react';
import style from "./Skills.module.css"

function Skills(props) {
    return (
        <div>
            <label className={style.skill}>
                            <h5 style={{  color:"aqua"}}>Web Development</h5>
                            <p>React.js, Node.js, Express.js, MongoDB, SQL, Vue.js, Custom Css, Bootstrap, Tailwind, GitHub, JavaScript, Object-oriented Development, Behaviour Driven Development, SOLID principles in OOP, Software testing with TDD and code Refactoring </p>
                            <h5 style={{color:"aqua"}}>DevOPs</h5>
                            <p> Cucumber, Docker , Github Actions, Jenkins, Blue Ocean and Aws  </p>
                            <h5 style={{ color:"aqua"}}>UI/UX</h5>
                            <p> Human-Centered Design, figma, </p>
                            <h5 style={{ color:"aqua"}}>Others</h5>
                            <p> Data Literacy,Communication </p>
                        </label>
        </div>
    );
}

export default Skills;