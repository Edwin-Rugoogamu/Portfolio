import React from "react";
import style from "./Contact.module.css";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios"
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  // const handleSubmit = async (e) => {
    // e.preventDefault();
   
    const api= "https://script.google.com/macros/s/AKfycbwBm9bYNJwPz-yCIHEciYzI1krAdC92eykCmUyApvs1hu7ycIcC_2mGemuIumVsbrZ_TQ/exec";
    // try {
    //   const response = await axios.fetch(api,{
    //     name:name,
    //     email:email,
    //     text:text,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(response),
    //   });
    //   alert("Successfully Submitted")
    //   console.log(response.data)
    //   setName(""),
    //   setEmail(""),
    //   setText("")
    // } catch (error) {
    //   if (error.response) {
    //     alert(error);
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //   } else if (error.request) {
       
    //     console.log(error.request);
    //   } else {
    
    //     console.log("Error", error.message);
    //   }
    // }
    // const [formData, setFormData] = useState({
   
    //   name: '',
    //   email: '',
    //   text:'',
      
    // });
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   try {
    //     const response = await fetch(api, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });
  
    //     const data = await response.json();
    //     console.log('Data sent:', data);
        
    //   } catch (error) {
    //     console.error('Error sending data:', error);
        
    //   }
    // };
    const form = document.forms['submit-to-google-sheet']
    const handleSubmit= ('submit', e => {
      e.preventDefault()
      setName(""),
      setEmail(""),
      setText("")
      fetch(api, { method: 'POST', body: new FormData(form)})
      alert("Successfully Submitted")
        console.log(response.data)
       
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
   
// }
  return (
    <div id="section5">
      
      <div className="container-fluid" id={style.container}>
        <div className="row" id={style.row}>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <h2>  Contact Me</h2>
            <p><MdOutlineEmail size={40}/> <Link to="mailto:rugoogamuedwin5@gmail.com" className={style.Link}>rugoogamuedwin5@gmail.com </Link></p>
            <p><FaPhoneAlt size={40} /> <Link to="tel:+256775722637" className={style.Link}> +256775722637</Link></p>
            <p><FaWhatsapp size={40}/> +256775722637</p>
            <p className={style.icon}>
            
              <Link to="https://www.linkedin.com/in/edwin-rugoogamu-906424244/" className={style.Link}><FaLinkedin size={40} className={style.icons} /></Link>
              <Link to="https://github.com/Edwin-Rugoogamu" className={style.Link}> <FaGithub size={40} className={style.icons}/></Link>
              <Link to="" className={style.Link}><FaTwitter size={40} className={style.icons}/></Link>
              {/* <Link to="" className={style.Link}> <FaDiscord  size={40}className={style.icons} /></Link> */}
            </p>
            <p>
              <a href="public/images/EDWIN RUGOOGAMU_resume (1).pdf" download>
                <button className={style.button}>Download CV</button>
              </a>
            </p>
          </div>
          <div className="col">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                placeholder="Your Name"
                className={style.input}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Your Email"
                className={style.input}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <textarea
                type="text"
                placeholder="Your Message"
                className={style.input}
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </p>
            <p>
              <button className={style.button}>Submit</button>
            </p>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={style.container2}>
        <div className="row">
          <div className="col">Copyright made by Edwin Rugoogamu</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
