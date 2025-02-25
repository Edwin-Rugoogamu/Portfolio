import React from 'react';
import style from "./Experience.module.css"
import { Link } from "react-router-dom";
function Experience(props) {
    return (
        <div>
             <label className={style.skill}>
                            <h5 style={{ color:"aqua"}}> GUILD DIGITAL FOUNDATION  </h5>
                            <h6>Tech Lead  (Jan 2023 - Present)</h6>
                            <p>I oversee the maintenance and continuous enhancement of the company's applications hosted on AWS and available on the Google Play Store. My responsibilities include ensuring optimal performance, resource allocation, and reliability to meet the needs of our users effectively.</p>
                            <p>I develop SQL queries to create materialized views, standard views, and functions to present data on Superset and Power BI based on user requirements. Additionally, I ensure data quality and consistency between the database and the dashboards for accurate and reliable insights.</p>
                            <p>I have developed the PostgreSQL database Cough2pg and the Community Health Toolkit web application using virtual machines such as Docker and container images. This experience has equipped me with strong expertise in containerization and virtualized environments.</p>
                            <p>I have developed 2 mobile applications on play store (rCHMIS and rCHMIS Training) which are used by refugee vhts to access the instance and carry out data collection.</p>
                            <p>I have designed data collection forms using XLSX and JavaScript, enabling Village Health Teams (VHTs) to gather data, which is initially stored in CoughDB. I then utilize a plugin to transfer the data seamlessly into the PostgreSQL database.</p>
                            <p>I coordinate the team to ensure our users get the best experience of the platforms. </p>
                            <p>I have developed and managed the maintenance of our WordPress website hosted on AWS Lightsail <Link to="https://guilddigital.co/" > GUILD DIGITAL</Link> . Additionally, I set up both production and development environments as EC2 instances on AWS, creating snapshots, AMIs, and managing volumes to ensure scalability and reliability.</p>
                            <p>I have utilized AWS Route 53 to ensure our domain names and URLs are secure and certified, protecting them from potential threats. Additionally, I optimized them to manage traffic effectively and enhance performance.</p>
                            <p>I successfully led the long-awaited upgrade of the CHT platform, an initiative that earned me an invitation from Medic to educate and support others in executing similar upgrades. This achievement was documented and shared on Medic's LinkedIn and YouTube channels <Link to="https://youtu.be/RSPDfnS1doY?si=LN_ga-0B22uDhD_d">My Updrade Presentation</Link> .</p>
                            <p>I actively participated in the National Digital Conference in Uganda, where we launched the National Digital Warehouse, aimed at advancing digital health initiatives.</p>
                            <p>In response to the growing global mental health challenges, we developed an AI-generated WhatsApp chatbot to collect patient data and provide referrals for appropriate treatment. This project was carried out in partnership with African Humanitarian Action.</p>
                           
                            <h5 style={{ color:"aqua"}}>REFACTORY</h5>
                            <h6>Full-Stack Developer</h6>
                            <p>I worked in a team of 6 with a Scrum Master. Where we developed a learning platform using Javascript, Node.js , React.js , MongoDB, express.js , typescript and cucumber.</p>
                            <p>I mainly worked in the backend and also worked in the frontend to design over 7 pages. I used React.js in the frontend and node.js with express.js in the backend.</p>
                            <p>I also got certified by refractory for my excellent work with a certificate in software engineering.</p>
                            <p>I enhanced my skills in CI/CD by managing and overseeing the deployment pipeline, ensuring efficient and reliable delivery of applications and updates.</p>

                            <h5 style={{ color:"aqua"}}>ECOMMERCE WEB APPLICATION </h5>
                            <h6>Full-Stack Developer</h6>
                            <p>I developed both the front-end and back-end of an application for a client selling products online, using React.js for the front-end and Django for the back-end to create a seamless and efficient e-commerce platform. </p>
                            <p>I used MangoDB to store data and leveraged AWS to secure the domain name, ensuring both data integrity and protection.</p>
                            <p>I did the CI/CD , using github , developed and maintained the application.</p>


                            <h5 style={{color:"aqua"}}>Jumia </h5>
                            <p> e-commerce </p>
                        </label>
        </div>
    );
}

export default Experience;