import React from 'react';
import style from "./Skills.module.css"

function Skills(props) {
    return (
        <div>
            <label className={style.skill}>
                            <h5 style={{  color:"aqua"}}>Backend Development</h5>
                            <p>Node.js, Express.js JavaScript, Object-oriented Development, Behaviour Driven Development, SOLID principles in OOP, Software testing with TDD and code Refactoring</p>
                            <h5 style={{  color:"aqua"}}>Frontend Development</h5>
                            <p>React.js, Vue.js, Custom Css, Bootstrap, Tailwind, GitHub, </p>
                            <h5 style={{  color:"aqua"}}>DataBases</h5>
                            <p>SQL database . Good at writing Materialised Views , views and Functions. </p>
                            <p>No Sql :  Using MongoDB and CouchDb to store data, </p>

                            <h5 style={{  color:"aqua"}}>Dev Ops</h5>
                             <p>AWS cloud services to host virtual machines, ES2 instances , Route 53 for domains, S3 buckets for storage and trasfering, snapshots for storage, Virtual Machines Images for backup and lightsail to host wordpress website </p>
                             <p>Azure Cloud services : To spin up virtual machines, to create docker containerised applications.</p>
                             <p> GitHub actions for continuous development and deployment</p>

                            <h5 style={{ color:"aqua"}}>Others</h5>
                            <p> Data Literacy,Communication </p>
                        </label>
        </div>
    );
}

export default Skills;