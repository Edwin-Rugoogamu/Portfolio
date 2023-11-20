import React from "react";
import style from "./Contact.module.css";


function Contact(props) {
  return (
    <div>
      <div className="container-fluid" id={style.container}>
        <div className="row" id ={style.row}>
        
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <h2>Contact Me</h2>
           <p> rugoogamuedwin5@gmail.com </p>
           <p> +256775722637</p>
            <p>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            </p>
            <p>
            <button className={style.button}>
                Download CV
            </button>
            </p>
            
          </div>
          <div className="col">
            <p>
                <input type="text" placeholder="Your Name" className={style.input} />
            </p>
            <p>
                <input type="email"  placeholder="Your Email" className={style.input}/>
            </p>
            <p>
                <textarea type="text"  placeholder="Your Message" className={style.input}/>
            </p>
            <p>
                <button className={style.button}>
                    Submit
                </button>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={style.container2}>
        <div className="row">
          <div className="col">
            Copyright made by Edwin Rugoogamu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
