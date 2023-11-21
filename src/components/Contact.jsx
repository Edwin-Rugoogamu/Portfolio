import React from "react";
import style from "./Contact.module.css";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios"

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
            <h2>Contact Me</h2>
            <p> rugoogamuedwin5@gmail.com </p>
            <p> +256775722637</p>
            <p>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </p>
            <p>
              <a href="public/images/EDWIN RUGOOGAMU_resume.pdf" download>
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
