import React from 'react';
import style from "./Experience.module.css"
function Experience(props) {
    return (
        <div>
             <label className={style.skill}>
                            <h5 style={{ color:"aqua"}}>Ufarm </h5>
                            <p>Agricultural e-commerce</p>
                            <h5 style={{ color:"aqua"}}>Refactory Learning PLatform</h5>
                            <p>Provides courses,reading material,grading and certification </p>
                            <h5 style={{ color:"aqua"}}>BFarm </h5>
                            <p>Agricultural e-commerce </p>
                            <h5 style={{color:"aqua"}}>Jumia </h5>
                            <p> e-commerce </p>
                        </label>
        </div>
    );
}

export default Experience;